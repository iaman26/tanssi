import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { splitByPercentage } from '@/utils/numbers';
import { useCallback } from 'react';
import { useApi } from '../../useApi';
import { useApiTransaction } from '../../useApiTransaction';
import { useInvalidatePendingOperationsQuery } from '../queries/useUserStakingPendingOperations';
import { PoolType } from '../staking.interfaces';

export function useRequestDelegate(config: ChainConfig) {
  const api = useApi(config.ws);
  const invalidate = useInvalidatePendingOperationsQuery();
  const { close } = useSidebar();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send, getFee } = useApiTransaction({
    tx: api?.tx.pooledStaking.requestDelegate,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      close();
      invalidate();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Delegation was successfully requested',
        message:
          'Your delegation staking amount have now entered the joining pool.',
      });
    },
  });

  return {
    isLoading,
    send: async (candidate: string, pool: PoolType, amount: bigint) =>
      send(candidate, pool, amount),
    getFee: async (candidate: string, pool: PoolType, amount: bigint) =>
      getFee(candidate, pool, amount),
  };
}

export function useRequestDelegateInBatch(config: ChainConfig) {
  const { close } = useSidebar();
  const api = useApi(config.ws);
  const invalidate = useInvalidatePendingOperationsQuery();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send, getFee } = useApiTransaction({
    tx: api?.tx.utility.batch,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      close();
      invalidate();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Delegation was successfully requested',
        message:
          'Your delegation staking amount have now entered the joining pool.',
      });
    },
  });

  const getParams = useCallback(
    (candidate: string, amount: bigint, autoPercentage: number) => {
      if (!api) {
        return [];
      }

      const [auto, manual] = splitByPercentage(amount, autoPercentage);

      return [
        api.tx.pooledStaking.requestDelegate(
          candidate,
          'AutoCompounding',
          auto,
        ),
        api.tx.pooledStaking.requestDelegate(
          candidate,
          'ManualRewards',
          manual,
        ),
      ];
    },
    [api],
  );

  return {
    isLoading,
    send: async (
      candidate: string,
      amount: bigint,
      autocompoundingPercentage: number,
    ) => send(getParams(candidate, amount, autocompoundingPercentage)),
    getFee: async (
      candidate: string,
      amount: bigint,
      autocompoundingPercentage: number,
    ) => getFee(getParams(candidate, amount, autocompoundingPercentage)),
  };
}

export function useRequestDelegateAuto(config: ChainConfig) {
  const { isLoading, send, getFee } = useRequestDelegate(config);
  const {
    isLoading: isLoadingBatch,
    send: sendBatch,
    getFee: getFeeBatch,
  } = useRequestDelegateInBatch(config);

  return {
    isLoading: isLoading || isLoadingBatch,
    send: async (
      candidate: string,
      amount: bigint,
      autocompoundingPercentage: number,
    ) => {
      if (autocompoundingPercentage === 0) {
        return send(candidate, 'ManualRewards', amount);
      }

      if (autocompoundingPercentage === 100) {
        return send(candidate, 'AutoCompounding', amount);
      }

      return sendBatch(candidate, amount, autocompoundingPercentage);
    },
    getFee: async (
      candidate: string,
      amount: bigint,
      autocompoundingPercentage: number,
    ) => {
      if (autocompoundingPercentage === 0) {
        return getFee(candidate, 'ManualRewards', amount);
      }

      if (autocompoundingPercentage === 100) {
        return getFee(candidate, 'AutoCompounding', amount);
      }

      return getFeeBatch(candidate, amount, autocompoundingPercentage);
    },
  };
}
