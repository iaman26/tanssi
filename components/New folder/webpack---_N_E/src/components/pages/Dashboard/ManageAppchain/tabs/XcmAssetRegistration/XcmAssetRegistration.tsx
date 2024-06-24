import { ActionButton } from '@/components/ActionButton';
import { SidebarStack } from '@/components/Sidebar';
import {
  useNotRegisteredForeignAssets,
  useRegisterForeignAssets,
} from '@/hooks/polkadot/xcm';
import { Group, Text } from '@mantine/core';
import { useMemo, useState } from 'react';
import { EmptyResults } from '../../../XCM/HrmpChannels/EmptyResults';
import { SudoSidebarWrapper } from '../../SudoSidebarWrapper';
import { useManageAppchainState } from '../../state';
import { ManageAppchainTab } from '../../state/ManageAppchain.constants';
import { XcmAssetButton } from './XcmAssetButton';

export function XcmAssetRegistration() {
  const { paraId, config } = useManageAppchainState();
  const assets = useNotRegisteredForeignAssets(paraId, config);
  const [selected, setSelected] = useState<string[]>([]);
  const { isLoading, send } = useRegisterForeignAssets(paraId, config);

  const selectedAssets = useMemo(
    () => assets?.filter(({ asset }) => selected.includes(asset.key)),
    [assets, selected],
  );

  function toggleAsset(assetKey: string) {
    setSelected((prev) =>
      prev.includes(assetKey)
        ? prev.filter((key) => key !== assetKey)
        : [...prev, assetKey],
    );
  }

  return (
    <SudoSidebarWrapper
      tab={ManageAppchainTab.XcmAssetRegistration}
      goBack={ManageAppchainTab.Xcm}
      goToOnProxyDisconnect={ManageAppchainTab.XcmAssetRegistration}
    >
      <SidebarStack>
        <Text size="xs">Assets</Text>
        {assets?.length ? (
          assets.map((asset) => (
            <XcmAssetButton
              key={asset.asset.key}
              asset={asset.asset}
              isChecked={selected.includes(asset.asset.key)}
              onClick={() => toggleAsset(asset.asset.key)}
            />
          ))
        ) : (
          <EmptyResults>{'No assets available'}</EmptyResults>
        )}
        <Group gap={0}>
          <Text size="xs" w={15}>
            {selected.length}
          </Text>
          <Text size="xs" c={'gray.6'}>
            {'Assets selected:'}
          </Text>
        </Group>
        {selectedAssets && (
          <Text size="sm">
            {selectedAssets.map(({ asset }) => asset.originSymbol).join(', ')}
          </Text>
        )}
        <ActionButton
          mt={'xl'}
          withArrow={false}
          isLoading={isLoading}
          disabled={!selected.length}
          fullWidth
          onClick={() => selectedAssets?.length && send(selectedAssets)}
        >
          {'Register'}
        </ActionButton>
      </SidebarStack>
    </SudoSidebarWrapper>
  );
}
