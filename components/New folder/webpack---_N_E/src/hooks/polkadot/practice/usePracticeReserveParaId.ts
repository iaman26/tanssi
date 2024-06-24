import {
  useCreateAppChainInfo,
  useUserChainDataState,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { RelayChainConfig } from '@/config';
import { useApi } from '@/hooks/polkadot';
import { useNextFreeParaId } from '@/hooks/polkadot/common/queries';
import { usePracticeAppchainId } from '@/hooks/polkadot/practice';
import { useApiBatchTransaction } from '@/hooks/polkadot/useApiBatchTransaction';
import { useAddress } from '@/state/user';
import { showNotification } from '@mantine/notifications';

export function usePracticeReserveParaId(config: RelayChainConfig) {
  const api = useApi(config.ws);
  const address = useAddress();
  const nextFreeParaId = useNextFreeParaId(config);
  const id = usePracticeAppchainId();
  const { setParaId } = useCreateAppChainInfo();
  const { chainData } = useUserChainDataState();

  const { isLoading, send } = useApiBatchTransaction(config, {
    onSuccess: () => {
      if (!nextFreeParaId) return;

      setParaId(nextFreeParaId);

      showNotification({
        title: 'Appchain ID successfully reserved',
        message: `Appchain ID with value of ${nextFreeParaId} was successfully reserved.`,
        color: 'tanssiBlue.9',
      });
    },
  });

  return {
    send: () => {
      if (!api) return;

      send([
        api.tx.system.remark(
          JSON.stringify({
            id,
            name: chainData?.name,
            address,
            action: 'reserve',
          }),
        ),
        api.tx.balances.transferKeepAlive(
          '5DZrSMWxtJ5SoYDKmbTQ66V12iAjMryzJW2PS948RmVDtstQ',
          config.fees.reserveParaId.amount,
        ),
      ]);
    },
    isLoading,
  };
}
