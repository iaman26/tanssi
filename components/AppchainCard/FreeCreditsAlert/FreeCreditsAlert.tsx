import { Alert } from '@/components/Alert';
import { useFreeCreditsAlert } from '@/components/AppchainCard/FreeCreditsAlert/state/FreeCreditsAlert.hooks';
import { useIsFlashbox } from '@/state/chain';

export function FreeCreditsAlert() {
  const isFlashbox = useIsFlashbox();
  const { isFreeCreditsAlertShown, setIsFreeCreditsAlertShown } =
    useFreeCreditsAlert();

  if (isFreeCreditsAlertShown || isFlashbox) return null;

  return (
    <Alert onClose={() => setIsFreeCreditsAlertShown(true)}>
      {
        'You have been given 60 days of free credits for Block Production. Block Production shows your current balance of DANCE tokens that is used for Block Production and the rate for block consumption, you will need to top up this balance for your Appchain to continue producing blocks.'
      }
    </Alert>
  );
}
