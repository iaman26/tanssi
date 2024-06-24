import '@polkadot/api-augment/polkadot';

import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { RelayChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import type { PolkadotRuntimeParachainsParasParaLifecycle } from '@polkadot/types/lookup';
import { useApi } from '../../useApi';

export function useParaLifecycles(config: RelayChainConfig) {
  const api = useApi(config.ws);
  const { paraId } = useCreateAppChainInfo();

  return useApiCall(
    api?.query.paras.paraLifecycles,
    [paraId],
    transformLifecycle,
    { shouldUnwrap: false },
  );
}

export function transformLifecycle(
  lifeCycle: PolkadotRuntimeParachainsParasParaLifecycle,
): PolkadotRuntimeParachainsParasParaLifecycle['type'] | undefined {
  return lifeCycle.toPrimitive() as
    | PolkadotRuntimeParachainsParasParaLifecycle['type']
    | undefined;
}
