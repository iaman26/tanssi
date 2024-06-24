var _sentryCollisionFreeGlobalObject = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
_sentryCollisionFreeGlobalObject["__sentryRewritesTunnelPath__"] = "/monitoring";
_sentryCollisionFreeGlobalObject["SENTRY_RELEASE"] = {"id":"wu9TwlY_vkvI-V2T0evD5"};
_sentryCollisionFreeGlobalObject["__sentryBasePath"] = undefined;
_sentryCollisionFreeGlobalObject["__rewriteFramesAssetPrefixPath__"] = "";

// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const NODE_ENV = process.env.NODE_ENV;
const NEXT_PUBLIC_DEPLOYMENT = process.env.NEXT_PUBLIC_DEPLOYMENT;

Sentry.init({
  dsn: 'https://230b1fcab2104303c71cba5561e11494@o4505765694996480.ingest.sentry.io/4505765708365824',

  enabled: NODE_ENV === 'production' && NEXT_PUBLIC_DEPLOYMENT !== 'local',
  environment: NEXT_PUBLIC_DEPLOYMENT,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [Sentry.rewriteFramesIntegration()],

  profilesSampleRate: 0.1,

  ignoreErrors: [
    'No response received from RPC endpoint in 60s',
    'disconnected from wss',
    'WebSocket is not connected',
    'Cannot redefine property: ethereum',
    'You have already received your tokens',
    'Talisman extension has not been configured yet',
    "Cannot assign to read only property 'ethereum'",
    '1006:: Abnormal Closure',
    'Error: Cancelled',
    'wss://relay.walletconnect.org',
    'Rejected by user',
    'Priority is too low',
    'The transaction has too low priority',
    'Transaction is outdated',
    'can\'t redefine non-configurable property "ethereum"',
    'User rejected the request',
    'Invalid captcha',
  ],

  beforeSend(event, hint) {
    const error = hint.originalException;
    const stack = (error as Error).stack;

    if (stack && /chrome-extension:\/\//.test(stack)) {
      return null;
    }

    if (typeof event.request?.data === 'string') {
      event.request.data = event.request.data.replace(
        /\{"code":"0x[a-fA-F0-9]+"\},/,
        '',
      );
    }

    return event;
  },
});
