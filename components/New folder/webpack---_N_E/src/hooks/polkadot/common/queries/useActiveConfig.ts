import { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import type { PalletConfigurationHostConfiguration } from '@polkadot/types/lookup';

interface ActiveConfig {
  collatorsPerContainer: number;
}

export function useActiveConfig(config: ChainConfig): ActiveConfig | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.query.configuration.activeConfig, [], transform);
}

function transform(config: PalletConfigurationHostConfiguration): {
  collatorsPerContainer: number;
} {
  return { collatorsPerContainer: config.collatorsPerContainer.toNumber() };
}
