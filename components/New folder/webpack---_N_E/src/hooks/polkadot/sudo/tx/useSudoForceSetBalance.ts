import { useManageAppchain } from '@/components/pages/Dashboard/ManageAppchain/state';
import { ChainConfig } from '@/config';
import {
  useAppchainApi,
  useAppchainConfig,
  useAppchainSudo,
} from '@/hooks/polkadot/appchain';
import { Callbacks, useApiTransaction } from '../../useApiTransaction';

export function useSudoForceSetBalance(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  { onEvents, onSuccess, onError }: Callbacks = {},
) {
  const api = useAppchainApi(paraId, config);
  const appchainConfig = useAppchainConfig(paraId, config);
  const { sudoKey } = useAppchainSudo();
  const { closeManageAppchain } = useManageAppchain();

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.sudo.sudo,
    config: appchainConfig,
    address: sudoKey,
    onEvents,
    onError,
    onSuccess: (txHash, blockHash) => {
      onSuccess?.(txHash, blockHash);
      closeManageAppchain();
    },
    notify: { notifyOnSuccess: false },
  });

  return {
    isLoading,
    send: async (destAddress: string, amount: bigint) => {
      api && send(api.tx.balances.forceSetBalance(destAddress, amount));
    },
  };
}
