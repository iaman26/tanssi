import { useManageAppchain } from '@/components/pages/Dashboard/ManageAppchain/state';
import { ChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import {
  useAppchainApi,
  useAppchainBaseFee,
  useAppchainConfig,
  useAppchainElasticity,
  useAppchainSudo,
} from '@/hooks/polkadot/appchain';
import { showNotification } from '@mantine/notifications';
import { useMemo } from 'react';
import { Callbacks, useApiTransaction } from '../../useApiTransaction';

export function useSudoSetBaseFee(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  { onEvents, onSuccess, onError }: Callbacks = {},
) {
  const api = useAppchainApi(paraId, config);
  const { sudoKey } = useAppchainSudo();
  const elasticity = useAppchainElasticity(paraId, config);
  const appchainConfig = useAppchainConfig(paraId, config);
  const baseFeePerGas = useAppchainBaseFee(paraId, config);
  const { closeManageAppchain } = useManageAppchain();
  const { transactionSuccess } = useWalletNotifications(appchainConfig);

  const txConfig = useMemo(
    () => ({
      config: appchainConfig,
      address: sudoKey,
      onEvents,
      onError,
      onSuccess: (txHash: string, blockHash: string) => {
        onSuccess?.(txHash, blockHash);
        transactionSuccess({
          txHash,
          blockHash,
          title: 'Dynamics values were successfully updated.',
        });
        closeManageAppchain();
      },
      notify: { notifyOnSuccess: false },
    }),
    [
      sudoKey,
      appchainConfig,
      onEvents,
      onError,
      onSuccess,
      transactionSuccess,
      closeManageAppchain,
    ],
  );

  const { isLoading, send: sendBatch } = useApiTransaction({
    tx: api?.tx.utility.batch,
    ...txConfig,
  });

  const { isLoading: isLoadingSudo, send: sendSudo } = useApiTransaction({
    tx: api?.tx.sudo.sudo,
    ...txConfig,
  });

  return {
    isLoading: isLoading || isLoadingSudo,
    send: (newBaseFeePerGas: bigint, newElasticity: bigint) => {
      if (!api) return;

      if (baseFeePerGas === newBaseFeePerGas && elasticity === newElasticity) {
        showNotification({
          title: 'No changes made.',
          message: 'Please provide new values.',
          color: 'blue',
        });

        return;
      }

      if (baseFeePerGas === newBaseFeePerGas) {
        sendSudo(api.tx.baseFee.setElasticity(newElasticity));

        return;
      }

      if (elasticity === newElasticity) {
        sendSudo(api.tx.baseFee.setBaseFeePerGas(newBaseFeePerGas));

        return;
      }

      sendBatch([
        api.tx.sudo.sudo(api.tx.baseFee.setBaseFeePerGas(baseFeePerGas)),
        api.tx.sudo.sudo(api.tx.baseFee.setElasticity(elasticity)),
      ]);
    },
  };
}
