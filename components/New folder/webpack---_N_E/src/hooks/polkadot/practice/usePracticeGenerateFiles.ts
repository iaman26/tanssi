import { usePracticeCreateAppchain } from '@/components/pages/CreateAppChain/state/create.hooks';
import { useMockTransaction } from '@/hooks/polkadot/useMockTransaction';
import { showNotification } from '@mantine/notifications';

export function usePracticeGenerateFiles() {
  const { setPracticeCreateAppchain } = usePracticeCreateAppchain();

  return useMockTransaction(5000, () => {
    setPracticeCreateAppchain({ areFilesGenerated: true });
    showNotification({
      title: 'Appchain data generated',
      message: 'The data for your appchain has been successfully generated.',
      color: 'tanssiBlue.9',
    });
  });
}
