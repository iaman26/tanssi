import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useInvalidatePendingOperationsQuery } from '@/hooks/polkadot/staking';
import { useCallback } from 'react';
import { useApi } from '../../useApi';
import { useApiTransaction } from '../../useApiTransaction';
import { PoolType } from '../staking.interfaces';

export function useRequestUndelegate(config: ChainConfig) {
  const api = useApi(config.ws);
  const { close } = useSidebar();
  const invalidate = useInvalidatePendingOperationsQuery();

  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.pooledStaking.requestUndelegate,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      close();
      invalidate();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Your decrease request was successfully submitted',
        message: 'Your shares has now entered the leaving pool.',
      });
    },
  });

  return {
    isLoading,
    send: async (
      candidate: string,
      pool: PoolType,
      amount: { Shares: bigint } | { Stake: bigint },
    ) => send(candidate, pool, amount),
  };
}

export function useRequestUndelegateInBatch(config: ChainConfig) {
  const api = useApi(config.ws);
  const invalidate = useInvalidatePendingOperationsQuery();
  const { close } = useSidebar();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send } = useRequestUndelegate(config);
  const { isLoading: isLoadingBatch, send: sendBatch } = useApiTransaction({
    tx: api?.tx.utility.batch,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      close();
      invalidate();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Your decrease request was successfully submitted',
        message: 'Your shares has now entered the leaving pool.',
      });
    },
  });

  const getParams = useCallback(
    (candidate: string, manual: bigint, auto: bigint) => {
      if (!api) {
        return [];
      }

      return [
        api.tx.pooledStaking.requestUndelegate(candidate, 'AutoCompounding', {
          Stake: auto,
        }),
        api.tx.pooledStaking.requestUndelegate(candidate, 'ManualRewards', {
          Stake: manual,
        }),
      ];
    },
    [api],
  );

  return {
    isLoading: isLoading || isLoadingBatch,
    send: async (
      candidate: string,
      manualAmount: bigint,
      autoAmount: bigint,
    ) => {
      if (!autoAmount) {
        return send(candidate, 'ManualRewards', { Stake: manualAmount });
      }

      if (!manualAmount) {
        return send(candidate, 'AutoCompounding', { Stake: autoAmount });
      }

      return sendBatch(getParams(candidate, manualAmount, autoAmount));
    },
  };
}

export function useRequestUndelegateAll(config: ChainConfig) {
  const api = useApi(config.ws);
  const { close } = useSidebar();
  const invalidate = useInvalidatePendingOperationsQuery();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send } = useRequestUndelegate(config);
  const { isLoading: isLoadingBatch, send: sendBatch } = useApiTransaction({
    tx: api?.tx.utility.batch,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      close();
      invalidate();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Your removal request was successfully submitted',
        message: 'Your shares has now entered the leaving pool.',
      });
    },
    config,
  });

  return {
    isLoading: isLoading || isLoadingBatch,
    send: async (
      candidate: string,
      auto: bigint | undefined,
      manual: bigint | undefined,
    ) => {
      if (!api) return;

      if (!auto && manual) {
        return send(candidate, 'ManualRewards', { Shares: manual });
      }

      if (!manual && auto) {
        return send(candidate, 'AutoCompounding', { Shares: auto });
      }

      return sendBatch([
        api.tx.pooledStaking.requestUndelegate(candidate, 'AutoCompounding', {
          Shares: auto,
        }),
        api.tx.pooledStaking.requestUndelegate(candidate, 'ManualRewards', {
          Shares: manual,
        }),
      ]);
    },
  };
}
