import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import { u256 } from '@polkadot/types-codec';

export function useAppchainBaseFee(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): bigint | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.query.baseFee.baseFeePerGas, [], transform);
}

function transform(fee: u256): bigint {
  return fee.toBigInt();
}
