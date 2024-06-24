import { ChainConfig } from '@/config';
import { useUserAllAutoRewards } from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useUserAutoRewards(config: ChainConfig): bigint {
  const rewards = useUserAllAutoRewards(config);

  return useMemo(
    () =>
      rewards
        ? Object.values(rewards).reduce((acc, reward) => acc + reward, 0n)
        : 0n,
    [rewards],
  );
}
