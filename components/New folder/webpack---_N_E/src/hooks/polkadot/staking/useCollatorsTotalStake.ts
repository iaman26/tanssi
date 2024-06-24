import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsTotalStakedAuto,
  useCollatorsTotalStakedManual,
} from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useCollatorsTotalStake(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const auto = useCollatorsTotalStakedAuto(collators, config);
  const manual = useCollatorsTotalStakedManual(collators, config);

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
