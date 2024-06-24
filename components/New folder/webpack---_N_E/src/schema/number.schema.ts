import { z } from 'zod';

export const uIntSchema = z.coerce.number().int().nonnegative();

export const posIntSchema = z.coerce.number().int().positive();

export const uIntStringSchema = z.custom<string>((val) => {
  return typeof val === 'string' && /^[0-9]+$/.test(val);
}, 'Invalid unsigned integer number.');

export const hexSchema = z.custom<string>((val) => {
  return typeof val === 'string' && /^[a-fA-F0-9]+$/.test(val);
}, 'Invalid hex string.');

export const hexWithPrefixSchema = z.custom<`0x${string}`>((val) => {
  return typeof val === 'string' && /^0x[a-fA-F0-9]+$/.test(val);
}, 'Invalid hex string.');

export const formNumberSchema = (
  zodPipe: z.ZodNumber,
): z.ZodEffects<z.ZodNumber, number, number | string> =>
  zodPipe.transform((value, ctx): number => {
    if (typeof value === 'string' && value === '') {
      ctx.addIssue({
        code: 'custom',
        message: 'Field is required.',
      });
    }

    return +value ?? NaN;
  });
