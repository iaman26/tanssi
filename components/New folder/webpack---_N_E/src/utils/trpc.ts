import type { AppRouter } from '@/server/router/router';
import { token, user } from '@/state/user';
import { isWindowDefined } from '@/utils/window';
import { HTTPHeaders, httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

function getBaseUrl(): string {
  if (isWindowDefined()) {
    return '';
  }

  return 'http://localhost:4000';
}

export function headers(): HTTPHeaders {
  if (!user.value) {
    return {};
  }

  return {
    Authorization: token.value,
  };
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: getBaseUrl() + '/api/trpc',
          headers,
        }),
      ],
    };
  },
  ssr: false,
});
