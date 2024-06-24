import { Alert } from '@/components/Alert';
import { WrongAddressWarning } from '@/components/pages/CreateAppChain/WrongAddressWarning';
import { Step } from '@/components/pages/CreateAppChain/state/create.interfaces';
import { ChainKey } from '@/config';
import { useIsDanceboxRegistrationEnabledFlag } from '@/hooks/flags/useIsDanceboxRegistrationEnabledFlag';
import { useIsFlashboxRegistrationEnabledFlag } from '@/hooks/flags/useIsFlashboxRegistrationEnabledFlag';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useChainKey } from '@/state/chain';
import { useAddress } from '@/state/user';
import { Stack } from '@mantine/core';
import { useEffect } from 'react';
import { useCreateAppChainSteps } from '../state/create.hooks';

export function CreateAppChainStep() {
  const address = useAddress();
  const isMounted = useIsMounted();
  const { getStepComponent } = useCreateAppChainSteps();
  const {
    activeStep,
    getStepIndex: getStep,
    setActiveStep,
  } = useCreateAppChainSteps();
  const key = useChainKey();
  const flashboxFlag = useIsFlashboxRegistrationEnabledFlag();
  const danceboxFlag = useIsDanceboxRegistrationEnabledFlag();

  const balancesStep = getStep(Step.Balances);
  const cantGoToStep = isMounted && activeStep > balancesStep && !address;

  useEffect(() => {
    if (cantGoToStep) {
      setActiveStep(balancesStep);
    }
  }, [cantGoToStep, balancesStep, setActiveStep]);

  if (
    key === ChainKey.Flashbox &&
    !flashboxFlag.isLoading &&
    !flashboxFlag.isEnabled
  ) {
    return <Alert>{flashboxFlag.text}</Alert>;
  }

  if (
    key === ChainKey.Dancebox &&
    !danceboxFlag.isLoading &&
    !danceboxFlag.isEnabled
  ) {
    return <Alert>{danceboxFlag.text}</Alert>;
  }

  if (cantGoToStep) {
    return null;
  }

  return (
    <Stack w={'100%'} align={'center'}>
      <WrongAddressWarning mb={10} />
      {getStepComponent()}
    </Stack>
  );
}
