import { Button, ButtonProps } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { ReactNode } from 'react';

export interface Props extends ButtonProps {
  children?: ReactNode;
  onClick: () => void;
}

export function AddButton({ children, ...other }: Props) {
  return (
    <Button
      variant={'light'}
      fw={400}
      size={'sm'}
      rightSection={<IconPlus size={15} />}
      styles={{ section: { marginLeft: 5 } }}
      {...other}
    >
      {children}
    </Button>
  );
}
