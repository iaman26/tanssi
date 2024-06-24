import type { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import { AssignedCollators } from '@/hooks/polkadot/staking';
import type { DpCollatorAssignmentAssignedCollatorsAccountId32 } from '@polkadot/types/lookup';

export function useUpcomingCollators(
  config: ChainConfig,
): AssignedCollators | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.collatorAssignment.pendingCollatorContainerChain,
    [],
    transform,
  );
}

function transform(
  candidates: DpCollatorAssignmentAssignedCollatorsAccountId32,
): AssignedCollators {
  return candidates.toHuman() as unknown as AssignedCollators;
}
