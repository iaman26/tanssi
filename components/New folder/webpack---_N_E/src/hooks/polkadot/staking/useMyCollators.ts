import { ChainConfig } from '@/config';
import { IdentityMetadata, useIdentities } from '@/hooks/polkadot/common';
import {
  CollatorWithStatus,
  useActiveCollatorsAddresses,
  useCollatorsTotalStake,
  useDelegatorsTotalStakeManual,
  useManualRewards,
  useMyCollatorsAddresses,
  useUpcomingCollatorsAddresses,
  useUserAllSharesManual,
  useUserAllTotalStakeAuto,
} from '@/hooks/polkadot/staking';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { useMemo } from 'react';

export interface MyCollator extends CollatorWithStatus {
  identity: IdentityMetadata | undefined;
  totalStake: AssetAmount;
  manualRewards: AssetAmount;
  delegation: {
    auto: AssetAmount;
    manual: AssetAmount;
    total: AssetAmount;
  };
}

export function useMyCollators(config: ChainConfig): MyCollator[] | undefined {
  const myCollators = useMyCollatorsAddresses(config);
  const active = useActiveCollatorsAddresses(config);
  const upcoming = useUpcomingCollatorsAddresses(config);
  const manualShares = useUserAllSharesManual(myCollators, config);
  const identities = useIdentities(myCollators, config);
  const manualRewards = useManualRewards(myCollators, manualShares, config);
  const autoStaked = useUserAllTotalStakeAuto(myCollators, config);
  const manualStaked = useDelegatorsTotalStakeManual(myCollators, config);
  const totalStake = useCollatorsTotalStake(myCollators, config);

  return useMemo(() => {
    if (!myCollators || !autoStaked || !manualStaked) return;

    return myCollators
      .map<MyCollator>((collator) => ({
        address: collator,
        identity: identities?.[collator],
        isActive: !!active?.includes(collator),
        isUpcoming: !!upcoming?.includes(collator),
        delegation: {
          auto: AssetAmount.fromAsset(config.asset, {
            amount: autoStaked?.[collator] || 0n,
            decimals: config.decimals,
          }),
          manual: AssetAmount.fromAsset(config.asset, {
            amount: manualStaked?.[collator] || 0n,
            decimals: config.decimals,
          }),
          total: AssetAmount.fromAsset(config.asset, {
            amount:
              (autoStaked?.[collator] || 0n) + (manualStaked?.[collator] || 0n),
            decimals: config.decimals,
          }),
        },
        totalStake: AssetAmount.fromAsset(config.asset, {
          amount: totalStake?.[collator] || 0n,
          decimals: config.decimals,
        }),
        manualRewards: AssetAmount.fromAsset(config.asset, {
          amount: manualRewards?.[collator] || 0n,
          decimals: config.decimals,
        }),
      }))
      .sort((a, b) =>
        Number(b.delegation.total.amount - a.delegation.total.amount),
      );
  }, [
    config.asset,
    config.decimals,
    active,
    upcoming,
    myCollators,
    autoStaked,
    manualStaked,
    identities,
    totalStake,
    manualRewards,
  ]);
}
