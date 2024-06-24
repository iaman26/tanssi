import { ChainConfig } from '@/config';
import { useIdentities } from '@/hooks/polkadot/common';
import {
  CollatorsTable,
  useActiveCollatorsAddresses,
  useAllCollatorsAddresses,
  useCollators,
  useCollatorsApy,
  useCollatorsDelegations,
  useCollatorsSelfStake,
  useCollatorsTotalStake,
  useUpcomingCollatorsAddresses,
} from '@/hooks/polkadot/staking';

export function useAllCollatorsTable(config: ChainConfig): CollatorsTable {
  const collators = useAllCollatorsAddresses(config);
  const active = useActiveCollatorsAddresses(config);
  const upcoming = useUpcomingCollatorsAddresses(config);

  const identities = useIdentities(collators, config);
  const total = useCollatorsTotalStake(collators, config);
  const self = useCollatorsSelfStake(collators, config);
  const delegations = useCollatorsDelegations(collators, config);
  const apy = useCollatorsApy(collators, config);

  return useCollators({
    collators,
    identities,
    active,
    upcoming,
    total,
    self,
    delegations,
    apy,
    config,
  });
}
