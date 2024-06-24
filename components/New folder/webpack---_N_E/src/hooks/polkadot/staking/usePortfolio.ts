import { ChainConfig, dancebox } from '@/config';
import { useProxiedFreeBalance } from '@/hooks/polkadot/common';
import {
  useMyCollators,
  useUserAutoRewards,
  useUserStakingPendingOperations,
} from '@/hooks/polkadot/staking';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { useMemo } from 'react';

interface Portfolio {
  totalAssetAmount: AssetAmount | undefined;
  freeAssetAmount: AssetAmount | undefined;
  manualStakeAssetAmount: AssetAmount | undefined;
  compoundingStakeAssetAmount: AssetAmount | undefined;
  manualRewardsAssetAmount: AssetAmount | undefined;
  compoundingRewardsAssetAmount: AssetAmount | undefined;
  pendingAssetAmount: AssetAmount | undefined;
}

export function usePortfolio(config: ChainConfig): Portfolio {
  const free = useProxiedFreeBalance(config);
  const compoundingRewards = useUserAutoRewards(config);
  const myCollators = useMyCollators(config);
  const { data: pendingOperations } = useUserStakingPendingOperations(config);

  const manualStake = useMemo(
    () =>
      myCollators
        ? myCollators.reduce(
            (acc, collator) => acc + collator.delegation.manual.amount,
            0n,
          )
        : 0n,
    [myCollators],
  );
  const compoundingStake = useMemo(
    () =>
      myCollators
        ? myCollators.reduce(
            (acc, collator) => acc + collator.delegation.auto.amount,
            0n,
          )
        : 0n,
    [myCollators],
  );
  const manualRewards = useMemo(
    () =>
      myCollators
        ? myCollators.reduce(
            (acc, collator) => acc + collator.manualRewards.amount,
            0n,
          )
        : 0n,
    [myCollators],
  );
  const pending = useMemo(
    () =>
      pendingOperations
        ? pendingOperations.reduce(
            (acc, operation) => acc + operation.amount.amount,
            0n,
          )
        : 0n,
    [pendingOperations],
  );

  const freeAssetAmount = useMemo(
    () => free || dancebox.getAssetAmount(0n),
    [free],
  );
  const manualStakeAssetAmount = useMemo(
    () => dancebox.getAssetAmount(manualStake),
    [manualStake],
  );
  const compoundingStakeAssetAmount = useMemo(
    () => dancebox.getAssetAmount(compoundingStake),
    [compoundingStake],
  );
  const manualRewardsAssetAmount = useMemo(
    () => dancebox.getAssetAmount(manualRewards),
    [manualRewards],
  );
  const compoundingRewardsAssetAmount = useMemo(
    () => dancebox.getAssetAmount(compoundingRewards),
    [compoundingRewards],
  );
  const pendingAssetAmount = useMemo(
    () => dancebox.getAssetAmount(pending),
    [pending],
  );

  const totalAssetAmount = useMemo(() => {
    const total =
      (freeAssetAmount?.amount || 0n) +
      manualRewards +
      manualStake +
      compoundingStake +
      pending;

    return dancebox.getAssetAmount(total);
  }, [
    compoundingStake,
    freeAssetAmount?.amount,
    manualRewards,
    manualStake,
    pending,
  ]);

  return {
    totalAssetAmount,
    freeAssetAmount,
    manualStakeAssetAmount,
    compoundingStakeAssetAmount,
    manualRewardsAssetAmount,
    compoundingRewardsAssetAmount,
    pendingAssetAmount,
  };
}
