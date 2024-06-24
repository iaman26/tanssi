import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { RelayChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useApiTransaction } from '@/hooks/polkadot';
import { usePracticeReserveParaId } from '@/hooks/polkadot/practice/usePracticeReserveParaId';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';
import { useState } from 'react';
import { useApi } from '../../useApi';

interface ReserveParaId {
  isReady: boolean;
  isLoading: boolean;
  onReserve: VoidFunction;
}

export function useReserveParaId(config: RelayChainConfig): ReserveParaId {
  const api = useApi(config.ws);
  const { setParaId } = useCreateAppChainInfo();
  const [localParaId, setLocalParaId] = useState<number>();
  const { transactionSuccess } = useWalletNotifications(config);

  const { isProtected: isAppchainProtected, isLoading: isLoadingIsProtected } =
    useIsAppchainProtected();

  const { send: sendPractice, isLoading: isLoadingPractice } =
    usePracticeReserveParaId(config);

  const { send, isLoading } = useApiTransaction({
    tx: api?.tx.registrar.reserve,
    config,
    notify: { notifyOnSuccess: false },
    onEvents: (events) => {
      events.forEach(({ event: { data, method, section } }) => {
        if (section === 'registrar' && method === 'Reserved') {
          const parsedData = data.toHuman() as {
            paraId: string;
            who: string;
          };

          setLocalParaId(parseInt(parsedData.paraId.replace(',', '')));
        }
      });
    },
    onSuccess: (txHash, blockHash) => {
      if (!localParaId) return;

      setParaId(localParaId);

      transactionSuccess({
        txHash,
        blockHash,
        title: 'Appchain ID successfully reserved',
        message: `Appchain ID with value of ${localParaId} was successfully reserved.`,
      });
    },
  });

  return {
    isReady: !isLoadingIsProtected,
    isLoading: isLoading || isLoadingPractice,
    onReserve: () => {
      isAppchainProtected ? send() : sendPractice();
    },
  };
}
