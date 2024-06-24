import { demo } from '@/config';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { enableProgressBar } from '@/utils/loading';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import {
  useEstimateGas,
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import { CAPTURE_THE_FLAG_ABI } from './CaptureTheFlag.abi';
import { CAPTURE_THE_FLAG_CONTRACT_ADDRESS } from './CaptureTheFlag.constants';
import { useCapturePrice } from './useCapturePrice';
import { useCurrentHolder } from './useCurrentHolder';
import { useLastCaptureTimestamp } from './useLastCaptureTimestamp';

export function useCaptureFlag() {
  const { data: price } = useCapturePrice();
  const { queryKey } = useCurrentHolder();
  const { queryKey: queryKeyTimestamp } = useLastCaptureTimestamp();
  const queryClient = useQueryClient();
  const { transactionError, transactionSuccess } = useWalletNotifications(demo);
  const {
    isPending,
    data: hash,
    writeContract,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        enableProgressBar(true);
      },
      onError: (error) => {
        enableProgressBar(false);
        transactionError({ error });
      },
    },
  });
  const url = `https://fra-dancebox-3001-bs.a.dancebox.tanssi.network/tx/${hash}`;

  const { data } = useSimulateContract({
    abi: CAPTURE_THE_FLAG_ABI,
    address: CAPTURE_THE_FLAG_CONTRACT_ADDRESS,
    functionName: 'captureFlag',
    args: [],
    value: price,
  });

  const { data: gas } = useEstimateGas(data?.request);

  const capture = (): void => {
    if (!gas || !data?.request) return;

    writeContract({
      ...data.request,
      gas: gas * 2n, // 100% more gas than estimated to ensure the transaction goes through
    });
  };

  const { error, isError, isFetching, isSuccess } =
    useWaitForTransactionReceipt({ hash });

  const onSuccess = () => {
    enableProgressBar(false);
    transactionSuccess({
      txHash: hash || '',
      blockHash: '',
      url,
    });
    queryClient.invalidateQueries({ queryKey: queryKey });
    queryClient.invalidateQueries({ queryKey: queryKeyTimestamp });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: covered by isSuccess
  useEffect(() => {
    if (isSuccess) {
      onSuccess();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      enableProgressBar(false);
      transactionError({ error, txHash: hash, url });
    }
  }, [error, hash, isError, transactionError, url]);

  return {
    capture,
    hash,
    isPending: isPending || isFetching,
  };
}
