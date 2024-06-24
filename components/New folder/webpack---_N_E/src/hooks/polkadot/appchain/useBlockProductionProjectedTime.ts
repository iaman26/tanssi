import { ChainConfig } from '@/config';
import {
  useBlockProductionBalanceTime,
  useBlockProductionFreeTime,
} from '@/hooks/polkadot/appchain';
import { getBlockProductionBalanceTime } from '@/utils/tanssi';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { useMemo } from 'react';

export function useBlockProductionProjectedTime(
  paraId: number | undefined,
  amount: AssetAmount | undefined,
  config: ChainConfig | undefined,
): number {
  const freeTime = useBlockProductionFreeTime(paraId, config);
  const balanceTime = useBlockProductionBalanceTime(paraId, config);

  const amountTime = useMemo(() => {
    if (!amount || !config) {
      return;
    }

    return getBlockProductionBalanceTime(
      amount.amount,
      config.fees.costPerSession.amount,
      config.fees.costPerBlock.amount,
      config.blocksPerSession,
      config.blockTime,
    );
  }, [amount, config]);

  return (freeTime || 0) + (balanceTime || 0) + (amountTime || 0);
}
