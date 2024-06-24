import { AppchainCard } from '@/components/AppchainCard';
import { CampaignBanner } from '@/components/CampaignBanner';
import { MainTitle } from '@/components/MainTitle';
import { CaptureFlag } from '@/components/pages/Demo/CaptureFlag';
import { DemoFaucet } from '@/components/pages/Demo/Faucet';
import { DEMO_APPCHAIN_PARA_ID, EXPLORERS, dancebox } from '@/config';
import { Stack, Text } from '@mantine/core';
import { Tooling } from './Tooling';

const explorers = [
  {
    name: 'Blockscout',
    url: 'https://fra-dancebox-3001-bs.a.dancebox.tanssi.network/',
  },
  {
    name: EXPLORERS.polkadotJs.name,
    url: `${EXPLORERS.polkadotJs.url}?rpc=wss://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network`,
  },
];

export function Demo() {
  return (
    <Stack gap={'lg'}>
      <CampaignBanner />
      <MainTitle size={36}>{'Demo Appchain'}</MainTitle>
      <Text>
        {
          'A demo EVM Tanssi Appchain is deployed on Dancebox for testing purposes. Interact with this chain to discover the capabilities of a fully Ethereum-compatible Appchain deployed through Tanssi.'
        }
      </Text>
      <DemoFaucet />
      <CaptureFlag />
      <AppchainCard
        mt={'lg'}
        name={'Tanssi Demo'}
        paraId={DEMO_APPCHAIN_PARA_ID}
        config={dancebox}
        explorers={explorers}
      />

      <Tooling />
    </Stack>
  );
}
