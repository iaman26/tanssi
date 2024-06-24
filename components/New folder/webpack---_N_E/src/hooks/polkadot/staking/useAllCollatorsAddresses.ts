import { ChainConfig } from '@/config';
import {
  useEligibleCollators,
  useInvulnerables,
} from '@/hooks/polkadot/staking';
import { useMemo } from 'react';

export function useAllCollatorsAddresses(
  config: ChainConfig,
): string[] | undefined {
  const eligible = useEligibleCollators(config);
  const invulnerables = useInvulnerables(config);

  return useMemo(() => {
    if (!eligible || !invulnerables) return;

    return [...eligible, ...invulnerables].sort();
  }, [eligible, invulnerables]);
}
