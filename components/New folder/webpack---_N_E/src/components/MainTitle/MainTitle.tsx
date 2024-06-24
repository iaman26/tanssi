import { Title, TitleProps } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends TitleProps {
  children?: ReactNode;
}

export function MainTitle({ children, ...others }: Props) {
  return (
    <Title
      size={64}
      fw={500}
      c={'white'}
      {...others}
      style={{ ...others.style, fontFamily: 'Kilimanjaro, sans-serif' }}
    >
      {children}
    </Title>
  );
}
