import { ApiPromise } from '@polkadot/api';
import type { UnsubscribePromise, VoidFn } from '@polkadot/api/types';
import { Option, StorageKey } from '@polkadot/types';
import { AnyTuple, Codec } from '@polkadot/types/types';
import * as Sentry from '@sentry/nextjs';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { stringify } from 'superjson';

interface Tracker {
  trackedApi: ApiPromise | null;
  isActive: boolean;
  serializedFn: string | null;
  serializedParams: string | null;
  subscriber: VoidFn | EntriesResponse | null;
}
type TrackerRef = MutableRefObject<Tracker>;

type EntriesResponse<K extends AnyTuple = AnyTuple> = [
  StorageKey<K>,
  unknown,
][];

type UnsubscribePromiseEntries = Promise<EntriesResponse>;

type QueryFn = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ...args: any[]
) => UnsubscribePromise | UnsubscribePromiseEntries;

type QueryInfo = {
  section: string;
  method: string;
};
export type QueryFnWithInfo = QueryFn & QueryInfo;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type TransformFn<T> = (value: any, params: any[]) => T;

type QueryResponse<T extends Codec = Codec> =
  | T
  | Option<T>
  | QueryResponse<T>[];

type Options = {
  shouldUnwrap?: boolean;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function defaultTransform<T>(resp: any): T {
  return resp as T;
}

function tryToUnwrap<U extends Codec>(res: QueryResponse<U>): U | U[] {
  if (res && typeof res === 'object' && 'unwrapOrDefault' in res) {
    return res.unwrapOrDefault();
  }

  if (Array.isArray(res)) {
    return res.map((item) => tryToUnwrap(item)) as U[];
  }

  return res;
}

function subscribe<T>(
  tracker: TrackerRef,
  fn: QueryFn,
  params: unknown[],
  setValue: (value: T) => void,
  transform: TransformFn<T>,
  shouldUnwrap = true,
): void {
  unsubscribe(tracker);
  tracker.current.isActive = true;

  fn(...params, (resp: QueryResponse): void => {
    if (tracker.current.isActive) {
      setValue(transform(shouldUnwrap ? tryToUnwrap(resp) : resp, params));
    }
  })
    .then((result) => {
      tracker.current.subscriber = result;
    })
    .catch((cause) => {
      // TODO: Improve type of QueryFn
      // biome-ignore lint/suspicious/noExplicitAny: is difficult to find a correct type from Polkadot API.
      const name = `${(fn as any).section}.${(fn as any).method}`;
      const error = new Error(`Error in useApiCall by calling ${name}`, {
        cause,
      });

      console.error(error);
      Sentry.captureException(error, {
        extra: {
          cause,
          params,
          function: name,
        },
      });
    });
}

function unsubscribe(tracker: TrackerRef): void {
  tracker.current.isActive = false;

  if (tracker.current.subscriber && typeof unsubscribe === 'function') {
    (tracker.current.subscriber as VoidFn)();
    tracker.current.subscriber = null;
  }
}

export function useApiCall<T>(
  fn: QueryFn | undefined,
  params: unknown[] = [],
  transform: TransformFn<T> = defaultTransform,
  { shouldUnwrap }: Options = { shouldUnwrap: true },
): T | undefined {
  const transformRef = useRef(transform);
  const [value, setValue] = useState<T | undefined>();
  const tracker = useRef<Tracker>({
    trackedApi: null,
    isActive: false,
    serializedFn: null,
    serializedParams: null,
    subscriber: null,
  });

  transformRef.current = transform;

  useEffect(() => {
    return () => unsubscribe(tracker);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: passing deps as rest arguments
  useEffect(() => {
    if (
      !fn ||
      !params ||
      params.some((param) => param === undefined || param === null)
    ) {
      setValue(undefined);
      tracker.current.serializedParams = null;

      return;
    }

    const { serializedFn, serializedParams, isActive } = tracker.current;
    const { section, method } = fn as QueryFnWithInfo;
    const newSerializedFn = `${section}.${method}`;
    const newSerializedParams = stringify(params);

    if (
      newSerializedFn !== serializedFn ||
      newSerializedParams !== serializedParams ||
      !isActive
    ) {
      setValue(undefined);
      tracker.current.serializedFn = newSerializedFn;
      tracker.current.serializedParams = newSerializedParams;

      subscribe(
        tracker,
        fn,
        params,
        setValue,
        transformRef.current,
        shouldUnwrap,
      );
    }
  }, [fn, ...params]);

  return value;
}
