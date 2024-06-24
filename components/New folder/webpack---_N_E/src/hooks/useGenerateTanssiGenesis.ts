import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainConfig } from '@/config';
import { useCreateAppchainFiles } from '@/hooks/useCreateAppchainFiles';
import { TanssiGenesisState } from '@/server/router/file/file.interfaces';
import { chainSpecToContainerChainGenesisData } from '@/utils/tanssi';
import { useMemo } from 'react';
import { useApi } from './polkadot/useApi';

export function useTanssiGenesis(
  config: ChainConfig,
): TanssiGenesisState | undefined {
  const api = useApi(config.ws);
  const { paraId } = useCreateAppChainInfo();
  const { specRaw } = useCreateAppchainFiles(paraId, config);

  return useMemo(() => {
    if (!api || !specRaw) return;

    return chainSpecToContainerChainGenesisData(api, specRaw);
  }, [api, specRaw]);
}
