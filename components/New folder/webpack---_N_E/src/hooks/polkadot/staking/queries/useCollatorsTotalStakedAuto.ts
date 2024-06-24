import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsPoolsWithOption,
} from '@/hooks/polkadot/staking';

export function useCollatorsTotalStakedAuto(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  return useCollatorsPoolsWithOption({
    option: 'AutoCompoundingSharesTotalStaked',
    collators,
    config,
  });
}
