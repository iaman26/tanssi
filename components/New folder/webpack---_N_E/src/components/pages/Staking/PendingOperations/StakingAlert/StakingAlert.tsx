import { Alert } from '@/components/Alert';
import { useStakingAlert } from '@/components/pages/Staking/PendingOperations/StakingAlert/state/StakingAlert.hooks';
import { GroupProps } from '@mantine/core';
import { memo } from 'react';

interface Props extends GroupProps {}

export const StakingAlert = memo(function StakingAlert(props: Props) {
  const { isStakingAlertShown, setIsStakingAlertShown } = useStakingAlert();

  if (isStakingAlertShown) return null;

  return (
    <Alert onClose={() => setIsStakingAlertShown(true)} {...props}>
      {
        'Your pending operations will be automatically executed for you; no further action is needed on your part. However, you retain the possibility to execute them manually if you choose to do so.'
      }
    </Alert>
  );
});
