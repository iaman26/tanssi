import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useApi } from '../../useApi';
import { Callbacks, useApiTransaction } from '../../useApiTransaction';
import { useInvalidatePendingOperationsQuery } from '../queries/useUserStakingPendingOperations';
import { PendingOperation, PendingOperationQuery } from '../staking.interfaces';

export function useExecutePendingOperations(
  config: ChainConfig,
  { onEvents, onSuccess, onError }: Callbacks = {},
) {
  const api = useApi(config.ws);
  const invalidate = useInvalidatePendingOperationsQuery();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.pooledStaking.executePendingOperations,
    config,
    notify: { notifyOnSuccess: false },
    onEvents,
    onError,
    onSuccess(txHash, blockHash) {
      onSuccess?.(txHash, blockHash);
      invalidate();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Operations were successfully executed',
        message: 'All staking pending operations have been executed.',
      });
    },
  });

  return {
    isLoading,
    send: async (operations: PendingOperation[]) =>
      send(operations.map(mapToPendingOperationQuery)),
  };
}

export function mapToPendingOperationQuery({
  delegator,
  type,
  candidate,
  at,
}: PendingOperation): PendingOperationQuery {
  return {
    delegator,
    operation: {
      [type]: {
        candidate,
        at,
      },
    },
  } as PendingOperationQuery;
}
