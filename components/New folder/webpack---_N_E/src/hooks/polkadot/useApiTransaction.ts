import { useProxy } from '@/components/Proxy/state/proxy.hooks';
import { BaseChainConfig } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useApi } from '@/hooks/polkadot';
import { useExtensions } from '@/state/polkadot-extension';
import { useUser } from '@/state/user';
import { convertError } from '@/utils/error';
import { enableProgressBar } from '@/utils/loading';
import {
  ErrorCallbackParams,
  SuccessCallbackParams,
  createTxEventHandler,
} from '@/utils/polkadot';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { SubmittableExtrinsicFunction } from '@polkadot/api/types';
import { EventRecord } from '@polkadot/types/interfaces/system';
import * as Sentry from '@sentry/nextjs';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseApiTransactionOptions<
  Extrinsic extends
    SubmittableExtrinsicFunction<'promise'> = SubmittableExtrinsicFunction<'promise'>,
> {
  tx: Extrinsic | undefined;
  config: BaseChainConfig | undefined;
  address?: string;
  omitProxy?: boolean;
  onEvents?: (events: EventRecord[]) => void;
  onSuccess?: (txHash: string, blockHash: string) => void;
  onError?: (err: Error, txHash?: string, blockHash?: string) => void;
  notify?: {
    notifyOnSuccess?: boolean;
    notifyOnError?: boolean;
  };
}

export type Callbacks = Pick<
  UseApiTransactionOptions,
  'onEvents' | 'onSuccess' | 'onError'
>;

export type UseApiTransactionResult<
  Extrinsic extends
    SubmittableExtrinsicFunction<'promise'> = SubmittableExtrinsicFunction<'promise'>,
> = {
  isLoading: boolean;
  send: (...params: Parameters<Extrinsic>) => Promise<void>;
  getFee: (
    ...params: Parameters<Extrinsic>
  ) => Promise<AssetAmount | undefined>;
};

export function useApiTransaction<
  Extrinsic extends
    SubmittableExtrinsicFunction<'promise'> = SubmittableExtrinsicFunction<'promise'>,
>({
  tx,
  config,
  onEvents,
  onSuccess,
  onError,
  address: addressFromOptions,
  omitProxy = false,
  notify: { notifyOnSuccess = true, notifyOnError = true } = {},
}: UseApiTransactionOptions<Extrinsic>): UseApiTransactionResult<Extrinsic> {
  const api = useApi(config?.ws);
  const user = useUser();
  const { signer } = useExtensions();

  const callbacksRef = useRef<Callbacks>({ onError, onSuccess, onEvents });
  const [isLoading, setIsLoading] = useState(false);
  const { proxy } = useProxy();
  const address =
    !omitProxy && proxy ? proxy.address : addressFromOptions || user?.address;

  const { transactionError, transactionSuccess } =
    useWalletNotifications(config);

  useEffect(() => {
    callbacksRef.current = { onError, onSuccess, onEvents };
  }, [onError, onSuccess, onEvents]);

  const handleError = useCallback(
    ({ error, txHash, blockHash, params }: ErrorCallbackParams): void => {
      callbacksRef.current.onError?.(error, txHash, blockHash);

      notifyOnError &&
        transactionError({
          error,
          source: user?.source,
          txHash,
          blockHash,
        });

      Sentry.captureException(error, {
        extra: {
          address,
          txHash,
          blockHash,
          params,
          tx: tx
            ? {
                pallet: tx.section,
                method: tx.method,
              }
            : undefined,
        },
      });

      setIsLoading(false);
    },
    [notifyOnError, transactionError, user?.source, address, tx],
  );

  const handleSuccess = useCallback(
    ({ txHash, blockHash }: SuccessCallbackParams): void => {
      setIsLoading(false);

      callbacksRef.current.onSuccess?.(txHash, blockHash);

      notifyOnSuccess &&
        transactionSuccess({
          txHash,
          blockHash,
        });
    },
    [notifyOnSuccess, transactionSuccess],
  );

  const send = useCallback(
    async (...params: unknown[]) => {
      if (!tx || !address) {
        return;
      }

      setIsLoading(true);

      try {
        await (api && proxy && !omitProxy
          ? api.tx.proxy.proxy(
              proxy.proxiedAddress,
              proxy.proxyType,
              tx(...params),
            )
          : tx(...params)
        ).signAndSend(
          address,
          {
            signer,
          },
          createTxEventHandler({
            onSuccess: handleSuccess,
            onEvents: callbacksRef.current.onEvents,
            onLoading: enableProgressBar,
            onError: (errorParams) => handleError({ ...errorParams, params }),
          }),
        );
      } catch (rawError) {
        const error = convertError(rawError);

        handleError({ error, params });
      }
    },

    [tx, address, proxy, api, signer, omitProxy, handleSuccess, handleError],
  );

  const getFee = useCallback(
    async (...params: Parameters<Extrinsic>) => {
      if (!tx || !address || !config) return;

      try {
        const res = await tx(...params).paymentInfo(address);

        return AssetAmount.fromAsset(config.asset, {
          amount: res.partialFee.toBigInt(),
          decimals: config.decimals,
        });
      } catch (rawError) {
        const error = convertError(rawError);

        handleError({ error, params });
      }
    },
    [tx, address, config, handleError],
  );

  return { isLoading, send, getFee };
}
