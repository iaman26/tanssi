import { showNotification } from '@mantine/notifications';
import * as Sentry from '@sentry/nextjs';
import { useMemo } from 'react';

export interface ApiNotifications {
  clientError: (error: Error) => void;
}

export const useApiNotifications = (): ApiNotifications => {
  return useMemo(
    (): ApiNotifications => ({
      clientError: (error: Error): void => {
        console.error(error);

        Sentry.captureException(error.message, {
          level: 'error',
          extra: { error, cause: error.cause },
        });

        showNotification({
          title: 'Internal server error',
          message: `Something went wrong, please try again later.`,
          color: 'red',
        });
      },
    }),
    [],
  );
};
