import { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useMyCollatorsAddresses,
  useUserAllHeldStakeAuto,
  useUserAllTotalStakeAuto,
} from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useUserAllAutoRewards(
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const myCollators = useMyCollatorsAddresses(config);
  const autoStaked = useUserAllTotalStakeAuto(myCollators, config);
  const heldStake = useUserAllHeldStakeAuto(myCollators, config);

  return useMemo(() => {
    if (!myCollators || !autoStaked || !heldStake) return;

    const rewards: CollatorsPoolsValue = {};

    myCollators.forEach((collator) => {
      const totalStake = autoStaked?.[collator] || 0n;
      const heldStakeAmount = heldStake?.[collator] || 0n;

      rewards[collator] = totalStake - heldStakeAmount;
    });

    return rewards;
  }, [autoStaked, heldStake, myCollators]);
}
