import { useCreateAppChainFiles } from '@/components/pages/CreateAppChain/state/create.hooks';
import { trpc } from '@/utils/trpc';
import { showNotification } from '@mantine/notifications';

export function useGenerateAllFiles() {
  const { setSpecRaw, setGenesisState, setGenesisWasm } =
    useCreateAppChainFiles();

  return trpc.files.generateAll.useMutation({
    onError() {
      showNotification({
        title: 'Something went wrong',
        message: 'Please try again later',
        color: 'red',
      });
    },
    onSuccess(data) {
      setSpecRaw(data.specRaw);
      setGenesisState(data.genesisState);
      setGenesisWasm(data.genesisWasm);
    },
  });
}
