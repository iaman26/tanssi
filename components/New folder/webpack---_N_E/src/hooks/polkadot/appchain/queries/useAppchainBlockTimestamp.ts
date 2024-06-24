import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import type { u64 } from '@polkadot/types';

export function useAppchainBlockTimestamp(
  paraId: number | undefined,
  config: ChainConfig,
): string | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.query.timestamp.now, [], transformTimestamp);
}

function transformTimestamp(timestamp: u64): string {
  if (timestamp.isEmpty) {
    return 'N/A';
  }

  return new Date(timestamp.toNumber()).toLocaleTimeString();
}
