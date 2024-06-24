import { usePracticeCreateAppchain } from '@/components/pages/CreateAppChain/state/create.hooks';
import { RelayChainConfig } from '@/config';
import { useParaLifecycles } from '@/hooks/polkadot/common/queries/useParaLifecycles';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';

export function useIsRegisteredInRelay(config: RelayChainConfig): boolean {
  const data = useParaLifecycles(config);
  const { isProtected, isLoading } = useIsAppchainProtected();
  const { isRegisteredInRelay } = usePracticeCreateAppchain();

  if (!isProtected && !isLoading) {
    return isRegisteredInRelay;
  }

  return !!data;
}
