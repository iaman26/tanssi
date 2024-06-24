import { useCreateAppChainSteps } from '@/components/pages/CreateAppChain/state/create.hooks';
import { Button, Center } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import classes from './CreateAppChain.module.css';

export function BackButton() {
  const { prevStep } = useCreateAppChainSteps();

  return (
    <Center mt={20}>
      <Button
        className={classes.backButton}
        variant={'subtle'}
        leftSection={<IconArrowLeft size={15} />}
        onClick={prevStep}
      >
        {'Back'}
      </Button>
    </Center>
  );
}
