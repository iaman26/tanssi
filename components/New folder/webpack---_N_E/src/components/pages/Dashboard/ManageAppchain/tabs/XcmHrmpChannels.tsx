import { ActionButton } from '@/components/ActionButton';
import { SelectAppchain } from '@/components/SelectAppchain';
import { SidebarStack } from '@/components/Sidebar';
import {
  useHrmpInitOpenChannel,
  useInvalidateHrmpChannels,
  useOpenableChannels,
} from '@/hooks/polkadot/xcm';
import { Skeleton, Text } from '@mantine/core';
import { useState } from 'react';
import { SudoSidebarWrapper } from '../SudoSidebarWrapper';
import { useManageAppchainState } from '../state';
import { ManageAppchainTab } from '../state/ManageAppchain.constants';

export function XcmHrmpChannels() {
  const { paraId, config } = useManageAppchainState();
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const paraIds = useOpenableChannels(paraId, config?.relay);
  const invalidate = useInvalidateHrmpChannels();
  const { isLoading, send } = useHrmpInitOpenChannel(paraId, config, {
    onSuccess: () => {
      invalidate();
      setSelected(undefined);
    },
  });

  return (
    <SudoSidebarWrapper
      tab={ManageAppchainTab.XcmHrmpChannels}
      goBack={ManageAppchainTab.Xcm}
      goToOnProxyDisconnect={ManageAppchainTab.XcmHrmpChannels}
    >
      <SidebarStack>
        <Text>{'Appchain ID'}</Text>
        <Text size={'xs'} c={'gray.6'}>
          {'In Polkadot, this is also known as Parachain ID'}
        </Text>
        {!!paraIds && !!config ? (
          <SelectAppchain
            selected={selected}
            paraIds={paraIds}
            onSelect={(paraId) => setSelected(paraId)}
          />
        ) : (
          <Skeleton height={50} />
        )}
        <ActionButton
          mt={'xl'}
          withArrow={false}
          isLoading={isLoading}
          disabled={!selected}
          fullWidth
          onClick={() => selected && send(selected)}
        >
          {'Request channel'}
        </ActionButton>
      </SidebarStack>
    </SudoSidebarWrapper>
  );
}
