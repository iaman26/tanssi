import '@polkadot/api-augment';

import {
  useCreateNewAppchain,
  usePracticeCreateAppchain,
  useUserChainDataState,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainConfig } from '@/config';
import { useUpdateContact } from '@/hooks/api/useUpdateContact';
import { usePracticeAppchainId } from '@/hooks/polkadot/practice';
import { useApi } from '@/hooks/polkadot/useApi';
import { useApiBatchTransaction } from '@/hooks/polkadot/useApiBatchTransaction';
import { useAddress } from '@/state/user';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';

export function usePracticeRegisterInTanssi(config: ChainConfig) {
  const api = useApi(config.ws);
  const router = useRouter();
  const address = useAddress();
  const id = usePracticeAppchainId();
  const { updateContact } = useUpdateContact();
  const { setPracticeCreateAppchain } = usePracticeCreateAppchain();
  const removeCreateAppchainState = useCreateNewAppchain();
  const { chainData } = useUserChainDataState();

  const { isLoading, send } = useApiBatchTransaction(config, {
    onSuccess: () => {
      showNotification({
        title: 'Appchain was successfully registered',
        message: 'Appchain was successfully registered in the Tanssi Chain.',
        color: 'tanssiBlue.9',
      });
      setPracticeCreateAppchain();
      updateContact();
      router.push('/demo');
      removeCreateAppchainState();
    },
  });

  return {
    isLoading,
    send: () => {
      if (!api) return;

      send([
        api.tx.system.remark(
          JSON.stringify({
            id,
            name: chainData?.name,
            address,
            action: 'register',
          }),
        ),
        api.tx.balances.transferKeepAlive(
          '5DZrSMWxtJ5SoYDKmbTQ66V12iAjMryzJW2PS948RmVDtstQ',
          config.fees.register.amount,
        ),
      ]);
    },
  };
}
