import { AppchainInfo } from '@/components/AppchainInfo';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box, Group } from '@mantine/core';
import { useManageAppchainState } from '../../ManageAppchain/state';
import classes from './HrmpChannels.module.css';

export interface Props {
  sender: number;
  recipient: number;
  icon: React.ReactNode;
  rightSection: React.ReactNode;
}

export function HrmpChannelRow({
  sender,
  recipient,
  icon,
  rightSection,
}: Props) {
  const { config } = useManageAppchainState();
  const { lg } = useMediaQuery();

  return (
    <Group className={classes.row} role={'row'} justify={'space-between'}>
      <Group gap={lg ? 85 : 20} wrap="nowrap">
        <AppchainInfo paraId={sender} config={config} withName={lg} />
        <Box>{icon}</Box>
        <AppchainInfo
          paraId={recipient}
          config={config}
          variant={'blue'}
          withName={lg}
        />
      </Group>
      {rightSection}
    </Group>
  );
}
