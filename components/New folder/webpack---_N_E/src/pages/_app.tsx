import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';

import '@/global.css';

import '@preact/signals-react/auto';

import { Providers } from '@/Providers';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Nav } from '@/components/Nav';
import { Sidebar } from '@/components/Sidebar';
import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { TermsContent } from '@/components/TermsContent';
import { useCreateAppchainProtectedKey } from '@/components/pages/CreateAppChain/state/create.hooks';
import { isProd } from '@/config';
import { useResetState } from '@/hooks/useResetState';
import { useChainKey, useValidateChainKeyParam } from '@/state/chain';
import { useIdleState } from '@/state/idle/idle.hooks';
import { useTerms } from '@/state/terms/terms.hooks';
import { trpc } from '@/utils/trpc';
import { AppShell, Center, Loader } from '@mantine/core';
import { useDisclosure, useTimeout } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { Suspense, useEffect } from 'react';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isLoading, { close }] = useDisclosure(true);
  const [opened, { toggle }] = useDisclosure();
  const key = useChainKey();
  const { areTermsAccepted, accept } = useTerms();
  const { isIdle } = useIdleState();
  const { sidebar, sidebarWidth, close: closeSidebar } = useSidebar();

  useResetState();
  useTimeout(() => close(), 700, { autoInvoke: true });
  useValidateChainKeyParam();
  useCreateAppchainProtectedKey();

  useEffect(() => {
    if (isIdle) {
      modals.openContextModal({
        modal: 'idle',
        title: 'Session Timeout',
        innerProps: {
          description:
            'Your session is timed out, reload the page to continue.',
        },
        closeOnEscape: false,
        closeOnClickOutside: false,
        withCloseButton: false,
      });
    }
  }, [isIdle]);

  useEffect(() => {
    if (!isLoading && !areTermsAccepted) {
      modals.openConfirmModal({
        title: 'Terms & Conditions',
        children: <TermsContent />,
        labels: {
          confirm: 'Accept',
          cancel: 'Decline',
        },
        size: 'xl',
        centered: false,
        closeOnCancel: false,
        closeOnEscape: false,
        closeOnClickOutside: false,
        withCloseButton: false,
        onConfirm: accept,
        styles: {
          title: {
            width: '100%',
            textAlign: 'center',
          },
        },
        onCancel: () => {
          window.location.href = 'https://tanssi.network';
        },
      });
    }
  }, [accept, areTermsAccepted, isLoading]);

  return (
    <>
      <Head>
        <title>{'Tanssi Network'}</title>
        <meta
          name={'viewport'}
          content={'minimum-scale=1, initial-scale=1, width=device-width'}
        />
      </Head>
      {isProd && (
        <Script
          defer
          data-domain={'apps.tanssi.network'}
          src={'https://plausible.io/js/script.js'}
        />
      )}
      <Providers session={session}>
        {isLoading ? (
          <Center mih={'100vh'}>
            <Loader size={50} />
          </Center>
        ) : (
          <Suspense fallback={<></>}>
            <AppShell
              layout={'alt'}
              withBorder={false}
              navbar={{
                width: 252,
                breakpoint: 'md',
                collapsed: { mobile: !opened },
              }}
              header={{
                height: 'var(--header-height)',
              }}
            >
              <Nav opened={opened} toggle={toggle} />
              <Header right={sidebarWidth} opened={opened} toggle={toggle} />
              <Main pr={sidebarWidth}>
                <Component key={key} {...pageProps} />
              </Main>

              {sidebar && <Sidebar close={closeSidebar}>{sidebar}</Sidebar>}
            </AppShell>
          </Suspense>
        )}
      </Providers>
    </>
  );
}

export default trpc.withTRPC(App);
