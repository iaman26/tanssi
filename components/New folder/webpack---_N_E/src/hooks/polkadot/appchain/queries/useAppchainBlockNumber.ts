import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import type { u32 } from '@polkadot/types';

export function useAppchainBlockNumber(
  paraId: number | undefined,
  config: ChainConfig,
): number | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.query.system.number, [], transformSystemNumber);
}

function transformSystemNumber(number: u32): number {
  return number.toNumber();
}
