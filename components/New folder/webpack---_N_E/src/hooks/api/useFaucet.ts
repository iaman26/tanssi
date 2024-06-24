import { demo } from '@/config';
import { useFaucetNotifications } from '@/hooks/notifications/useFaucetNotifications';
import { useChainKey } from '@/state/chain';
import { useAddress } from '@/state/user';
import { convertError } from '@/utils/error';
import { enableProgressBar } from '@/utils/loading';
import { trpc } from '@/utils/trpc';
import { useTimeout } from '@mantine/hooks';
import * as Sentry from '@sentry/nextjs';
import { useEffect, useState } from 'react';
import { useHasEnoughBalances } from '../polkadot/common';

export function useFaucet() {
  const address = useAddress();
  const [isLoading, setIsLoading] = useState(false);

  const key = useChainKey();
  const {
    transactionError,
    transferredAssetsInFlashbox,
    transferredAssetsInFlashboxRelay,
  } = useFaucetNotifications();
  const { hasEnoughBalance, hasEnoughTanssiBalance, hasEnoughRelayBalance } =
    useHasEnoughBalances();
  const { clear, start } = useTimeout(
    () =>
      !hasEnoughBalance &&
      transactionError(
        new Error('Something went wrong. Please try again later.'),
      ),
    35000,
  );

  const { isSuccess, data, mutate } = trpc.faucet.getAssets.useMutation({
    onMutate: () => {
      enableProgressBar(true);
      start();
      setIsLoading(true);
    },
    onError: (error) => {
      transactionError(convertError(error));
      Sentry.captureException(error, { extra: { key } });
      enableProgressBar(false);
      setIsLoading(false);
      clear();
    },
  });

  useEffect(() => {
    if (isSuccess && hasEnoughBalance) {
      enableProgressBar(false);
      setIsLoading(false);
      clear();
    }
  }, [clear, hasEnoughBalance, isSuccess]);

  useEffect(() => {
    if (isSuccess && data && hasEnoughTanssiBalance) {
      transferredAssetsInFlashbox({
        txHash: data.tanssiHash,
      });
    }
  }, [data, hasEnoughTanssiBalance, isSuccess, transferredAssetsInFlashbox]);

  useEffect(() => {
    if (isSuccess && data && hasEnoughRelayBalance) {
      transferredAssetsInFlashboxRelay({
        txHash: data.tanssiHash,
      });
    }
  }, [
    data,
    hasEnoughRelayBalance,
    isSuccess,
    transferredAssetsInFlashboxRelay,
  ]);

  return {
    isLoading,
    send: () => {
      mutate({ address: address || '', chainKey: key });
    },
  };
}

export function useDemoFaucet() {
  const [isLoading, setIsLoading] = useState(false);
  const { transactionError, transferredAssetsInDemo } =
    useFaucetNotifications();

  const { mutate } = trpc.faucet.getDemoAssets.useMutation({
    onMutate() {
      enableProgressBar(true);
      setIsLoading(true);
    },
    onSuccess({ hash }) {
      transferredAssetsInDemo({ txHash: hash });
    },
    onError(error) {
      transactionError(convertError(error));
      Sentry.captureException(error, { extra: { chain: demo.name } });
    },
    onSettled() {
      enableProgressBar(false);
      setIsLoading(false);
    },
  });

  return {
    isLoading,
    async send(address: string, captcha: string) {
      mutate({ address, captcha });
    },
  };
}
