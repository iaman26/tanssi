import type { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import type { Vec } from '@polkadot/types-codec';
import type { PalletPooledStakingCandidateEligibleCandidate } from '@polkadot/types/lookup';

export function useEligibleCollators(
  config: ChainConfig,
): string[] | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.pooledStaking.sortedEligibleCandidates,
    [],
    transform,
  );
}

function transform(
  candidates: Vec<PalletPooledStakingCandidateEligibleCandidate>,
): string[] {
  return candidates.map(({ candidate }) => candidate.toString());
}
