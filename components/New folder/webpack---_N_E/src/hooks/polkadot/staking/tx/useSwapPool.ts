import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useApi } from '../../useApi';
import { useApiTransaction } from '../../useApiTransaction';
import { PoolType } from '../staking.interfaces';

export function useSwapPool(config: ChainConfig) {
  const api = useApi(config.ws);
  const { close } = useSidebar();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.pooledStaking.swapPool,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      close();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Staking ratio update was successfully requested',
        message:
          'Your staking ratio update request has been successfully submitted.',
      });
    },
  });

  return {
    isLoading,
    send: async (candidate: string, pool: PoolType, amount: bigint) =>
      send(candidate, pool, { Stake: amount }),
  };
}
