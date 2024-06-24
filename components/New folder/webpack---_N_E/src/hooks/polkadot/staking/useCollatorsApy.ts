import { ChainConfig } from '@/config';
import { useActiveConfig } from '@/hooks/polkadot/common';
import {
  useActiveCollators,
  useCollatorsTotalStake,
  useInflationRewards,
} from '@/hooks/polkadot/staking';
import { getCollatorApy, getRewardsPerCollator } from '@/utils/tanssi';
import Big from 'big.js';

export const BLOCKS_PER_YEAR = 2628000;

export function useCollatorsApy(
  collators: string[] | undefined,
  config: ChainConfig,
  withStake?: Big | undefined,
): Record<string, number> | undefined {
  const blockRewardsPerChain = useInflationRewards(config);
  const activeCollatorsRaw = useActiveCollators(config);
  const collatorsTotal = useCollatorsTotalStake(collators, config);
  const tanssiConfig = useActiveConfig(config);

  if (
    !collators ||
    !activeCollatorsRaw ||
    !blockRewardsPerChain ||
    !tanssiConfig
  )
    return;

  const appchains = Object.keys(activeCollatorsRaw.containerChains).length;
  const orchestrators = activeCollatorsRaw.orchestratorChain.length;
  const yearlyRewardsPerChain = Big(blockRewardsPerChain.toString()).mul(
    BLOCKS_PER_YEAR,
  );

  if (!yearlyRewardsPerChain) return;

  const yearlyRewardsPerCollator = getRewardsPerCollator(
    yearlyRewardsPerChain,
    appchains,
    tanssiConfig.collatorsPerContainer,
    orchestrators,
  );

  const collatorsApy: Record<string, number> = {};

  collators.forEach((collator) => {
    const total = collatorsTotal?.[collator] || 0n;
    const totalBig = Big((total || 1n).toString());
    const apy = getCollatorApy(yearlyRewardsPerCollator, totalBig, withStake);

    collatorsApy[collator] = Number(apy);
  });

  return collatorsApy;
}
