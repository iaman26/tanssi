import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsSelfStakeAuto,
  useCollatorsSelfStakeManual,
} from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useCollatorsSelfStake(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const auto = useCollatorsSelfStakeAuto(collators, config);
  const manual = useCollatorsSelfStakeManual(collators, config);

  return useMemo(() => {
    if (!auto || !manual || !collators) return;

    const result: CollatorsPoolsValue = {};

    collators.forEach((collator) => {
      const autoValue = auto[collator];
      const manualValue = manual[collator];

      result[collator] = (autoValue || 0n) + (manualValue || 0n);
    });

    return result;
  }, [auto, collators, manual]);
}
