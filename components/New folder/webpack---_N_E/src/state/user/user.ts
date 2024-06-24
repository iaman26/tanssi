import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useIsMounted } from '@/hooks/useIsMounted';
import { key } from '@/state/user/user.constants';
import { convertError } from '@/utils/error';
import { isTokenValid } from '@/utils/validate';
import { isWindowDefined } from '@/utils/window';
import { modals } from '@mantine/modals';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { computed, effect, signal } from '@preact/signals-react';
import { useCallback } from 'react';
import { accounts, extension, signer } from '../polkadot-extension';
import { User } from './user.interfaces';
import { createToken } from './user.utils';

export const isReady = signal(false);

effect(() => {
  cryptoWaitReady().then(() => {
    isReady.value = true;
  });
});

export const token = signal<string | undefined>(
  isWindowDefined() ? localStorage.getItem(key) || undefined : undefined,
);

effect(() => {
  isWindowDefined() && localStorage.setItem(key, token.value || '');
});

export const user = computed<User | undefined>(() => {
  if (!token.value || !isReady.value) {
    return undefined;
  }

  const { isValid, user } = isTokenValid(token.value);
  const isExtensionValid = user?.source === extension.value;
  const isAccountValid = accounts.value.some(
    (account) => account.address === user?.address,
  );

  return isValid && isExtensionValid && isAccountValid ? user : undefined;
});
export const address = computed<string | undefined>(() => user.value?.address);
export const isConnecting = signal(false);

export function useAddress(): string | undefined {
  return useIsMounted() ? address.value : undefined;
}

export function useIsAuthenticated(): boolean | undefined {
  return useIsMounted() ? !!user.value : undefined;
}

export function useUser(): User | undefined {
  return useIsMounted() ? user.value : undefined;
}

interface UseConnectResult {
  isConnecting: boolean;
  connect: (account: InjectedAccountWithMeta) => Promise<void>;
}

export function useConnect(): UseConnectResult {
  const { transactionError } = useWalletNotifications(undefined);

  const connect = useCallback(
    async (account: InjectedAccountWithMeta): Promise<void> => {
      if (isConnecting.value) {
        return;
      }

      isConnecting.value = true;

      try {
        token.value = await createToken(account, signer.value);
        modals.closeAll();
      } catch (err) {
        const error = convertError(err);

        transactionError({ error, source: account.meta.source });
      } finally {
        isConnecting.value = false;
      }
    },
    [transactionError],
  );

  return { connect, isConnecting: isConnecting.value };
}
