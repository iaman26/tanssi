import { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import type { Vec } from '@polkadot/types-codec';
import type { AccountId32 } from '@polkadot/types/interfaces/runtime';

export function useInvulnerables(config: ChainConfig): string[] | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.query.invulnerables.invulnerables, [], transform);
}

function transform(candidates: Vec<AccountId32>): string[] {
  return candidates.map((candidate) => candidate.toString());
}
