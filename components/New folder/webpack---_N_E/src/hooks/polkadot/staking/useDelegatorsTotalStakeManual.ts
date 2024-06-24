import { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsSharesSupplyManual,
  useCollatorsTotalStakedManual,
  useUserAllSharesManual,
} from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useDelegatorsTotalStakeManual(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const manualShares = useUserAllSharesManual(collators, config);
  const totalStaked = useCollatorsTotalStakedManual(collators, config);
  const sharesSupply = useCollatorsSharesSupplyManual(collators, config);

  return useMemo(() => {
    if (!collators || !manualShares || !totalStaked || !sharesSupply) return;
    const delegations: CollatorsPoolsValue = {};

    collators.forEach((collator) => {
      const supply = sharesSupply[collator];
      const total = totalStaked[collator];
      const manual = manualShares[collator];

      if (!supply || !total || !manual) return;

      delegations[collator] = (manual * total) / supply;
    });

    return delegations;
  }, [collators, manualShares, totalStaked, sharesSupply]);
}
