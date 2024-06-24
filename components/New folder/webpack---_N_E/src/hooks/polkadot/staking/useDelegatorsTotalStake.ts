import { CollatorsPoolsValue } from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

interface DelegationsStake {
  collators: string[] | undefined;
  shares: CollatorsPoolsValue | undefined;
  totalStake: CollatorsPoolsValue | undefined;
  sharesSupply: CollatorsPoolsValue | undefined;
}

export function useDelegatorsTotalStake({
  collators,
  shares,
  totalStake,
  sharesSupply,
}: DelegationsStake): CollatorsPoolsValue | undefined {
  return useMemo(() => {
    if (!collators || !shares || !totalStake || !sharesSupply) return;
    const totalDelegationStake: CollatorsPoolsValue = {};

    collators.forEach((collator) => {
      const supply = sharesSupply[collator];
      const total = totalStake[collator];
      const myShares = shares[collator];

      if (!supply || !total || !myShares) return;

      totalDelegationStake[collator] = (myShares * total) / supply;
    });

    return totalDelegationStake;
  }, [collators, shares, sharesSupply, totalStake]);
}
