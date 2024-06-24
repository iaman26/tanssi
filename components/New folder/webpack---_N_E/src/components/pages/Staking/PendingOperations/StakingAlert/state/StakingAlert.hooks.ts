import { isStakingAlertShownStorageAtom } from '@/components/pages/Staking/PendingOperations/StakingAlert/state/StakingAlert.atoms';
import { useAtom } from 'jotai';

interface StakingAlert {
  isStakingAlertShown: boolean;
  setIsStakingAlertShown: (value: boolean) => void;
}

export function useStakingAlert(): StakingAlert {
  const [isStakingAlertShown, setIsStakingAlertShown] = useAtom(
    isStakingAlertShownStorageAtom,
  );

  return {
    isStakingAlertShown,
    setIsStakingAlertShown,
  };
}
