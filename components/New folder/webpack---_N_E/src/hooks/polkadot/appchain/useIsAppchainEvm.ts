import { ChainConfig } from '@/config';
import { useAppchainApi } from '@/hooks/polkadot/appchain';

export function useIsAppchainEvm(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): boolean | undefined {
  const api = useAppchainApi(paraId, config);

  return api?.registry.chainIsEthereum;
}
