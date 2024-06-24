import { useManageAppchain } from '@/components/pages/Dashboard/ManageAppchain/state';
import { ChainConfig } from '@/config';
import { useAppchainApi, useAppchainSudo } from '@/hooks/polkadot/appchain';
import { Callbacks, useApiTransaction } from '../../useApiTransaction';

export function useSudoForceTransfer(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  { onEvents, onSuccess, onError }: Callbacks = {},
) {
  const api = useAppchainApi(paraId, config);
  const { sudoKey } = useAppchainSudo();
  const { closeManageAppchain } = useManageAppchain();

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.sudo.sudo,
    config,
    address: sudoKey,
    onEvents,
    onError,
    onSuccess: (txHash, blockHash) => {
      onSuccess?.(txHash, blockHash);
      closeManageAppchain();
    },
  });

  return {
    isLoading,
    send: async (fromAddress: string, destAddress: string, amount: bigint) =>
      api &&
      send(api.tx.balances.forceTransfer(fromAddress, destAddress, amount)),
  };
}
