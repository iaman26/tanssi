import '@polkadot/api-augment';

import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { usePracticeRegisterInRelay } from '@/hooks/polkadot/practice';
import { useCreateAppchainFiles } from '@/hooks/useCreateAppchainFiles';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';
import { useApi } from '../../useApi';
import { useApiTransaction } from '../../useApiTransaction';

interface RegisterInRelay {
  isLoadingRelay: boolean;
  isReadyToRegister: boolean;
  onRegisterInRelay: VoidFunction;
}

export function useRegisterInRelay(config: ChainConfig): RegisterInRelay {
  const api = useApi(config.relay.ws);
  const { paraId } = useCreateAppChainInfo();
  const { genesisWasm, genesisState, haveFiles } = useCreateAppchainFiles(
    paraId,
    config,
  );
  const { transactionSuccess } = useWalletNotifications(config.relay);

  const { isProtected: isAppchainProtected, isLoading: isLoadingProtected } =
    useIsAppchainProtected();

  const { isLoading: isLoadingMock, send: sendPractice } =
    usePracticeRegisterInRelay(config.relay);

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.registrar.register,
    config,
    notify: { notifyOnSuccess: false },
    onSuccess: (txHash, blockHash) => {
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Appchain was successfully registered',
        message: 'Appchain was successfully registered in the Relay Chain.',
      });
    },
  });

  return {
    isLoadingRelay: isLoading || isLoadingMock,
    isReadyToRegister: haveFiles && !isLoadingProtected,
    onRegisterInRelay: () =>
      // We need to do it here because it takes types from @tanssi/api-augment
      isAppchainProtected
        ? // @ts-expect-error
          send(paraId, genesisState, genesisWasm)
        : sendPractice(),
  };
}
