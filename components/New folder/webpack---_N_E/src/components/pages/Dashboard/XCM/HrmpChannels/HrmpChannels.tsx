import { ActionButton } from '@/components/ActionButton';
import { CopyIcon } from '@/components/CopyIcon';
import { TokenAmount } from '@/components/TokenAmount';
import { useAppchainName } from '@/hooks/polkadot/appchain';
import { useFreeBalance } from '@/hooks/polkadot/common';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useRelaySovereignAddress } from '@/hooks/useRelaySovereignAddress';
import { ellipsis } from '@/utils/address';
import { Box, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import {
  useManageAppchainState,
  useSetActiveTab,
} from '../../ManageAppchain/state';
import { ManageAppchainTab } from '../../ManageAppchain/state/ManageAppchain.constants';
import classes from './HrmpChannels.module.css';
import { HrmpEstablishedChannels } from './HrmpEstablishedChannels';
import { HrmpIncomingChannels } from './HrmpIncomingChannels';
import { HrmpOutgoingChannels } from './HrmpOutgoingChannels';
import { RegisteredAssets } from './RegisteredAssets';

export function HrmpChannels() {
  const theme = useMantineTheme();
  const setActiveTab = useSetActiveTab();
  const { paraId, config } = useManageAppchainState();
  const name = useAppchainName(paraId, config);
  const sovereignAddress = useRelaySovereignAddress(paraId);
  const sovereignBalance = useFreeBalance(sovereignAddress, config?.relay);
  const { lg } = useMediaQuery();

  return (
    <Stack mr={!lg ? 320 : 0}>
      <Title bg={'dark.9'} order={1} size={24} c={'white'}>
        {'XCM'}
        {name ? `: ${name}` : ''}
      </Title>
      <Box>
        <Text mb={'xs'}>{'Sovereign Account'}</Text>
        <Group className={classes.row} gap={0}>
          <Group gap={2}>
            <Text mr={4} c={'gray.6'}>
              {'Account Balance: '}
            </Text>
            <TokenAmount amount={sovereignBalance} size="md" />
          </Group>
          <Group ml={lg ? 115 : 0} gap={2}>
            <Text mr={4} c={'gray.6'}>
              {'Account Address: '}
            </Text>
            <Text>{ellipsis(sovereignAddress, 4, 8)}</Text>
            <CopyIcon
              value={sovereignAddress}
              c={theme.other.colors.orange}
              size={16}
            />
          </Group>
          <ActionButton
            ml={'auto'}
            miw={105}
            withArrow={false}
            onClick={() => setActiveTab(ManageAppchainTab.XcmHrmpDeposit)}
          >
            {'Deposit'}
          </ActionButton>
        </Group>
      </Box>
      <HrmpOutgoingChannels />
      <HrmpIncomingChannels />
      <HrmpEstablishedChannels />
      <RegisteredAssets />
    </Stack>
  );
}
