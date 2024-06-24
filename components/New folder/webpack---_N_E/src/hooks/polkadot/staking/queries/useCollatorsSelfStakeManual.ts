import type { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsSelfSharesManual,
  useCollatorsSharesSupplyManual,
  useCollatorsTotalStakedManual,
  useDelegatorsTotalStake,
} from '@/hooks/polkadot/staking';

export function useCollatorsSelfStakeManual(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const totalStakeManual = useCollatorsTotalStakedManual(collators, config);
  const sharesSupplyManual = useCollatorsSharesSupplyManual(collators, config);
  const selfSharesManual = useCollatorsSelfSharesManual(collators, config);

  return useDelegatorsTotalStake({
    collators,
    shares: selfSharesManual,
    totalStake: totalStakeManual,
    sharesSupply: sharesSupplyManual,
  });
}
