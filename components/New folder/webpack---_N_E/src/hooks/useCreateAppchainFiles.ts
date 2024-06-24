import {
  useCreateAppChainFiles,
  usePracticeCreateAppchain,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainConfig } from '@/config';
import { useDownloadedFiles } from '@/hooks/useDownloadedFiles';
import { Files } from '@/server/router/file/file.interfaces';

export interface DownloadedFiles extends Partial<Files> {
  haveFiles: boolean;
  isFilesExistenceConfirmed: boolean;
}

export function useCreateAppchainFiles(
  paraId: number | undefined,
  config: ChainConfig,
): DownloadedFiles {
  const { specRaw, genesisState, genesisWasm, haveFiles } =
    useCreateAppChainFiles();
  const {
    data,
    isFetched: isFetchedFiles,
    isSuccess,
    isFetchedUrls,
    shouldFetchFiles,
  } = useDownloadedFiles(paraId, config.key);
  const { isLoading, areFilesGenerated } = usePracticeCreateAppchain();

  return {
    isFilesExistenceConfirmed:
      (isFetchedUrls && !shouldFetchFiles) ||
      isFetchedFiles ||
      haveFiles ||
      (!isLoading && areFilesGenerated),
    haveFiles: haveFiles || isSuccess || areFilesGenerated,
    specRaw: specRaw || data?.specRaw,
    genesisState: genesisState || data?.genesisState,
    genesisWasm: genesisWasm || data?.genesisWasm,
  };
}
