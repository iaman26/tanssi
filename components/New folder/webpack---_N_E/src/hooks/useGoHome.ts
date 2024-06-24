import { useRouter } from 'next/router';
import { useCallback } from 'react';

export interface UseGoHomeReturn {
  replaceHome: VoidFunction;
}

export function useGoHome(): UseGoHomeReturn {
  const { replace } = useRouter();

  return {
    replaceHome: useCallback(() => replace('/'), [replace]),
  };
}
