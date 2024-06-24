import { useManageAppchain } from '@/components/pages/Dashboard/ManageAppchain/state';
import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useApi, useApiTransaction } from '@/hooks/polkadot';

export function useTopUpAppchain(config: ChainConfig | undefined) {
  const api = useApi(config?.ws);
  const { closeManageAppchain } = useManageAppchain();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isLoading, send, getFee } = useApiTransaction({
    tx: api?.tx.balances.transferKeepAlive,
    config,
    notify: { notifyOnSuccess: false },
    omitProxy: true,
    onSuccess: (txHash, blockHash) => {
      closeManageAppchain();
      transactionSuccess({
        txHash,
        blockHash,
        title: 'You have successfully topped up your appchain',
        message: 'Your appchain has now more funds to operate.',
      });
    },
  });

  return {
    isLoading,
    send,
    getFee,
  };
}
