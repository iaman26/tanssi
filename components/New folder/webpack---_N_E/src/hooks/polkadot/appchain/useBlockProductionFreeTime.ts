import { ChainConfig } from '@/config';
import {
  useBlockProductionCredits,
  useCollatorAssignmentCredits,
} from '@/hooks/polkadot/appchain';
import { getBlockProductionFreeTime } from '@/utils/tanssi';
import { useMemo } from 'react';

export function useBlockProductionFreeTime(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): number | undefined {
  const blockProductionCredits = useBlockProductionCredits(paraId, config);
  const collatorAssignmentCredits = useCollatorAssignmentCredits(
    paraId,
    config,
  );

  return useMemo(() => {
    if (!blockProductionCredits || !collatorAssignmentCredits || !config) {
      return;
    }

    return getBlockProductionFreeTime(
      blockProductionCredits,
      collatorAssignmentCredits,
      config.blocksPerSession,
      config.blockTime,
    );
  }, [blockProductionCredits, collatorAssignmentCredits, config]);
}
