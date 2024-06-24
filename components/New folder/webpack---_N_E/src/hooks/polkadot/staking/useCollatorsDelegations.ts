import { ChainConfig } from '@/config';
import { useCollatorPools } from '@/hooks/polkadot/staking';
import { isDefined } from '@/utils/validate';
import { useMemo } from 'react';

export function useCollatorsDelegations(
  collators: string[] | undefined,
  config: ChainConfig,
): Record<string, number> | undefined {
  const poolsQueryResult = useCollatorPools(collators || [], config);

  return useMemo(() => {
    if (!poolsQueryResult) return;

    const delegations: Record<string, number> = {};

    poolsQueryResult.forEach(({ data: pools }) => {
      if (!isDefined(pools?.collator)) return;

      const addresses = new Set([pools.collator]);

      [
        ...(pools.AutoCompoundingShares || []),
        ...(pools.ManualRewardsShares || []),
      ].forEach((shares) => {
        const [address, amount] = Object.entries(shares)[0];

        if (amount > 0n) addresses.add(address);
      });

      delegations[pools.collator] = addresses.size - 1;
    });

    return delegations;
  }, [poolsQueryResult]);
}
