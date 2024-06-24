import { useBlockStageboxInProd } from '@/hooks/useBlockStageboxInProd';
import { AppShell, AppShellMainProps, Group, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface Props extends AppShellMainProps {
  children: ReactNode;
}

export function Main({ pr, children }: Props) {
  const router = useRouter();

  useBlockStageboxInProd();

  return (
    <AppShell.Main pr={pr}>
      <Group
        mah={'calc(100vh - var(--header-height))'}
        style={{ flex: 1, overflowY: 'auto' }}
      >
        <Stack
          px={{ base: 'md', md: 'xl' }}
          py={20}
          mx={'auto'}
          miw={300}
          maw={router.route === '/staking' ? 1400 : 1100}
          gap={0}
          w={'100%'}
        >
          {children}
        </Stack>
      </Group>
    </AppShell.Main>
  );
}
