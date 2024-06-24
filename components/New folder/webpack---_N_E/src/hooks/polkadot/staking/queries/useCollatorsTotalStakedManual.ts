import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsPoolsWithOption,
} from '@/hooks/polkadot/staking';

export function useCollatorsTotalStakedManual(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  return useCollatorsPoolsWithOption({
    option: 'ManualRewardsSharesTotalStaked',
    collators,
    config,
  });
}
