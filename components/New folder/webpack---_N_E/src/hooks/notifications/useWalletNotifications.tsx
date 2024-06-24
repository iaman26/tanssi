import { OffsiteLink } from '@/components/OffsiteLink';
import { BaseChainConfig } from '@/config';
import { Text, useMantineTheme } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useCallback, useMemo } from 'react';

interface SuccessParams {
  txHash?: string;
  blockHash?: string;
  title?: string;
  message?: string;
  url?: string;
  color?: string;
}
interface ErrorParams
  extends Partial<Pick<SuccessParams, 'txHash' | 'blockHash' | 'url'>> {
  error?: Error;
  source?: string;
}

export interface WalletNotifications {
  transactionSuccess: (params: SuccessParams) => void;
  transactionError: (params: ErrorParams) => void;
}

export const useWalletNotifications = (
  config: BaseChainConfig | undefined,
): WalletNotifications => {
  const theme = useMantineTheme();

  const errorNotification = useCallback(
    ({
      title,
      message,
      txHash,
      blockHash,
      url,
    }: Partial<SuccessParams> & {
      title: string;
      message?: string;
    }) =>
      showNotification({
        title,
        message:
          txHash && blockHash
            ? getTransactionInfo({
                txHash,
                blockHash,
                message,
                url: url || config?.getTransactionUrl?.(blockHash, txHash),
              })
            : message,
        color: 'red',
      }),
    [config],
  );

  return useMemo(
    () => ({
      transactionSuccess: ({
        txHash,
        blockHash,
        message,
        title = 'Transaction successful',
        url,
      }) =>
        showNotification({
          title,
          message: getTransactionInfo({
            txHash,
            blockHash,
            message,
            color: theme.colors.tanssiBlue[9],
            url:
              url ||
              (blockHash &&
                txHash &&
                config?.getTransactionUrl?.(blockHash, txHash)),
          }),
          color: 'tanssiBlue.9',
        }),
      transactionError: ({ error, source, ...txDetails }) => {
        console.error({ error, source, ...txDetails });

        if (error?.message === 'Cancelled') {
          errorNotification({
            title: 'User rejected the request',
            message: `You rejected the request in your ${source} wallet.`,
            ...txDetails,
          });

          return;
        }

        if (error?.message.includes('balances.InsufficientBalance')) {
          errorNotification({
            title: 'Transaction failed',
            message:
              "You don't have enough balance to execute this transaction.",
            ...txDetails,
          });

          return;
        }

        errorNotification({
          title: 'Transaction failed',
          message: error?.message,
        });
      },
    }),
    [config, errorNotification, theme],
  );
};

function getTransactionInfo({
  txHash,
  blockHash,
  message,
  color,
  url,
}: SuccessParams & {
  message?: string;
  url?: string;
}) {
  return (
    <>
      {message && (
        <Text span display={'block'} mt={'xs'} size={'sm'} c={'dark.2'}>
          {message}
        </Text>
      )}
      {url ? (
        <OffsiteLink
          label={'View transaction in explorer'}
          c={color}
          url={url}
          withConfirm={false}
        />
      ) : (
        <>
          {txHash && (
            <Text
              span
              display={'block'}
              mt={'xs'}
              size={'sm'}
              style={{ wordBreak: 'break-all' }}
            >
              {`Transaction hash: ${txHash}`}
            </Text>
          )}
          {blockHash && (
            <Text
              span
              display={'block'}
              size={'sm'}
              style={{ wordBreak: 'break-all' }}
            >
              {`Block hash: ${blockHash}`}
            </Text>
          )}
        </>
      )}
    </>
  );
}
