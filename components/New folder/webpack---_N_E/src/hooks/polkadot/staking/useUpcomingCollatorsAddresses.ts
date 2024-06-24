import { ChainConfig } from '@/config';
import {
  useActiveCollators,
  useCollatorsAssignedAddresses,
  useUpcomingCollators,
} from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useUpcomingCollatorsAddresses(
  config: ChainConfig,
): string[] | undefined {
  const pending = useUpcomingCollators(config);
  const active = useActiveCollators(config);

  const isPendingEmpty = useMemo(
    () =>
      pending?.orchestratorChain.length === 0 &&
      Object.keys(pending?.containerChains).length === 0,
    [pending?.containerChains, pending?.orchestratorChain.length],
  );

  return useCollatorsAssignedAddresses(isPendingEmpty ? active : pending);
}
