import { ChainConfig } from '@/config';
import { useAppchainTank } from '@/hooks/polkadot/appchain';
import { getBlockProductionBalanceTime } from '@/utils/tanssi';
import { useMemo } from 'react';

export function useBlockProductionBalanceTime(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): number | undefined {
  const { balance } = useAppchainTank(paraId, config);

  return useMemo(() => {
    if (!balance || !config) {
      return;
    }

    return getBlockProductionBalanceTime(
      balance.amount,
      config.fees.costPerSession.amount,
      config.fees.costPerBlock.amount,
      config.blocksPerSession,
      config.blockTime,
    );
  }, [config, balance]);
}
