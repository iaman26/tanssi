import { isFreeCreditsAlertShownStorageAtom } from '@/components/AppchainCard/FreeCreditsAlert/state/FreeCreditsAlert.atoms';
import { useAtom } from 'jotai';

interface FreeCreditsAlert {
  isFreeCreditsAlertShown: boolean;
  setIsFreeCreditsAlertShown: (value: boolean) => void;
}

export function useFreeCreditsAlert(): FreeCreditsAlert {
  const [isFreeCreditsAlertShown, setIsFreeCreditsAlertShown] = useAtom(
    isFreeCreditsAlertShownStorageAtom,
  );

  return {
    isFreeCreditsAlertShown,
    setIsFreeCreditsAlertShown,
  };
}
