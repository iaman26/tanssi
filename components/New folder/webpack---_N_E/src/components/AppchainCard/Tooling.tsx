import { CopyIcon } from '@/components/CopyIcon';
import { OffsiteLink } from '@/components/OffsiteLink';
import { AppChainUrls, Explorer } from '@/config';
import { Box, Group, Text, Title, useMantineTheme } from '@mantine/core';
import { InnerCard } from './InnerCard';

interface Props {
  urls: AppChainUrls | undefined;
  explorers?: Explorer[] | undefined;
}

export function Tooling({ urls, explorers }: Props) {
  const theme = useMantineTheme();

  return (
    <InnerCard style={{ flex: 1 }}>
      <Title order={4} size={14} c={'white'}>
        {'Tooling'}
      </Title>

      {urls && (
        <Box mt={15}>
          <Group gap={0} mb={5} align={'center'}>
            <Text c={'gray.5'} size={'sm'} mr={5}>
              {'Explorer:'}
            </Text>
            <Group align={'center'} gap={0}>
              {(explorers || urls.explorers).map(({ name, url }) => (
                <OffsiteLink
                  key={name}
                  label={name}
                  url={url}
                  mr={5}
                  size={'sm'}
                  c={'white'}
                  iconColor={theme.other.colors.orange}
                  iconSize={16}
                  td={'none'}
                />
              ))}
            </Group>
          </Group>

          <Group gap={0} mb={5} align={'center'}>
            <Text c={'gray.5'} size={'sm'} mr={5}>
              {'RPC:'}
            </Text>
            <Group align={'center'} gap={5}>
              <Text size={'sm'}>{urls.rpc} </Text>
              <CopyIcon
                value={urls.rpc}
                size={18}
                color={theme.other.colors.orange}
              />
            </Group>
          </Group>

          <Group gap={0} mb={5} align={'center'}>
            <Text c={'gray.5'} size={'sm'} mr={5}>
              {'WS:'}
            </Text>
            <Group align={'center'} gap={5}>
              <Text size={'sm'}>{urls.ws} </Text>
              <CopyIcon
                value={urls.ws}
                size={18}
                color={theme.other.colors.orange}
              />
            </Group>
          </Group>
        </Box>
      )}
    </InnerCard>
  );
}
