import { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsSharesSupplyAuto,
  useCollatorsTotalStakedAuto,
  useDelegatorsTotalStake,
  useUserAllSharesAuto,
} from '@/hooks/polkadot/staking';

export function useUserAllTotalStakeAuto(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const shares = useUserAllSharesAuto(collators, config);
  const totalStake = useCollatorsTotalStakedAuto(collators, config);
  const sharesSupply = useCollatorsSharesSupplyAuto(collators, config);

  return useDelegatorsTotalStake({
    collators,
    shares,
    totalStake,
    sharesSupply,
  });
}
