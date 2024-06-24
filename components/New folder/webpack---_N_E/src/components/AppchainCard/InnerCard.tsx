import { Paper, PaperProps } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends PaperProps {
  children: ReactNode;
}

export function InnerCard({ children, ...others }: Props) {
  return (
    <Paper
      p={'lg'}
      bg={'dark.8'}
      {...others}
      style={{
        ...others.style,
      }}
    >
      {children}
    </Paper>
  );
}
