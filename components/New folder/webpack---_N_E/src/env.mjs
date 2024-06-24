import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const DEFAULT_DAPP_STATIC_FILES_BUCKET_NAME = 'tanssi-static-files';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    GITHUB_PAT: z.string().min(90),
    SERVICE_TOKEN: z.string().uuid(),
    SENTRY_AUTH_TOKEN: z.string().optional(),
    FAUCET_ACCOUNT: z.string().min(1),
    STAKING_PENDING_OPERATIONS_ACCOUNT: z.string().min(1),
    TANSSI_BINARY_API_URL: z.string().url(),
    TANSSI_BINARY_API_KEY: z.string().min(5),
    SLACK_APP_CHAIN_CREATED_URL: z.string().url().optional(),
    HUBSPOT_ACCESS_TOKEN: z.string().min(1),
    DAPP_AWS_REGION: z.string().min(1).default('eu-central-1'),
    DAPP_AWS_ACCESS_KEY_ID: z.string().min(20),
    DAPP_AWS_SECRET_ACCESS_KEY: z.string().min(40),
    DAPP_STATIC_FILES_BUCKET_NAME: z
      .string()
      .min(3)
      .max(63)
      .default(DEFAULT_DAPP_STATIC_FILES_BUCKET_NAME),
    SENDGRID_API_KEY: z.string().min(1),
    SENDGRID_DESTROYED_TEMPLATE_ID: z.string().min(1),
    SENDGRID_LAUNCHED_TEMPLATE_ID: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    DAPP_CAPTCHA_SECRET_KEY: z.string().min(1),
    PROTECTED_APPCHAIN_KEY: z.string().min(20).max(40),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_LOCAL_NODE: z.coerce.boolean().optional().default(false),
    NEXT_PUBLIC_FLAGSMITH_ENV_ID: z.string().min(1),
    NEXT_PUBLIC_DEPLOYMENT: z
      .enum(['local', 'test', 'sandbox', 'production'])
      .optional()
      .default('local'),
    NEXT_PUBLIC_CAPTCHA_SITE_KEY: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtime (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SERVICE_TOKEN: process.env.SERVICE_TOKEN,
    GITHUB_PAT: process.env.GITHUB_PAT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    FAUCET_ACCOUNT: process.env.FAUCET_ACCOUNT,
    STAKING_PENDING_OPERATIONS_ACCOUNT:
      process.env.STAKING_PENDING_OPERATIONS_ACCOUNT,
    TANSSI_BINARY_API_URL: process.env.TANSSI_BINARY_API_URL,
    TANSSI_BINARY_API_KEY: process.env.TANSSI_BINARY_API_KEY,
    SLACK_APP_CHAIN_CREATED_URL: process.env.SLACK_APP_CHAIN_CREATED_URL,
    HUBSPOT_ACCESS_TOKEN: process.env.HUBSPOT_ACCESS_TOKEN,
    NEXT_PUBLIC_LOCAL_NODE: process.env.NEXT_PUBLIC_LOCAL_NODE,
    NEXT_PUBLIC_FLAGSMITH_ENV_ID: process.env.NEXT_PUBLIC_FLAGSMITH_ENV_ID,
    NEXT_PUBLIC_DEPLOYMENT: process.env.NEXT_PUBLIC_DEPLOYMENT,
    DAPP_AWS_REGION: process.env.DAPP_AWS_REGION,
    DAPP_AWS_ACCESS_KEY_ID: process.env.DAPP_AWS_ACCESS_KEY_ID,
    DAPP_AWS_SECRET_ACCESS_KEY: process.env.DAPP_AWS_SECRET_ACCESS_KEY,
    DAPP_STATIC_FILES_BUCKET_NAME: process.env.DAPP_STATIC_FILES_BUCKET_NAME,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_DESTROYED_TEMPLATE_ID: process.env.SENDGRID_DESTROYED_TEMPLATE_ID,
    SENDGRID_LAUNCHED_TEMPLATE_ID: process.env.SENDGRID_LAUNCHED_TEMPLATE_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_CAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY,
    DAPP_CAPTCHA_SECRET_KEY: process.env.DAPP_CAPTCHA_SECRET_KEY,
    PROTECTED_APPCHAIN_KEY: process.env.PROTECTED_APPCHAIN_KEY,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
