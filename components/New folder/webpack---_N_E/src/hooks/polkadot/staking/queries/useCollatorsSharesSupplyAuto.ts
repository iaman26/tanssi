import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsPoolsWithOption,
} from '@/hooks/polkadot/staking';

export function useCollatorsSharesSupplyAuto(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  return useCollatorsPoolsWithOption({
    option: 'AutoCompoundingSharesSupply',
    collators,
    config,
  });
}
