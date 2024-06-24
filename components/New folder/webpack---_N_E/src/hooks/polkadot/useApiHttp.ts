import { showNotification } from '@mantine/notifications';
import { ApiPromise, HttpProvider } from '@polkadot/api';
import { typesBundle } from '@polkadot/apps-config';
import { useEffect, useState } from 'react';

export function useApiHttp(
  endpoint: string | undefined,
): ApiPromise | undefined {
  const [api, setApi] = useState<ApiPromise | undefined>();

  useEffect(() => {
    if (endpoint) {
      getPolkadotHttpApi(endpoint)
        .then(setApi)
        .catch((error) => {
          console.error(error);
          showNotification({
            message: 'Error connecting to the network. Please try again later.',
            title: 'Connection error',
            color: 'red',
          });
        });
    } else {
      setApi(undefined);
    }
  }, [endpoint]);

  return api;
}

export async function getPolkadotHttpApi(
  endpoint: string,
): Promise<ApiPromise> {
  const promise = ApiPromise.create({
    noInitWarn: true,
    provider: new HttpProvider(endpoint),
    typesBundle,
  });
  const api = await promise;
  await api.isReady;

  return api;
}
