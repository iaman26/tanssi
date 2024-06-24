import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useAddress, useConnect } from '@/state/user';
import { ellipsis } from '@/utils/address';
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconChevronDown, IconWallet } from '@tabler/icons-react';
import { ConnectWalletModal } from './ConnectWalletModal/ConnectWalletModal';

export function ConnectWallet() {
  const address = useAddress();
  const { xs } = useMediaQuery();
  const { isConnecting } = useConnect();

  const connectWalletText = xs ? 'Connect Wallet' : 'Connect';
  const buttonText = address
    ? ellipsis(address, xs ? 5 : 3, xs ? 5 : 0)
    : connectWalletText;

  const onClick = () =>
    modals.open({
      children: <ConnectWalletModal />,
      size: 400,
      withCloseButton: false,
    });

  return (
    <Button
      px={{ base: 'sm', sm: 'lg' }}
      h={40}
      leftSection={<IconWallet size={20} stroke={1.5} />}
      rightSection={<IconChevronDown size={16} />}
      onClick={onClick}
      disabled={isConnecting}
      data-testid={'connect-wallet-button'}
    >
      {buttonText}
    </Button>
  );
}
