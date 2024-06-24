import { useIdleState } from '@/state/idle/idle.hooks';
import { useIdle } from '@mantine/hooks';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundle } from '@polkadot/apps-config';
import { LRUCache } from 'lru-cache';
import { useEffect, useState } from 'react';

const TIMEOUT = 10 * 60 * 1_000;

const cache = new LRUCache<string, Promise<ApiPromise>>({
  max: 10,
  dispose: async (promise: Promise<ApiPromise>) => {
    const api = await promise;

    if (api.isConnected) {
      api.disconnect();
    }
  },
});

export async function getPolkadotApi(ws: string): Promise<ApiPromise> {
  const promise =
    cache.get(ws) ||
    ApiPromise.create({
      noInitWarn: true,
      provider: new WsProvider(ws),
      typesBundle,
    });

  cache.set(ws, promise);

  const api = await promise;

  await api.isReady;

  return api;
}

export function useApi(ws: string | undefined): ApiPromise | undefined {
  const idle = useIdle(TIMEOUT, { initialState: false });
  const { setIsIdle } = useIdleState();
  const [api, setApi] = useState<ApiPromise | undefined>();

  useEffect(() => {
    if (ws) {
      getPolkadotApi(ws).then(setApi);
    } else {
      setApi(undefined);
    }
  }, [ws]);

  useEffect(() => {
    if (ws && api && api.isConnected && idle) {
      setIsIdle(true);
      cache.delete(ws);
      api.disconnect();
    }
  }, [api, idle, setIsIdle, ws]);

  return api;
}
