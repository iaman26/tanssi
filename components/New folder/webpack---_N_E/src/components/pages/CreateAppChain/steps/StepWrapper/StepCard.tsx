import { BackButton } from '@/components/pages/CreateAppChain/BackButton';
import { Paper } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function StepCard({ children }: Props) {
  return (
    <>
      <Paper maw={690} p={{ base: 30, xs: 50 }}>
        {children}
      </Paper>
      <BackButton />
    </>
  );
}
