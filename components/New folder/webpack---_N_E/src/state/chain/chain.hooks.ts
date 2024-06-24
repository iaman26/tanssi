import {
  useCreateAppChainInfo,
  useCreateNewAppchain,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainKey, defaultChainKey } from '@/config';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { selectedChainKeyAtom } from './chain.atoms';
import { getChainKeyFromQuery, isChainKeyValid } from './chain.utils';

export function useValidateChainKeyParam(): void {
  const { query, replace } = useRouter();
  const param = getChainKeyFromQuery(query);
  const isValid = isChainKeyValid(param);
  const isMounted = useIsMounted();

  if (isMounted && param && !isValid) {
    replace(`/${defaultChainKey}`);
  }
}

export function useChainKey(): ChainKey {
  const { query } = useRouter();
  const storedKey = useAtomValue(selectedChainKeyAtom);

  const param = getChainKeyFromQuery(query);
  const isValid = isChainKeyValid(param);

  const key = isValid ? param : undefined;

  return key || storedKey || defaultChainKey;
}

export function useIsFlashbox(): boolean {
  return useChainKey() === ChainKey.Flashbox;
}

export function useIsDancebox(): boolean {
  return useChainKey() === ChainKey.Dancebox;
}

export function useSetChainKey(): (key: ChainKey) => void {
  const key = useChainKey();
  const { paraId } = useCreateAppChainInfo();
  const setChainKey = useSetAtom(selectedChainKeyAtom);
  const createNewAppchain = useCreateNewAppchain();

  const shouldResetCreateAppchainStorage = !!paraId;

  return useCallback(
    (newKey: ChainKey) => {
      if (newKey === key) return;

      if (shouldResetCreateAppchainStorage) {
        createNewAppchain();
      }

      setChainKey(newKey);
    },
    [key, shouldResetCreateAppchainStorage, setChainKey, createNewAppchain],
  );
}
