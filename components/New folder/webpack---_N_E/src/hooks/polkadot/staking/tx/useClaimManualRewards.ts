import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useMyCollators } from '@/hooks/polkadot/staking';
import { useAddress } from '@/state/user';
import { useCallback, useMemo } from 'react';
import { useApi } from '../../useApi';
import { useApiTransaction } from '../../useApiTransaction';

export function useClaimManualRewards(config: ChainConfig) {
  const address = useAddress();
  const api = useApi(config.ws);
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.pooledStaking.claimManualRewards,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Manual rewards were successfully claimed',
        message: 'The rewards have been added to your balance.',
      });
    },
  });

  return {
    isLoading,
    send: async (candidates: string[]) =>
      address &&
      send(
        candidates.map<[string, string]>((candidate) => [candidate, address]),
      ),
  };
}

export function useClaimAllManualRewards(config: ChainConfig) {
  const myCollators = useMyCollators(config);
  const { isLoading, send } = useClaimManualRewards(config);

  const manualRewards = useMemo(
    () =>
      myCollators
        ?.filter((collator) => collator.manualRewards.amount)
        .reduce((acc, collator) => acc + collator.manualRewards.amount, 0n) ||
      0n,
    [myCollators],
  );

  const sendTx = useCallback(
    () =>
      myCollators &&
      send(
        myCollators
          .filter((collator) => collator.manualRewards.amount)
          .map((collator) => collator.address),
      ),
    [myCollators, send],
  );

  return {
    manualRewards: config.getAssetAmount(manualRewards),
    isLoading,
    send: sendTx,
  };
}
