import {
  useCreateAppChainInfo,
  usePracticeCreateAppchain,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainConfig } from '@/config';
import { AppChainStatus, useAppchainStatus } from '@/hooks/polkadot/appchain';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';

export function useIsRegisteredInTanssi(
  config: ChainConfig,
): boolean | undefined {
  const { paraId } = useCreateAppChainInfo();
  const { status } = useAppchainStatus(paraId, config);
  const { isProtected, isLoading } = useIsAppchainProtected();
  const { isRegisteredInTanssi } = usePracticeCreateAppchain();

  if (!isProtected && !isLoading) {
    return isRegisteredInTanssi;
  }

  if (!status) {
    return;
  }

  return status !== AppChainStatus.NotFound;
}
