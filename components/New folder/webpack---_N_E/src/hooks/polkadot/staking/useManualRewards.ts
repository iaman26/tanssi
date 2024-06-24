import { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useManualRewardsCheckpoint,
  useManualRewardsCounter,
} from '@/hooks/polkadot/staking';

export function useManualRewards(
  collators: string[] | undefined,
  manualShares: CollatorsPoolsValue | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const counter = useManualRewardsCounter(collators, config);
  const checkpoint = useManualRewardsCheckpoint(collators, config);

  if (!counter || !checkpoint || !collators) return;

  const result: CollatorsPoolsValue = {};

  collators.forEach((collator) => {
    const counterValue = counter[collator];
    const checkpointValue = checkpoint[collator];
    const shares = manualShares?.[collator];

    if (!counterValue || !shares || !checkpointValue) return;

    result[collator] = (counterValue - checkpointValue) * shares;
  });

  return result;
}
