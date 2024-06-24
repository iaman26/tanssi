import { ChainConfig } from '@/config';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import type { Text } from '@polkadot/types-codec';
import type { Observable } from '@polkadot/types/types';
import { useApiCall } from '../../useApiCall';

export function useAppchainName(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): string | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.rpc.system.chain, [], transform);
}

function transform(chain: Observable<Text>): string {
  return chain.toString();
}
