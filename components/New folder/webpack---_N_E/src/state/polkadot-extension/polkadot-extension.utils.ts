import { isWindowDefined } from '@/utils/window';
import type {
  InjectedAccount,
  InjectedAccountWithMeta,
} from '@polkadot/extension-inject/types';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import type { KeypairType } from '@polkadot/util-crypto/types';
import type { InjectedProviders } from './polkadot-extension.interfaces';

export function mapAccounts(
  source: string,
  list: InjectedAccount[],
  ss58Format?: number,
): InjectedAccountWithMeta[] {
  return list.map(
    ({ address, genesisHash, name, type }): InjectedAccountWithMeta => ({
      address:
        address.length === 42
          ? address
          : encodeAddress(decodeAddress(address), ss58Format),
      meta: { genesisHash, name, source },
      type,
    }),
  );
}

export function filterAccounts(
  accounts: InjectedAccountWithMeta[],
  genesisHash?: string,
  type?: KeypairType | KeypairType[],
): InjectedAccountWithMeta[] {
  return accounts.filter(
    (acc) =>
      (!acc.type ||
        !type ||
        (Array.isArray(type) ? type : [type]).includes(acc.type)) &&
      (!acc.meta.genesisHash ||
        !genesisHash ||
        acc.meta.genesisHash === genesisHash),
  );
}

export function injectedWeb3Subscribe(
  cb: (providers: InjectedProviders) => void,
): void {
  if (!isWindowDefined()) {
    return;
  }

  const injectedWeb3 = window.injectedWeb3 || {};

  cb({ ...injectedWeb3 });

  window.injectedWeb3 = new Proxy<InjectedProviders>(injectedWeb3, {
    set(obj, prop, value): boolean {
      const result = Reflect.set(obj, prop, value);

      cb({ ...obj });

      return result;
    },
  });
}
