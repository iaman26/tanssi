import { InnerCard } from '@/components/AppchainCard/InnerCard';
import { CopyIcon } from '@/components/CopyIcon';
import { OffsiteLink } from '@/components/OffsiteLink';
import { ChainConfig } from '@/config';
import {
  useAppchainApi,
  useAppchainSudoKey,
  useAppchainVersion,
} from '@/hooks/polkadot/appchain';
import { useFilesLinkAsZip } from '@/hooks/useFilesLinkAsZip';
import { ellipsis } from '@/utils/address';
import {
  Anchor,
  Box,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

interface Props {
  paraId: number;
  config: ChainConfig;
  isEvm: boolean | undefined;
  tokenSymbol: string | undefined;
  chainId: number | undefined;
}

export function Properties({
  paraId,
  isEvm,
  chainId,
  tokenSymbol,
  config,
}: Props) {
  const theme = useMantineTheme();
  const link = useFilesLinkAsZip(paraId, config.key);
  const sudoKey = useAppchainSudoKey(paraId, config);
  const api = useAppchainApi(paraId, config);
  const runtimeVersion = useAppchainVersion(paraId, config);

  return (
    <InnerCard style={{ flex: 1 }}>
      <Group justify={'space-between'}>
        <Title order={4} size={14} c={'white'}>
          {'Properties'}
        </Title>
      </Group>

      <Box mt={15}>
        <Group align={'start'} display={api ? 'flex' : 'block'} gap={0}>
          <Box w={{ base: 'auto', xs: '40%' }} mr={'xs'}>
            <Text c={'gray.5'} size={'sm'}>
              {'Type: '}
              <Text span size={'sm'}>
                {`${isEvm ? 'EVM' : 'Substrate'}-${
                  config.displayName
                } Appchain`}
              </Text>
            </Text>
            <Text c={'gray.5'} size={'sm'}>
              {'Appchain ID: '}
              <Text span size={'sm'}>
                {paraId}
              </Text>
            </Text>
            {!!chainId && (
              <Text c={'gray.5'} size={'sm'}>
                {'EVM Chain ID: '}
                <Text span size={'sm'}>
                  {chainId}
                </Text>
              </Text>
            )}
            {tokenSymbol && (
              <Text c={'gray.5'} size={'sm'}>
                {'Token Symbol: '}
                <Text span size={'sm'}>
                  {tokenSymbol}
                </Text>
              </Text>
            )}
          </Box>

          <Box w={{ base: 'auto', xs: '55%' }}>
            <Text c={'gray.5'} size={'sm'}>
              {'Relay Chain: '}
              <Text span size={'sm'}>
                {config.relay.name}
              </Text>
            </Text>
            {!!runtimeVersion && (
              <Text c={'gray.5'} size={'sm'}>
                {'Runtime: '}
                <OffsiteLink
                  label={runtimeVersion.toString()}
                  c={'white'}
                  iconColor={theme.other.colors.orange}
                  iconSize={16}
                  size={'sm'}
                  url={`https://github.com/moondance-labs/tanssi/tree/runtime-${runtimeVersion}`}
                  td={'none'}
                />
              </Text>
            )}
            {!!sudoKey && (
              <Group gap={5}>
                <Text c={'gray.5'} size={'sm'}>
                  {'Sudo Address: '}
                </Text>
                <Text span size={'sm'}>
                  {ellipsis(sudoKey, 6, 6)}
                </Text>
                <CopyIcon
                  value={sudoKey}
                  size={16}
                  color={theme.other.colors.orange}
                />
              </Group>
            )}
            {link && (
              <Group gap={5}>
                <Text c={'gray.5'} size={'sm'}>
                  {'Chain Spec: '}
                </Text>
                <Anchor href={link} download={'appchain-data.zip'} td={'none'}>
                  <Group w={'100%'} align={'center'} gap={5}>
                    <Text size={'sm'}>{'Appchain Data'}</Text>
                    <Stack justify={'center'}>
                      <IconDownload
                        size={16}
                        stroke={1.5}
                        color={theme.other.colors.orange}
                      />
                    </Stack>
                  </Group>
                </Anchor>
              </Group>
            )}
          </Box>
        </Group>
      </Box>
    </InnerCard>
  );
}
