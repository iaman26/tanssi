import { AssignedCollators } from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useCollatorsAssignedAddresses(
  assignedCollators: AssignedCollators | undefined,
): string[] | undefined {
  return useMemo(() => {
    if (!assignedCollators) return;

    const addresses = [];

    for (const chainId in assignedCollators.containerChains) {
      addresses.push(...assignedCollators.containerChains[chainId]);
    }

    return [...assignedCollators.orchestratorChain, ...addresses];
  }, [assignedCollators]);
}
