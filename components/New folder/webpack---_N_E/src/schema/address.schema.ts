import { isValidPolkadotAddress } from '@/utils/validate';
import { isString } from '@polkadot/util';
import { z } from 'zod';

export const ethereumAddressSchema = z.string().regex(/^0x[a-fA-F0-9]{40}$/, {
  message: 'Invalid address. Must be 0x-prefixed 20 bytes hex string.',
});

export const substrateAddressSchema = z.custom<string>((val) => {
  return isString(val) && isValidPolkadotAddress(val as string);
}, 'Invalid address. Must be a valid Substrate address.');
