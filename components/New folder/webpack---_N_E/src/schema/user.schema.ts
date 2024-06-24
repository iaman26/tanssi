import { z } from 'zod';

export const userNameSchema = z.string().min(2);
export const userEmailSchema = z.string().email();
export const userTelegramSchema = z.string().min(4);
