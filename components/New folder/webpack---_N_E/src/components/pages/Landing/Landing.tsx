import { CampaignBanner } from '@/components/CampaignBanner';
import { MainTitle } from '@/components/MainTitle';
import { SelectChainCards } from '@/components/SelectChain';
import { Stack, Text } from '@mantine/core';
import { LandingDocsLinks } from './LandingDocsLinks';

export function Landing() {
  return (
    <>
      <CampaignBanner />
      <MainTitle>{'Welcome to Dancebox'}</MainTitle>
      <Text>
        {
          "Dancebox is Tanssi's TestNet environment, designed for seamless deployment of appchains"
        }
      </Text>
      <Stack>
        <SelectChainCards />
        <LandingDocsLinks />
      </Stack>
    </>
  );
}
