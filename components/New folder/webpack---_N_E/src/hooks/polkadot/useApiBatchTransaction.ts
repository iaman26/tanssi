import { BaseChainConfig } from '@/config';
import { Callbacks, useApi, useApiTransaction } from '@/hooks/polkadot';

export function useApiBatchTransaction(
  config: BaseChainConfig,
  { onEvents, onSuccess, onError }: Callbacks = {},
) {
  const api = useApi(config.ws);

  return useApiTransaction({
    tx: api?.tx.utility.batch,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess,
    onError,
    onEvents,
  });
}
