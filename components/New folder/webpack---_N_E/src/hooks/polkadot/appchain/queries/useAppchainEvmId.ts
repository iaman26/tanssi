import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import type { u64 } from '@polkadot/types';

export function useAppchainEvmId(
  paraId: number | undefined,
  config: ChainConfig,
): number | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.query.evmChainId?.chainId, [], transform);
}

function transform(chainId: u64): number {
  return chainId.toNumber();
}
