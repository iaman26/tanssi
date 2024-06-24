import { demo, flashbox } from '@/config';
import { Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useMemo } from 'react';

interface TransactionDetails {
  txHash: string;
}

export interface FaucetNotifications {
  transactionError: (error: Error) => void;
  transferredAssetsInDemo: (params: TransactionDetails) => void;
  transferredAssetsInFlashbox: (params: TransactionDetails) => void;
  transferredAssetsInFlashboxRelay: (params: TransactionDetails) => void;
}

export const useFaucetNotifications = (): FaucetNotifications => {
  return useMemo(
    () => ({
      transactionError: (error) => {
        showNotification({
          title: 'Transaction failed',
          message: error.message,
          color: 'red',
        });
      },
      transferredAssetsInDemo: ({ txHash }) =>
        showSuccessNotification(
          txHash,
          `Tokens were transferred to your account in the ${demo.name} Chain.`,
        ),
      transferredAssetsInFlashbox: ({ txHash }) =>
        showSuccessNotification(
          txHash,
          `Tokens were transferred to your account in the ${flashbox.name} Chain.`,
        ),
      transferredAssetsInFlashboxRelay: ({ txHash }) =>
        showSuccessNotification(
          txHash,
          `Tokens were transferred to your account in the ${flashbox.relay.name} Chain.`,
        ),
    }),
    [],
  );
};

function showSuccessNotification(txHash: string, message: string): void {
  showNotification({
    title: 'Tokens transferred successfully',
    message: (
      <>
        {message && (
          <Text span display={'block'} mt={'xs'} size={'sm'} c={'dark.2'}>
            {message}
          </Text>
        )}
        <Text
          span
          display={'block'}
          mt={'xs'}
          size={'sm'}
          style={{ wordBreak: 'break-all' }}
        >
          {`Transaction hash: ${txHash}`}
        </Text>
      </>
    ),
    color: 'tanssiBlue.9',
  });
}
