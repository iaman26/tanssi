import { AppChainUrls, ChainConfig } from '@/config';
import { useIsAppchainEvm } from '@/hooks/polkadot/appchain';
import { useMemo } from 'react';

export function useAppchainUrls(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): AppChainUrls | undefined {
  const isEvm = useIsAppchainEvm(paraId, config);

  return useMemo(
    () => (paraId ? config?.getAppChainUrls(paraId, isEvm) : undefined),
    [paraId, isEvm, config],
  );
}
