import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { isProd } from '@/config';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useUserEmail } from '@/hooks/useUserEmail';
import { useAddress } from '@/state/user';
import { trpc } from '@/utils/trpc';
import * as Sentry from '@sentry/nextjs';

export function useUpdateContact() {
  const email = useUserEmail();
  const address = useAddress();
  const { key, name } = useChainConfig();
  const { paraId } = useCreateAppChainInfo();

  const { isPending, mutate } = trpc.contacts.update.useMutation();

  return {
    isPending,
    updateContact: () => {
      if (!email || !paraId) {
        Sentry.captureMessage('Failed to update contact: missing data', {
          level: 'info',
          extra: { chain: name, address, paraId, email },
        });

        return;
      }

      if (isProd) {
        mutate({ email, appchain: `${key}-${paraId}` });
      }
    },
  };
}
