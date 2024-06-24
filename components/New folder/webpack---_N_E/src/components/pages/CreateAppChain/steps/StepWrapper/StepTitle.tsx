import { Title } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function StepTitle({ children }: Props) {
  return (
    <Title maw={600} size={40} ta={'center'} mx={'auto'} c={'white'} mb={35}>
      {children}
    </Title>
  );
}
