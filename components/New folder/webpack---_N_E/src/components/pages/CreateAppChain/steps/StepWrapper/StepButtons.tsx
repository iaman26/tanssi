import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Group, GroupProps } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends GroupProps {
  children: ReactNode;
}

export function StepButtons({ children, ...others }: Props) {
  const { xs, isLoading } = useMediaQuery();

  if (isLoading) return null;

  return (
    <Group mt={'xl'} justify={'center'} gap={xs ? 40 : 20} {...others}>
      {children}
    </Group>
  );
}
