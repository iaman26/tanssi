import { ChainConfig } from '@/config';
import { IdentityMetadata } from '@/hooks/polkadot/common';
import { CollatorsPoolsValue } from '@/hooks/polkadot/staking';
import { areDefined } from '@/utils/validate';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { useCallback, useMemo, useState } from 'react';

export const sortingKeys = {
  total: 'total',
  self: 'self',
  delegated: 'delegated',
  delegations: 'delegations',
  apy: 'apy',
} as const;

export interface CollatorStatus {
  isActive: boolean;
  isUpcoming: boolean;
}
export interface CollatorWithStatus extends CollatorStatus {
  address: string;
}

export type CollatorSortingCriteria = {
  key: keyof typeof sortingKeys;
  isDesc: boolean;
};

export interface CollatorStakingMetadata {
  identity: IdentityMetadata | undefined;
  total: AssetAmount;
  self: AssetAmount;
  delegated: AssetAmount;
  delegations: number;
  apy: number;
}

export interface Collator extends CollatorWithStatus, CollatorStakingMetadata {}

export interface CollatorsTable {
  collators: Collator[] | undefined;
  sortedBy: CollatorSortingCriteria;
  sortBy: (sortingKey: CollatorSortingCriteria['key']) => void;
}

interface CollatorsParams {
  collators: string[] | undefined;
  identities: Record<string, IdentityMetadata | undefined> | undefined;
  active: string[] | undefined;
  upcoming: string[] | undefined;
  total: CollatorsPoolsValue | undefined;
  self: CollatorsPoolsValue | undefined;
  delegations?: Record<string, number> | undefined;
  apy?: Record<string, number> | undefined;
  config: ChainConfig;
}

export function useCollators({
  collators,
  identities,
  active,
  upcoming,
  total,
  self,
  delegations,
  apy,
  config,
}: CollatorsParams): CollatorsTable {
  const [sortedBy, sort] = useState<CollatorSortingCriteria>({
    key: sortingKeys.total,
    isDesc: true,
  });

  const sortBy = useCallback(
    (newKey: CollatorSortingCriteria['key']): void => {
      if (sortedBy.key === newKey) {
        sort((prev) => ({ ...prev, isDesc: !sortedBy.isDesc }));
      }

      sort({
        key: newKey,
        isDesc: sortedBy.key === newKey ? !sortedBy.isDesc : sortedBy.isDesc,
      });
    },
    [sortedBy.isDesc, sortedBy.key],
  );

  const formattedCollators = useMemo(() => {
    if (!collators || !total || !self || !active || !upcoming) return;

    return collators
      .map<Collator>((address) => ({
        address,
        identity: identities?.[address],
        isActive: active?.includes(address),
        isUpcoming: upcoming?.includes(address),
        total: AssetAmount.fromAsset(config.asset, {
          amount: total[address] || 0n,
          decimals: config.decimals,
        }),
        self: AssetAmount.fromAsset(config.asset, {
          amount: self[address] || 0n,
          decimals: config.decimals,
        }),
        delegated: AssetAmount.fromAsset(config.asset, {
          amount: areDefined(total[address], self[address])
            ? total[address] - self[address]
            : 0n,
          decimals: config.decimals,
        }),
        delegations: delegations?.[address] || 0,
        apy: apy?.[address] || 0,
      }))
      .sort((a, b) => sortCollators(a, b, sortedBy));
  }, [
    config.asset,
    config.decimals,
    collators,
    total,
    self,
    active,
    upcoming,
    identities,
    delegations,
    apy,
    sortedBy,
  ]);

  return { collators: formattedCollators, sortedBy, sortBy };
}

function sortCollators(
  a: Collator,
  b: Collator,
  { key, isDesc }: CollatorSortingCriteria,
): number {
  if (key === sortingKeys.delegations || key === sortingKeys.apy) {
    return isDesc ? b[key] - a[key] : a[key] - b[key];
  }

  return Number(
    isDesc ? b[key].amount - a[key].amount : a[key].amount - b[key].amount,
  );
}
