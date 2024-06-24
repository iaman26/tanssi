import { ChainConfig } from '@/config';
import {
  useAllCollatorsAddresses,
  useUserAllSharesAuto,
  useUserAllSharesManual,
} from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useMyCollatorsAddresses(
  config: ChainConfig,
): string[] | undefined {
  const collators = useAllCollatorsAddresses(config);
  const autoShares = useUserAllSharesAuto(collators, config);
  const manualShares = useUserAllSharesManual(collators, config);

  return useMemo(() => {
    if (!collators || !autoShares || !manualShares) return;

    return collators.filter(
      (collator) => !!autoShares[collator] || !!manualShares[collator],
    );
  }, [collators, autoShares, manualShares]);
}
