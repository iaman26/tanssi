import { useCreateAppChainSteps } from '@/components/pages/CreateAppChain/state/create.hooks';
import { Box, Button, Stepper } from '@mantine/core';
import { IconArrowLeft, IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import classes from './NavCreateAppchain.module.css';

export function NavCreateAppchain() {
  const { replace } = useRouter();
  const { activeStep, setActiveStep } = useCreateAppChainSteps();

  return (
    <Box>
      <Button
        mr={'sm'}
        mb={'lg'}
        c={'white'}
        variant={'subtle'}
        size={'md'}
        className={classes.backToMenu}
        leftSection={<IconArrowLeft size={20} stroke={2} />}
        onClick={() => replace('/create')}
      >
        {'Deploy Appchain'}
      </Button>
      <Stepper
        active={activeStep}
        onStepClick={setActiveStep}
        iconSize={55}
        allowNextStepsSelect={false}
        orientation={'vertical'}
        completedIcon={<IconCheck size={40} stroke={2} />}
        classNames={{
          root: classes.root,
          step: classes.step,
          separator: classes.separator,
          stepIcon: classes.stepIcon,
          stepLabel: classes.stepLabel,
          stepDescription: classes.stepDescription,
          verticalSeparator: classes.verticalSeparator,
        }}
      >
        <Stepper.Step
          label={'Template'}
          description={'Pick and modify template'}
        />
        <Stepper.Step label={'Balances'} description={'Verify balances'} />
        <Stepper.Step
          label={'Appchain ID'}
          description={'Reserve appchain ID'}
        />
        <Stepper.Step
          label={'Appchain Data'}
          description={'Generate appchain data'}
        />
        <Stepper.Step label={'Register'} description={'Register appchain'} />
      </Stepper>
    </Box>
  );
}
