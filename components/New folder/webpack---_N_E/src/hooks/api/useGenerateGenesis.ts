import { useCreateAppChainFiles } from '@/components/pages/CreateAppChain/state/create.hooks';
import { trpc } from '@/utils/trpc';

export function useGenerateGenesis() {
  const { setGenesisState, setGenesisWasm } = useCreateAppChainFiles();

  return trpc.files.generateGenesis.useMutation({
    onSuccess(data) {
      setGenesisState(data.genesisState);
      setGenesisWasm(data.genesisWasm);
    },
  });
}
