import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import type { Vec, u32 } from '@polkadot/types';
import { useApi } from '../../useApi';

export function usePendingParaIds(config: ChainConfig): number[] | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.registrar.pendingParaIds,
    [],
    transformPendingParaIds,
  );
}

function transformPendingParaIds(pendingParaIds: [[u32, Vec<u32>]]): number[] {
  return pendingParaIds?.[0]?.[1]?.map((v) => v.toNumber()) || [];
}
