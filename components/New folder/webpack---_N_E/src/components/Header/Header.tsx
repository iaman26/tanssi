import { ConnectWallet } from '@/components/ConnectWallet';
import { SelectChainDropdown } from '@/components/SelectChain';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { AppShell, AppShellHeaderProps, Burger, Group } from '@mantine/core';
import { useRouter } from 'next/router';

interface Props extends AppShellHeaderProps {
  width?: string;
  opened: boolean;
  toggle: () => void;
}

export function Header({ right, opened, toggle }: Props) {
  const router = useRouter();
  const { md } = useMediaQuery();

  return (
    <AppShell.Header
      h={'var(--header-height)'}
      right={right}
      withBorder={md === false}
      px={'lg'}
      bg={'dark.9'}
    >
      <Group
        justify={'space-between'}
        align={'center'}
        wrap={'nowrap'}
        h={'100%'}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom={'md'} />
        <Group justify={'end'} gap={'md'} h={'100%'} w={'100%'}>
          {router.pathname === '/' && <SelectChainDropdown />}
          <ConnectWallet />
        </Group>
      </Group>
    </AppShell.Header>
  );
}
