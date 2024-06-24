import type { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import type { DpCollatorAssignmentAssignedCollatorsAccountId32 } from '@polkadot/types/lookup';

export interface AssignedCollators {
  orchestratorChain: string[];
  containerChains: Record<string, [string, string]>;
}

export function useActiveCollators(
  config: ChainConfig,
): AssignedCollators | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.collatorAssignment.collatorContainerChain,
    [],
    transform,
  );
}

function transform(
  candidates: DpCollatorAssignmentAssignedCollatorsAccountId32,
): AssignedCollators {
  return candidates.toHuman() as unknown as AssignedCollators;
}
