import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsSelfSharesAuto,
  useCollatorsSharesSupplyAuto,
  useCollatorsTotalStakedAuto,
  useDelegatorsTotalStake,
} from '@/hooks/polkadot/staking';

export function useCollatorsSelfStakeAuto(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const totalStakeAuto = useCollatorsTotalStakedAuto(collators, config);
  const sharesSupplyAuto = useCollatorsSharesSupplyAuto(collators, config);
  const selfSharesAuto = useCollatorsSelfSharesAuto(collators, config);

  return useDelegatorsTotalStake({
    collators,
    shares: selfSharesAuto,
    totalStake: totalStakeAuto,
    sharesSupply: sharesSupplyAuto,
  });
}
