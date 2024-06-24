import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import type { Vec, u32 } from '@polkadot/types';
import { useApi } from '../../useApi';

export function useRegisteredParaIds(
  config: ChainConfig | undefined,
): number[] | undefined {
  const api = useApi(config?.ws);

  return useApiCall(
    api?.query.registrar.registeredParaIds,
    [],
    transformRegisteredParaIds,
  );
}

export function transformRegisteredParaIds(
  registeredParaIds: Vec<u32>,
): number[] {
  return registeredParaIds?.map((v) => v.toNumber()) || [];
}
