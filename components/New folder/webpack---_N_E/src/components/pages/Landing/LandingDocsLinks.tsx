'use client';

import { DocsLink } from '@/components/DocsLink';
import appchainsIcon from '@/images/icons/appchains-icon.svg';
import demoIcon from '@/images/icons/demo-icon.svg';
import docsIcon from '@/images/icons/docs-icon.svg';
import quickIcon from '@/images/icons/quick-guide-icon.svg';
import { Grid, Group } from '@mantine/core';

export function LandingDocsLinks() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <Group grow>
          <DocsLink
            title={'Docs'}
            url={'https://docs.tanssi.network/'}
            icon={docsIcon}
          />
        </Group>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <Group grow>
          <DocsLink
            title={'Quick Guide'}
            url={
              'https://docs.tanssi.network/builders/deploy-manage/dapp/deploy/'
            }
            icon={quickIcon}
          />
        </Group>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <Group grow>
          <DocsLink
            title={'Ecosystem Appchains'}
            url={'https://dashboard.tanssi-chains.network/'}
            icon={appchainsIcon}
          />
        </Group>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <Group grow>
          <DocsLink
            title={'Demo Appchain'}
            url={`${window.location.origin}/demo/`}
            icon={demoIcon}
          />
        </Group>
      </Grid.Col>
    </Grid>
  );
}
