import { useCreateAppChainFiles } from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainKey } from '@/config';
import { useAddress } from '@/state/user';
import { trpc } from '@/utils/trpc';

const day = 24 * 60 * 60 * 1000;

export function useChainFilesUrls(paraId: number | undefined, key: ChainKey) {
  const address = useAddress();
  const { haveFiles } = useCreateAppChainFiles();

  return trpc.files.getChainUrls.useQuery(
    {
      address: address || '',
      chainKey: key,
      paraId: paraId || 0,
    },
    {
      enabled: !haveFiles && !!address && !!paraId,
      staleTime: day,
      refetchOnMount: 'always',
    },
  );
}
