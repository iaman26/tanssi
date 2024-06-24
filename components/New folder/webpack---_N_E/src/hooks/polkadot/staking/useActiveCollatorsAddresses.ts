import { ChainConfig } from '@/config';
import {
  useActiveCollators,
  useCollatorsAssignedAddresses,
} from '@/hooks/polkadot/staking';

export function useActiveCollatorsAddresses(
  config: ChainConfig,
): string[] | undefined {
  const active = useActiveCollators(config);

  return useCollatorsAssignedAddresses(active);
}
