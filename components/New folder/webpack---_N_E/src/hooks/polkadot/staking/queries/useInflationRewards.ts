import { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import type { PalletInflationRewardsChainsToRewardValue } from '@polkadot/types/lookup';

export function useInflationRewards(config: ChainConfig): bigint | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.query.inflationRewards.chainsToReward, [], transform);
}

function transform(rewards: PalletInflationRewardsChainsToRewardValue): bigint {
  return rewards.rewardsPerChain.toBigInt();
}
