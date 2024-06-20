import {
    AppchainIdenticon,
    Props as IdenticonProps,
  } from '@/components/AppchainIdenticon';
  import { ChainConfig } from '@/config';
  import { useAppchainName } from '@/hooks/polkadot/appchain';
  import { Group, Text, useMantineTheme } from '@mantine/core';
  import { FadeOutText } from '../FadeOutText';
  
  export interface Props {
    paraId: number | undefined;
    config: ChainConfig | undefined;
    identiconProps?: Partial<IdenticonProps>;
    variant?: 'yellow' | 'blue';
    withName?: boolean;
  }
  
  export function AppchainInfo({
    paraId,
    config,
    identiconProps,
    variant = 'yellow',
    withName = true,
  }: Props) {
    const theme = useMantineTheme();
    const name = useAppchainName(paraId, config);
  
    if (!paraId) {
      return null;
    }
  
    const displayname =
      paraId === config?.parachainId
        ? config.name
        : paraId === config?.relay.parachainId
          ? config.relay.name
          : name || 'Appchain';
  
    return (
      <Group gap={'xs'}>
        <AppchainIdenticon paraId={paraId} {...identiconProps} />
        {withName && (
          <FadeOutText maxWidth={180}>
            <Text
              size={'sm'}
              fw={500}
              c={
                variant === 'yellow'
                  ? theme.other.colors.orange
                  : theme.colors.tanssiTeal[9]
              }
            >
              {displayname}:
            </Text>
          </FadeOutText>
        )}
        <Text size={'sm'}>{paraId}</Text>
      </Group>
    );
  }
  