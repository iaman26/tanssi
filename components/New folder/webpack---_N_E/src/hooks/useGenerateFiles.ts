import {
  useCreateAppChainCustom,
  useCreateAppChainInfo,
  useUserChainDataState,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { useGenerateAllFiles } from '@/hooks/api/useGenerateAllFiles';
import { useGenerateGenesis } from '@/hooks/api/useGenerateGenesis';
import { usePracticeGenerateFiles } from '@/hooks/polkadot/practice';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useCreateAppchainFiles } from '@/hooks/useCreateAppchainFiles';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';
import { ChainData } from '@/server/router/file/file.interfaces';
import { useAddress } from '@/state/user';
import { enableProgressBar } from '@/utils/loading';
import { useCallback, useEffect } from 'react';

export function useGenerateFiles(): {
  generateFiles: () => void;
  isPending: boolean;
  isDisabled: boolean;
} {
  const address = useAddress();
  const config = useChainConfig();
  const { isPending: isPendingFiles, mutate: generateAllFiles } =
    useGenerateAllFiles();
  const { isPending: isPendingGenesis, mutate: generateGenesis } =
    useGenerateGenesis();
  const { chainData } = useUserChainDataState();
  const { isCustom } = useCreateAppChainCustom();
  const { paraId } = useCreateAppChainInfo();
  const { specRaw } = useCreateAppchainFiles(paraId, config);

  const { isProtected: isAppchainProtected, isLoading: isLoadingProtected } =
    useIsAppchainProtected();

  const { isLoading: isLoadingPractice, send: practiceGenerate } =
    usePracticeGenerateFiles();

  const generateFiles = useCallback(() => {
    if (!address || !paraId) return;

    if (chainData && !isCustom) {
      const specs = getSpecs(chainData);

      generateAllFiles({
        address,
        chainKey: config.key,
        orchestratorParaId: config.parachainId,
        template: { ...specs, paraId },
      });
    }

    if (isCustom && specRaw) {
      generateGenesis({
        address,
        chainKey: config.key,
        specRaw: { ...specRaw, para_id: paraId },
      });
    }
  }, [
    address,
    paraId,
    chainData,
    isCustom,
    specRaw,
    config.key,
    config.parachainId,
    generateAllFiles,
    generateGenesis,
  ]);

  const isPending = isPendingFiles || isPendingGenesis;

  useEffect(() => {
    enableProgressBar(isPending);

    return () => enableProgressBar(false);
  }, [isPending]);

  return {
    generateFiles: isAppchainProtected ? generateFiles : practiceGenerate,
    isPending: isPending || isLoadingPractice,
    isDisabled:
      (isCustom && !specRaw) || (!isCustom && !chainData) || isLoadingProtected,
  };
}

function getSpecs(chainData: ChainData): ChainData {
  const specs = structuredClone(chainData);

  delete specs.url;
  delete specs.x;

  return specs;
}
