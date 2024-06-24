import {
  ethereumAddressSchema,
  substrateAddressSchema,
} from '@/schema/address.schema';
import {
  formNumberSchema,
  hexSchema,
  hexWithPrefixSchema,
  posIntSchema,
  uIntSchema,
} from '@/schema/number.schema';
import { z } from 'zod';

export const baseChainDataSchema = z.object({
  name: z.string().min(3).max(40),
  url: z.union([z.string().length(0), z.string().url()]).optional(),
  x: z.union([z.string().length(0), z.string().min(3).max(20)]).optional(),
  tokenDecimals: formNumberSchema(posIntSchema.min(9).max(18)),
  tokenSymbol: z.string().regex(/^[a-zA-Z]{2,10}$/, {
    message: 'Invalid token symbol. Can contain only 2-10 letters.',
  }),
  sudoBalance: formNumberSchema(posIntSchema.max(1e15)),
});

export const evmChainDataSchema = baseChainDataSchema.merge(
  z.object({
    isEthereum: z.literal(true),
    sudoAddress: ethereumAddressSchema,
    evmChainId: formNumberSchema(posIntSchema.max(99999999999)),
    baseFeePerGas: formNumberSchema(uIntSchema),
    elasticity: formNumberSchema(z.coerce.number().positive().max(100)),
    balances: z
      .object({
        id: z.string().uuid(),
        address: ethereumAddressSchema,
        balance: formNumberSchema(posIntSchema.max(1e15)),
      })
      .array(),
    precompiles: z
      .object({
        id: z.string().uuid(),
        address: ethereumAddressSchema,
        bytecode: hexSchema.or(hexWithPrefixSchema),
      })
      .array(),
    iconImage: z
      .object({
        type: z.string(),
        content: z.string(),
      })
      .optional(),
  }),
);

export const substrateChainDataSchema = baseChainDataSchema.merge(
  z.object({
    isEthereum: z.literal(false),
    ss58Format: formNumberSchema(posIntSchema),
    sudoAddress: substrateAddressSchema,
    balances: z
      .object({
        id: z.string().uuid(),
        address: substrateAddressSchema,
        balance: formNumberSchema(posIntSchema.max(1e15)),
      })
      .array(),
    iconImage: z
      .object({
        type: z.string(),
        content: z.string(),
      })
      .optional(),
  }),
);
