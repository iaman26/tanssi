import type { Signer } from '@polkadot/api/types';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { hexToString, stringToHex } from '@polkadot/util';
import { parse, stringify } from 'superjson';
import { User } from './user.interfaces';

export function createUserFromAccount(account: InjectedAccountWithMeta): User {
  return {
    address: account.address,
    source: account.meta.source,
    createdAt: new Date(),
  };
}

export interface DecodeUserResult {
  user: User;
  decoded: string;
}

export function decodeUser(encoded: string): DecodeUserResult {
  const decoded = hexToString(encoded);

  return {
    decoded,
    user: parse(decoded),
  };
}

export function getUserFromToken(token: string): User {
  const { user } = decodeUser(token.split('.')[0]);

  return user;
}

export async function createToken(
  account: InjectedAccountWithMeta,
  signer?: Signer,
): Promise<string> {
  const json = stringify(createUserFromAccount(account));
  const hex = stringToHex(json);

  if (!signer?.signRaw) {
    throw new Error('Signer not found');
  }

  const { signature } = await signer.signRaw({
    data: hex,
    address: account.address,
    type: 'payload',
  });

  return `${hex}.${signature}`;
}
