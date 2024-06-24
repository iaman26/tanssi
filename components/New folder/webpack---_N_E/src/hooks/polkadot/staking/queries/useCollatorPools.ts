import type { ChainConfig } from '@/config';
import { useApi, useEventTrigger } from '@/hooks/polkadot';
import type { StorageKey } from '@polkadot/types';
import type { u128 } from '@polkadot/types-codec';
import type { PalletPooledStakingPoolsKey } from '@polkadot/types/lookup';
import { UseQueryResult, useQueries } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export interface Pools {
  collator: string;
  AutoCompoundingShares?: Delegator[];
  ManualRewardsShares?: Delegator[];
}

type StakingPoolsKey = Extract<
  PalletPooledStakingPoolsKey['type'],
  'AutoCompoundingShares' | 'ManualRewardsShares'
>;
type PoolsKey =
  | Record<StakingPoolsKey, { delegator: string }>
  | StakingPoolsKey;
type Storage = [string, PoolsKey];
type Delegator = Record<string, bigint>;

export function useCollatorPools(
  collators: string[],
  config: ChainConfig,
): UseQueryResult<Pools | undefined, Error>[] {
  const api = useApi(config.ws);
  const [hash, setHash] = useState('');

  const events = useEventTrigger({
    api,
    events: [
      api?.events.pooledStaking.ExecutedDelegate,
      api?.events.pooledStaking.RequestedUndelegate,
    ],
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (events.hash) {
      setTimeout(() => {
        setHash(events.hash);
      }, 20000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [events.hash]);

  return useQueries({
    queries: collators.map((address) => {
      return {
        queryKey: ['collatorPools', address, hash],
        queryFn: async (): Promise<Pools | undefined> => {
          const res = await api?.query.pooledStaking.pools.entries(address);

          return res ? transform(res, address) : undefined;
        },
      };
    }),
  });
}

function transform(pools: Array<[StorageKey, u128]>, address: string): Pools {
  const result: Pools = { collator: address };

  pools.forEach(([entry, value]) => {
    const poolsKey = (entry.toHuman() as Storage)[1];
    const amount = value.toBigInt();

    if (typeof poolsKey !== 'string') {
      const [sharesType, { delegator }] = Object.entries(poolsKey)[0] as [
        StakingPoolsKey,
        { delegator: string },
      ];

      if (
        !['AutoCompoundingShares', 'ManualRewardsShares'].includes(sharesType)
      )
        return;

      if (!result[sharesType]) {
        result[sharesType] = [];
      }

      result[sharesType]?.push({
        [delegator]: amount,
      });
    }
  });

  return result;
}
