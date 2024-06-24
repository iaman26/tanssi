import { useUserChainDataState } from '@/components/pages/CreateAppChain/state/create.hooks';

export function usePracticeAppchainId(): string {
  const { chainData } = useUserChainDataState();

  return `${chainData?.name}-${new Date().getTime()}`;
}
