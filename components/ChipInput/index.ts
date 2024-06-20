import { Chip, ChipProps } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './ChipInput.module.css';

interface Props extends ChipProps {
  children: ReactNode;
}

export function ChipInput({ children, ...other }: Props) {
  return (
    <Chip
      classNames={{ label: classes.label, root: classes.root }}
      styles={{
        iconWrapper: { display: 'none' },
      }}
      {...other}
    >
      {children}
    </Chip>
  );
}
