import { ChainConfig } from '@/config';
import { useFreeBalance } from '@/hooks/polkadot/common';
import { appchainTankAddress } from '@/utils/tanssi';
import { useMemo } from 'react';

export function useAppchainTank(
  paraId: number | undefined,
  config: ChainConfig | undefined,
) {
  const address = useMemo(() => appchainTankAddress(paraId), [paraId]);
  const balance = useFreeBalance(address, config);

  return {
    balance,
    address,
  };
}
