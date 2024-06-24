import { ActionButton } from '@/components/ActionButton';
import {
  useHrmpAcceptChannel,
  useHrmpCancelOpenChannelRequest,
  useHrmpIncomingChannels,
  useInvalidateHrmpChannels,
} from '@/hooks/polkadot/xcm';
import { Box, Button, Group, Stack, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';
import { useManageAppchainState } from '../../ManageAppchain/state';
import { HrmpChannelRow } from './HrmpChannelRow';

export function HrmpIncomingChannels() {
  const { paraId, config } = useManageAppchainState();
  const channels = useHrmpIncomingChannels(paraId, config?.relay);
  const invalidate = useInvalidateHrmpChannels();
  const { isLoading, send } = useHrmpAcceptChannel(paraId, config, {
    onSuccess: () => invalidate(),
  });
  const { isLoading: isLoadingCancel, send: sendCancel } =
    useHrmpCancelOpenChannelRequest(paraId, config);
  const [active, setActive] = useState(0);

  if (!channels?.length) {
    return null;
  }

  return (
    <Box>
      <Text mb={'xs'}>{'Incoming Channel Requests'}</Text>
      <Stack>
        {channels.map(({ sender, recipient }, index) => (
          <HrmpChannelRow
            key={`${sender}-${recipient}`}
            sender={recipient}
            recipient={sender}
            icon={<IconArrowLeft size={20} />}
            rightSection={
              <Group gap={'xs'}>
                <Button
                  miw={105}
                  color={'dark.6'}
                  style={{ border: '1px solid var(--mantine-color-8)' }}
                  loading={isLoadingCancel && active === index}
                  disabled={isLoading || (isLoadingCancel && active !== index)}
                  onClick={() => {
                    setActive(index);
                    sendCancel(sender, recipient);
                  }}
                >
                  {'Reject'}
                </Button>
                <ActionButton
                  miw={105}
                  withArrow={false}
                  loading={isLoading && active === index}
                  disabled={isLoadingCancel || (isLoading && active !== index)}
                  onClick={() => {
                    setActive(index);
                    send(sender);
                  }}
                >
                  {'Accept'}
                </ActionButton>
              </Group>
            }
          />
        ))}
      </Stack>
    </Box>
  );
}
