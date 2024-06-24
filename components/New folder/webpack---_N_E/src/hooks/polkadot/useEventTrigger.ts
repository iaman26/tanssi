import type { ApiPromise } from '@polkadot/api';
import type { AugmentedEvent } from '@polkadot/api/types';
import type { Vec } from '@polkadot/types';
import type { EventRecord } from '@polkadot/types/interfaces';
import { useEffect, useRef, useState } from 'react';
import { useApiCall } from './useApiCall';

export type Event = AugmentedEvent<'promise'> | undefined;

export interface Result {
  hash: string;
  events: EventRecord[];
}

const EMPTY_RESULT: Result = {
  hash: '',
  events: [],
};

const IDENTITY_FILTER = (): boolean => true;

export interface UseEventTriggerOptions {
  api: ApiPromise | undefined;
  events: Event[];
  filter?: (record: EventRecord) => boolean;
  onTrigger?: (result: Result) => void;
}

export function useEventTrigger({
  api,
  events,
  filter = IDENTITY_FILTER,
  onTrigger,
}: UseEventTriggerOptions): Result {
  const eventsRef = useRef(events);
  const filterRef = useRef(filter);
  const onTriggerRef = useRef(onTrigger);
  const [state, setState] = useState(EMPTY_RESULT);
  const records = useApiCall<Vec<EventRecord>>(api?.query.system.events, []);

  eventsRef.current = events;
  filterRef.current = filter;
  onTriggerRef.current = onTrigger;

  useEffect((): void => {
    if (!records) {
      return;
    }

    const events = records.filter(
      (r) =>
        r.event &&
        eventsRef.current.some((c) => c && c.is(r.event)) &&
        filterRef.current(r),
    );

    if (events.length) {
      const newResult = {
        hash: events[0].toHex(),
        events,
      };

      setState(newResult);
      onTriggerRef.current?.(newResult);
    }
  }, [records]);

  return state;
}
