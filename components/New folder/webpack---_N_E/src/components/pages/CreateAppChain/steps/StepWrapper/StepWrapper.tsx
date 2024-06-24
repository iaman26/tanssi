import { StepButtons } from '@/components/pages/CreateAppChain/steps/StepWrapper/StepButtons';
import { StepCard } from '@/components/pages/CreateAppChain/steps/StepWrapper/StepCard';
import { StepTitle } from '@/components/pages/CreateAppChain/steps/StepWrapper/StepTitle';
import { Stack, StackProps } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends StackProps {
  children: ReactNode;
}

export function StepWrapper({ children, ...others }: Props) {
  return (
    <Stack
      pt={'1vh'}
      align={'center'}
      w={'100%'}
      h={'100%'}
      gap={0}
      {...others}
    >
      {children}
    </Stack>
  );
}

StepWrapper.Title = StepTitle;
StepWrapper.Card = StepCard;
StepWrapper.Buttons = StepButtons;
