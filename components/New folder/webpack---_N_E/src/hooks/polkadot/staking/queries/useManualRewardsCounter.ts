import { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsPoolsWithOption,
} from '@/hooks/polkadot/staking';

export function useManualRewardsCounter(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  return useCollatorsPoolsWithOption({
    option: 'ManualRewardsCounter',
    collators,
    config,
  });
}
