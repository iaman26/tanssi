import {
  useHrmpCancelOpenChannelRequest,
  useHrmpOutgoingChannels,
} from '@/hooks/polkadot/xcm';
import {
  Box,
  Button,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';
import { useManageAppchainState } from '../../ManageAppchain/state';
import { HrmpChannelRow } from './HrmpChannelRow';

export function HrmpOutgoingChannels() {
  const theme = useMantineTheme();
  const { paraId, config } = useManageAppchainState();
  const channels = useHrmpOutgoingChannels(paraId, config?.relay);
  const { isLoading, send } = useHrmpCancelOpenChannelRequest(paraId, config);
  const [active, setActive] = useState(0);

  if (!channels?.length) {
    return null;
  }

  return (
    <Box>
      <Text mb={'xs'}>{'Outgoing Channel Requests'}</Text>
      <Stack>
        {channels.map(({ sender, recipient }, index) => (
          <HrmpChannelRow
            key={`${sender}-${recipient}`}
            sender={sender}
            recipient={recipient}
            icon={<IconArrowRight size={20} />}
            rightSection={
              <Group gap={'xs'}>
                <Group gap={'xs'}>
                  <Box
                    w={12}
                    h={12}
                    style={{ borderRadius: '50%' }}
                    bg={theme.other.colors.orange}
                  />
                  <Text size={'sm'}>{'Pending'}</Text>
                </Group>
                <Button
                  miw={105}
                  color={'dark.6'}
                  style={{ border: '1px solid var(--mantine-color-8)' }}
                  loading={isLoading && active === index}
                  disabled={isLoading && active !== index}
                  onClick={() => {
                    setActive(index);
                    send(sender, recipient);
                  }}
                >
                  {'Cancel'}
                </Button>
              </Group>
            }
          />
        ))}
      </Stack>
    </Box>
  );
}
