import { User } from '@/state/user';
import { decodeUser } from '@/state/user/user.utils';
import { hexToU8a, isHex, u8aToHex } from '@polkadot/util';
import {
  decodeAddress,
  encodeAddress,
  signatureVerify,
} from '@polkadot/util-crypto';

export function isDefined<T>(param: T | null | undefined): param is T {
  return param !== undefined && param !== null;
}

export function areDefined<T extends unknown[]>(...params: T): boolean {
  return params.every(isDefined);
}

export const isSignatureValid = (
  message: string,
  signature: string,
  address: string,
): boolean => {
  const hexPublicKey = u8aToHex(decodeAddress(address));

  return signatureVerify(message, signature, hexPublicKey).isValid;
};

export type IsValidTokenResult =
  | { isValid: true; user: User }
  | { isValid: false; user: undefined };

export function isTokenValid(token: string | undefined): IsValidTokenResult {
  if (!token) {
    return { isValid: false, user: undefined };
  }

  const [encoded, signature] = token.split('.');

  if (!encoded || !signature) {
    return { isValid: false, user: undefined };
  }

  const { decoded, user } = decodeUser(encoded);

  if (!user || !user.address) {
    return { isValid: false, user: undefined };
  }

  const isValid = isSignatureValid(decoded, signature, user.address);
  const isTokenExpired = isExpired(user.createdAt);

  if (!isValid || isTokenExpired) {
    return { isValid: false, user: undefined };
  }

  return { isValid: true, user };
}

export function isExpired(createdAt: Date, days = 1): boolean {
  const now = new Date();
  const expired = new Date(createdAt).setDate(createdAt.getDate() + days);

  return +now > expired;
}

export function isValidPolkadotAddress(address: string): boolean {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (_error) {
    return false;
  }
}
