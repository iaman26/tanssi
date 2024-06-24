import {
  useCreateAppChainInfo,
  useCreateNewAppchain,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainConfig } from '@/config';
import { useAppchainRegisteredMessage } from '@/hooks/api/useAppchainRegisteredMessage';
import { useCreateAppchainItem } from '@/hooks/api/useCreateAppchainItem';
import { useUpdateContact } from '@/hooks/api/useUpdateContact';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useApi, useApiTransaction } from '@/hooks/polkadot';
import { usePracticeRegisterInTanssi } from '@/hooks/polkadot/practice/usePracticeRegisterInTanssi';
import { useTanssiGenesis } from '@/hooks/useGenerateTanssiGenesis';
import { useGoHome } from '@/hooks/useGoHome';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';
import { address } from '@/state/user';
import { trpc } from '@/utils/trpc';
import { useTimeout } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import type { TpContainerChainGenesisDataContainerChainGenesisData } from '@polkadot/types/lookup';
import * as Sentry from '@sentry/nextjs';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useIsRegisteredInTanssi } from '../queries';

const WAITING_TIME = 2 * 60 * 1_000;

interface RegisterInTanssi {
  isLoadingTanssi: boolean;
  isReadyToRegisterInTanssi: boolean;
  onRegisterInTanssi: VoidFunction;
}

export function useRegisterInTanssi(config: ChainConfig): RegisterInTanssi {
  const api = useApi(config.ws);
  const trpcUtils = trpc.useUtils();
  const queryClient = useQueryClient();
  const tanssiGenesis = useTanssiGenesis(config);
  const isRegistered = useIsRegisteredInTanssi(config);
  const removeCreateAppchainState = useCreateNewAppchain();
  const { paraId } = useCreateAppChainInfo();
  const { send: sendMessages } = useAppchainRegisteredMessage();
  const { replaceHome } = useGoHome();
  const { createAppchainItem } = useCreateAppchainItem();
  const { updateContact } = useUpdateContact();
  const { transactionSuccess } = useWalletNotifications(config);
  const [isWaiting, setIsWaiting] = useState(true);
  const { start, clear } = useTimeout(() => setIsWaiting(false), WAITING_TIME);

  const { isProtected: isAppchainProtected, isLoading: isLoadingProtected } =
    useIsAppchainProtected();

  const { isLoading: isLoadingMock, send: sendMock } =
    usePracticeRegisterInTanssi(config);

  function onSuccess(txHash?: string, blockHash?: string) {
    clear();
    transactionSuccess({
      txHash,
      blockHash,
      title: 'Appchain was successfully registered',
      message: 'Appchain was successfully registered in Tanssi Chain.',
    });
    sendMessages();
    createAppchainItem();
    updateContact();
    replaceHome();
    removeCreateAppchainState();
    trpcUtils.files.getChainUrls.invalidate();
    queryClient.invalidateQueries({
      queryKey: ['userAppchains', config.key],
    });
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: We don't want to include `onSuccess` as a dependency because we don't want to call it on every render, only when `isWaiting` and `isRegistered` change.
  useEffect(() => {
    if (!isWaiting && isRegistered) {
      onSuccess();
    }
  }, [isWaiting, isRegistered]);

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.registrar.register,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess,
    onError: (err) => {
      clear();
      Sentry.captureException(err, {
        extra: { address, chain: config.name, paraId },
      });
    },
  });

  return {
    isLoadingTanssi: isLoading || isLoadingMock,
    isReadyToRegisterInTanssi:
      !!tanssiGenesis || (!isLoadingProtected && !isAppchainProtected),
    onRegisterInTanssi: () => {
      if (!paraId) {
        Sentry.captureMessage(
          'Failed to register appchain due to missing para id',
          { extra: { address, chain: config.name, paraId } },
        );

        showNotification({
          title: 'Internal client error',
          message: `Something went wrong, please try again later.`,
          color: 'red',
        });

        return;
      }

      if (!isAppchainProtected && !isLoadingProtected) {
        sendMock();

        return;
      }

      start();

      send(
        paraId,
        tanssiGenesis as unknown as TpContainerChainGenesisDataContainerChainGenesisData,
      );
    },
  };
}
