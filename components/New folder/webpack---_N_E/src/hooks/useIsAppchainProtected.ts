import { useCreateAppchainProtectedKey } from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainKey } from '@/config';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useAddress } from '@/state/user';
import { trpc } from '@/utils/trpc';

export function useIsAppchainProtected() {
  const address = useAddress();
  const { key } = useChainConfig();
  const {
    protectedKey,
    hasProtectedKey,
    isLoading: isLoadingKey,
  } = useCreateAppchainProtectedKey();

  const { isLoading, data } = trpc.appchains.isProtected.useQuery(
    { protectedKey: protectedKey || '' },
    {
      enabled: hasProtectedKey && key === ChainKey.Flashbox && !!address,
      refetchOnWindowFocus: false,
    },
  );

  return {
    isProtected: key === ChainKey.Flashbox ? !!data : true,
    isLoading: isLoadingKey || isLoading,
  };
}
