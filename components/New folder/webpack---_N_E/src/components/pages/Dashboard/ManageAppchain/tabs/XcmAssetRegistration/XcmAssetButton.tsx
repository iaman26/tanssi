import { AssetLogo } from '@/components/AssetLogo';
import { Checkbox, Group, Text, UnstyledButton } from '@mantine/core';
import { Asset } from '@moonbeam-network/xcm-types';
import classes from './XcmAssetButton.module.css';

export interface Props {
  asset: Asset;
  name?: string;
  isChecked: boolean;
  onClick?: () => void;
}

export function XcmAssetButton({ asset, name, isChecked, onClick }: Props) {
  return (
    <UnstyledButton className={classes.button} onClick={onClick}>
      <Group gap={'xs'} align="center" wrap="nowrap">
        <AssetLogo assetKey={asset.key} size={24} />
        <Text size={'sm'}>{name || asset.originSymbol}</Text>
        <Checkbox ml={'auto'} checked={isChecked} onChange={() => undefined} />
      </Group>
    </UnstyledButton>
  );
}
