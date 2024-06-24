import '@polkadot/api-augment';

import {
  usePracticeCreateAppchain,
  useUserChainDataState,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { RelayChainConfig } from '@/config';
import { useApi } from '@/hooks/polkadot';
import { usePracticeAppchainId } from '@/hooks/polkadot/practice';
import { useApiBatchTransaction } from '@/hooks/polkadot/useApiBatchTransaction';
import { useAddress } from '@/state/user';
import { showNotification } from '@mantine/notifications';

export function usePracticeRegisterInRelay(config: RelayChainConfig) {
  const api = useApi(config.ws);
  const address = useAddress();
  const id = usePracticeAppchainId();
  const { setPracticeCreateAppchain } = usePracticeCreateAppchain();
  const { chainData } = useUserChainDataState();

  const { isLoading, send } = useApiBatchTransaction(config, {
    onSuccess: () => {
      setPracticeCreateAppchain({ isRegisteredInRelay: true });
      showNotification({
        title: 'Appchain was successfully registered',
        message: 'Appchain was successfully registered in the Relay Chain.',
        color: 'tanssiBlue.9',
      });
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
