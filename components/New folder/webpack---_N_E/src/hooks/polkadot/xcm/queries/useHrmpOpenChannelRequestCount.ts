import { RelayChainConfig } from '@/config';
import type { u32 } from '@polkadot/types-codec';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';

export function useHrmpOpenChannelRequestCount(
  config: RelayChainConfig,
): number | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.query.hrmp.hrmpOpenChannelRequestCount, [], transform);
}

function transform(count: u32): number {
  return count.toNumber();
}
