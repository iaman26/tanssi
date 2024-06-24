import type { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import {
  CollatorsPoolsValue,
  transformCollatorsMulti,
} from '@/hooks/polkadot/staking';
import type { u128 } from '@polkadot/types-codec';
import { useMemo } from 'react';

export function useCollatorsSelfSharesManual(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const api = useApi(config.ws);

  const args = useMemo(
    () =>
      collators?.map((address) => [
        address,
        { ManualRewardsShares: { delegator: address } },
      ]),
    [collators],
  );

  return useApiCall(
    api?.query.pooledStaking.pools.multi,
    [args],
    (value: u128[]) => transformCollatorsMulti(value, collators),
  );
}
