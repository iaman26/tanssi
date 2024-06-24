import { isWindowDefined } from '@/utils/window';
import type { Signer } from '@polkadot/api/types';
import type {
  InjectedAccountWithMeta,
  InjectedExtensionInfo,
} from '@polkadot/extension-inject/types';
import type { KeypairType } from '@polkadot/util-crypto/types';
import { batch, computed, effect, signal } from '@preact/signals-react';
import { useMemo } from 'react';
import type {
  InjectedProviders,
  UsePolkadotExtension,
} from './polkadot-extension.interfaces';
import {
  filterAccounts,
  injectedWeb3Subscribe,
  mapAccounts,
} from './polkadot-extension.utils';

const key = '@polkadot-extension/extension_v2';

export const isLoading = signal(false);

export const error = signal<Error | undefined>(undefined);

export const extension = signal<string | undefined>(
  isWindowDefined() ? localStorage.getItem(key) || undefined : undefined,
);

export const accounts = signal<InjectedAccountWithMeta[]>([]);

export const signer = signal<Signer | undefined>(undefined);

export const providers = signal<InjectedProviders>({});

injectedWeb3Subscribe((newProviders) => {
  providers.value = newProviders;
});

export const extensions = computed<InjectedExtensionInfo[]>(() =>
  Object.entries(providers.value).map(([name, { version = '' }]) => ({
    name,
    version,
  })),
);

function reset(err?: Error): void {
  batch(() => {
    accounts.value = [];
    signer.value = undefined;
    isLoading.value = false;
    error.value = err;
  });
}

effect(() => {
  void (async () => {
    if (!isWindowDefined()) {
      return;
    }

    batch(() => {
      isLoading.value = true;
      accounts.value = [];
      signer.value = undefined;
    });

    const ext = providers.value[extension.value || ''];

    if (!extension.value || !ext) {
      reset(new Error('Extension not found'));

      return;
    }

    try {
      const injected = await ext.enable?.('Tanssi Dapp');
      const injectedAccounts = await injected?.accounts.get(true);

      localStorage.setItem(key, extension.value);

      batch(() => {
        accounts.value = mapAccounts(
          extension.value as string,
          injectedAccounts || [],
        );
        signer.value = injected?.signer as Signer | undefined;
        isLoading.value = false;
        error.value = undefined;
      });
    } catch (error) {
      console.error(error);
      reset(error as Error);
    }
  })();
});

export function setExtension(name?: string | undefined): void {
  extension.value = name;
}

export function checkAccountAvailability(address: string | undefined): boolean {
  if (!address) {
    return false;
  }

  return accounts.value.some((acc) => acc.address === address);
}

export function useExtensions(
  type?: KeypairType | KeypairType[],
  genesisHash?: string,
): UsePolkadotExtension {
  return {
    isLoading: isLoading.value,
    error: error.value,
    // biome-ignore lint: We need to include accounts.value here to trigger the memoization
    accounts: useMemo(
      () => filterAccounts(accounts.value, genesisHash, type),
      // We need to include accounts.value here to trigger the memoization
      [genesisHash, type, accounts.value],
    ),
    extension: extension.value,
    extensions: extensions.value,
    signer: signer.value,
    setExtension,
    checkAccountAvailability,
  };
}
