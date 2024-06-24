import {
  userEmailSchema,
  userNameSchema,
  userTelegramSchema,
} from '@/schema/user.schema';
import { z } from 'zod';

export enum Occupation {
  Business = 'Business',
  Community = 'Community',
  Developer = 'Developer',
  Investor = 'Investor',
  Marketing = 'Marketing',
  ProductManager = 'Product Manager',
}

export enum Field {
  DeFi = 'DeFi',
  Gaming = 'Gaming',
  AI = 'AI',
  NFT = 'NFT',
  Social = 'Social',
  Tooling = 'Tooling',
  Enterprise = 'Enterprise',
  CrossChain = 'Cross-Chain',
}

export const contactSchema = z.object({
  name: userNameSchema,
  email: userEmailSchema,
  telegram: userTelegramSchema,
  project: z.string().min(2),
  occupation: z.nativeEnum(Occupation).array().min(1),
  field: z.nativeEnum(Field).array().min(1),
  appchains: z.string().min(1).max(15).array().optional(),
});

export const getContactSchema = z.object({
  email: userEmailSchema,
});

export const updateContactSchema = z.object({
  email: userEmailSchema,
  appchain: z.string().min(1).max(20),
});
