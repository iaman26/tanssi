import {
  useHrmpChannels,
  useHrmpCloseChannel,
  useInvalidateHrmpChannels,
} from '@/hooks/polkadot/xcm';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box, Button, Stack, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useManageAppchainState } from '../../ManageAppchain/state';
import { EmptyResults } from './EmptyResults';
import { HrmpChannelRow } from './HrmpChannelRow';

export function HrmpEstablishedChannels() {
  const { paraId, config } = useManageAppchainState();
  const { data: channels } = useHrmpChannels(config?.relay, paraId);
  const invalidate = useInvalidateHrmpChannels();
  const { isLoading, send } = useHrmpCloseChannel(paraId, config, {
    onSuccess: () => invalidate(),
  });
  const { lg } = useMediaQuery();
  const [active, setActive] = useState(0);

  if (!paraId) {
    return null;
  }

  return (
    <Box>
      <Text mb={'xs'}>{'Established Channels'}</Text>
      <Stack>
        {channels?.length ? (
          channels.map(({ sender, recipient }, index) => (
            <HrmpChannelRow
              key={`${sender}-${recipient}`}
              sender={paraId}
              recipient={sender === paraId ? recipient : sender}
              icon={
                sender === paraId ? (
                  <IconArrowRight size={20} />
                ) : (
                  <IconArrowLeft size={20} />
                )
              }
              rightSection={
                <Button
                  w={lg ? 105 : undefined}
                  color={'dark.6'}
                  style={{ border: '1px solid var(--mantine-color-8)' }}
                  loading={isLoading && active === index}
                  disabled={isLoading && active !== index}
                  onClick={() => {
                    setActive(index);
                    send(sender, recipient);
                  }}
                >
                  {lg ? 'Close' : <IoClose size={20} />}
                </Button>
              }
            />
          ))
        ) : (
          <EmptyResults>{'No channels'}</EmptyResults>
        )}
      </Stack>
    </Box>
  );
}
