import {
  useCreateAppChainInfo,
  useCreateAppchainProtectedKey,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { useContactForm } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { useApiNotifications } from '@/hooks/notifications/useApiNotifications';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useCreateAppchainFiles } from '@/hooks/useCreateAppchainFiles';
import { useUserEmail } from '@/hooks/useUserEmail';
import { useAddress } from '@/state/user';
import { trpc } from '@/utils/trpc';
import * as Sentry from '@sentry/nextjs';

export function useAppchainRegisteredMessage() {
  const config = useChainConfig();
  const address = useAddress();
  const email = useUserEmail();
  const { paraId } = useCreateAppChainInfo();
  const { name, key, relay } = useChainConfig();
  const { specRaw } = useCreateAppchainFiles(paraId, config);
  const { clientError } = useApiNotifications();
  const { contactFormValues } = useContactForm();
  const { protectedKey } = useCreateAppchainProtectedKey();

  const { isPending, mutate } = trpc.messages.appchainRegistered.useMutation({
    onError: (err) =>
      clientError(
        new Error('Failed to send appchain registered message', {
          cause: err,
        }),
      ),
  });

  return {
    isPending,
    send: () => {
      if (!specRaw) {
        Sentry.captureException(
          new Error("Can't mutate appchainRegistered without specRaw"),
          {
            level: 'error',
            extra: { address, paraId, chain: name, contactFormValues },
          },
        );

        return;
      }

      mutate({
        chain: name,
        chainKey: key,
        relay: relay.name,
        address: address || '',
        specRaw,
        email,
        telegram: contactFormValues.telegram || undefined,
        protectedKey,
      });
    },
  };
}
