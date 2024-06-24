import { CampaignBanner } from '@/components/CampaignBanner';
import { OffsiteLink } from '@/components/OffsiteLink';
import { ConnectedAccountProxy } from '@/components/Proxy/ConnectedAccountProxy';
import { Collators } from '@/components/pages/Staking/Collators/Collators';
import { MyCollators } from '@/components/pages/Staking/Collators/MyCollators';
import { Portfolio } from '@/components/pages/Staking/Portfolio';
import { ChainConfigProps, dancebox } from '@/config';
import { useIsProxyEnabledFlag } from '@/hooks/flags/useIsProxyEnabledFlag';
import { useIsStakingEnabledFlag } from '@/hooks/flags/useIsStakingEnabledFlag';
import { Group, Text, Title } from '@mantine/core';
import { PendingOperations } from './PendingOperations';

interface Props extends ChainConfigProps {}

export function Staking({ config }: Props) {
  const { isLoading, isEnabled } = useIsStakingEnabledFlag();
  const { isEnabled: isProxyEnabled } = useIsProxyEnabledFlag();

  if (!isLoading && !isEnabled) {
    return null;
  }

  return (
    <>
      <CampaignBanner isLong />
      <Title mb={'xs'} c={'white'} fw={500} size={36}>
        {'Staking'}
      </Title>

      <Group justify={'space-between'} h={40}>
        {config.key === dancebox.key && (
          <Text mb={'lg'}>
            {`Get your ${config.asset.originSymbol} tokens from our `}
            <OffsiteLink
              size={'md'}
              label={`${config.name} Faucet`}
              url={
                'https://airlyft.one/tanssinetwork/get-dance-tokens-1711459496483'
              }
              withIcon={false}
            />
            {` to start Staking.`}
          </Text>
        )}

        {isProxyEnabled && (
          <ConnectedAccountProxy proxyType={'Staking'} config={config} />
        )}
      </Group>

      <Portfolio config={config} />
      <PendingOperations config={config} />
      <MyCollators config={config} />
      <Collators config={config} />
    </>
  );
}
