import { Button, ButtonProps } from '@mantine/core';
import { IconChevronDown, IconWallet } from '@tabler/icons-react';

export interface Props extends ButtonProps {
  onClick: () => void;
}

export function ConnectEvmButton({ children, onClick, ...other }: Props) {
  return (
    <Button
      miw={{ base: '100%', xs: 'auto' }}
      size={'lg'}
      leftSection={<IconWallet size={20} stroke={1.5} />}
      rightSection={<IconChevronDown size={16} />}
      onClick={onClick}
      data-testid={'connect-evm-wallet-button'}
      {...other}
    >
      {children}
    </Button>
  );
}
