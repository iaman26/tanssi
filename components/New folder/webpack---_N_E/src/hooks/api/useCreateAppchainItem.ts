import {
  useCreateAppChainInfo,
  useUserChainDataState,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { useApiNotifications } from '@/hooks/notifications/useApiNotifications';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useCreateAppchainFiles } from '@/hooks/useCreateAppchainFiles';
import { useUser } from '@/state/user';
import { trpc } from '@/utils/trpc';
import * as Sentry from '@sentry/nextjs';
import { useSession } from 'next-auth/react';

export function useCreateAppchainItem() {
  const config = useChainConfig();
  const userAccount = useUser();
  const { paraId } = useCreateAppChainInfo();
  const { chainData } = useUserChainDataState();
  const { data: session } = useSession();
  const { specRaw } = useCreateAppchainFiles(paraId, config);
  const { clientError } = useApiNotifications();

  const { isPending, mutate } = trpc.appchains.createItem.useMutation({
    onError: (error) =>
      clientError(
        new Error('Failed to create appchain item', { cause: error }),
      ),
  });

  return {
    isPending,
    createAppchainItem: () => {
      if (!userAccount || !paraId) {
        Sentry.captureMessage('Failed to create appchain: missing data', {
          level: 'error',
          extra: {
            chain: config.name,
            paraId,
            chainData,
            specRaw,
            session,
          },
        });

        return;
      }

      mutate({
        paraId,
        name: specRaw?.name || paraId.toString(),
        url: chainData?.url,
        x: chainData?.x,
        address: userAccount.address,
        chainKey: config.key,
        email: session?.user?.email,
        userName: session?.user?.name,
        iconImageBase64: chainData?.iconImage?.content,
      });
    },
  };
}
