import { ChainConfig } from '@/config';
import { useApi } from '@/hooks/polkadot';
import { useRegisteredParaIds } from '@/hooks/polkadot/common';
import { ApiPromise } from '@polkadot/api';

export function useAppchainApi(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): ApiPromise | undefined {
  const registeredParaIds = useRegisteredParaIds(config);

  const ws =
    paraId && registeredParaIds?.includes(paraId)
      ? config?.getAppChainUrls(paraId).ws
      : undefined;

  return useApi(ws);
}
