import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsPoolsWithOption,
} from '@/hooks/polkadot/staking';
import { useConnectedAddressOrProxied } from '@/hooks/useConnectedAddressOrProxied';

export function useUserAllHeldStakeAuto(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const address = useConnectedAddressOrProxied();

  return useCollatorsPoolsWithOption({
    option: { AutoCompoundingSharesHeldStake: { delegator: address } },
    collators,
    config,
  });
}
