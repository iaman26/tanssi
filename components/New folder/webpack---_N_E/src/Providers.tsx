import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { useFlagsmithState } from '@/hooks/useFlagsmithState';
import { resolver, theme } from '@/theme';

import { env } from '@/env.mjs';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import flagsmith from 'flagsmith/isomorphic';
import { FlagsmithProvider } from 'flagsmith/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { IdleModal } from './components/Modals';
import { rainbowkitTheme, wagmiConfig } from './rainbowkit';

export interface Props {
  children: ReactNode;
  session: Session | null;
}

export function Providers({ children, session }: Props) {
  const flagsmithState = useFlagsmithState();
  const { sidebar } = useSidebar();

  return (
    <>
      {env.NEXT_PUBLIC_DEPLOYMENT === 'local' && <ReactQueryDevtools />}
      <WagmiProvider config={wagmiConfig}>
        <RainbowKitProvider theme={rainbowkitTheme}>
          <FlagsmithProvider serverState={flagsmithState} flagsmith={flagsmith}>
            <SessionProvider session={session}>
              <MantineProvider
                theme={theme}
                cssVariablesResolver={resolver}
                defaultColorScheme={'dark'}
              >
                <ModalsProvider modals={{ idle: IdleModal }}>
                  <NavigationProgress stepInterval={1000} />
                  <Notifications
                    position={'bottom-right'}
                    autoClose={20000}
                    styles={{
                      notification: {
                        backgroundColor: 'var(--mantine-color-dark-6)',
                        right: sidebar ? 320 : 0,
                      },
                    }}
                  />
                  {children}
                </ModalsProvider>
              </MantineProvider>
            </SessionProvider>
          </FlagsmithProvider>
        </RainbowKitProvider>
      </WagmiProvider>
    </>
  );
}
