import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import { Permill } from '@polkadot/types/interfaces';

export function useAppchainElasticity(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): bigint | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.query.baseFee.elasticity, [], transform);
}

function transform(value: Permill): bigint {
  return value.toBigInt();
}
