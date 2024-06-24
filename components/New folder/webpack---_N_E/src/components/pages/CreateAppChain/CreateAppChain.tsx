import { CampaignBanner } from '@/components/CampaignBanner';
import { MainTitle } from '@/components/MainTitle';
import { SelectChainCards } from '@/components/SelectChain';
import { Text } from '@mantine/core';

export function CreateAppChain() {
  return (
    <>
      <CampaignBanner />
      <MainTitle>{'Welcome to Dancebox'}</MainTitle>

      <Text>
        {
          "Dancebox is Tanssi's TestNet environment, designed for seamless deployment of appchains."
        }
      </Text>

      <SelectChainCards />
    </>
  );
}
