import { ChainConfig } from '@/config';
import { useAppchainApi } from '@/hooks/polkadot/appchain';

export function useAppchainVersion(
  paraId: number | undefined,
  config: ChainConfig,
): number | undefined {
  const api = useAppchainApi(paraId, config);

  return api?.consts.system.version.specVersion.toNumber();
}
