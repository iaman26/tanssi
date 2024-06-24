import { enableProgressBar } from '@/utils/loading';
import { useCallback, useState } from 'react';

export interface MockTransactionResult {
  send: () => void;
  isLoading: boolean;
}

export function useMockTransaction(
  time: number = 2000,
  onSuccess?: () => void,
): MockTransactionResult {
  const [isLoading, setIsLoading] = useState(false);

  const send = useCallback(() => {
    enableProgressBar(true);
    setIsLoading(true);

    setTimeout(() => {
      enableProgressBar(false);
      setIsLoading(false);
      onSuccess?.();
    }, time);
  }, [time, onSuccess]);

  return { send, isLoading };
}
