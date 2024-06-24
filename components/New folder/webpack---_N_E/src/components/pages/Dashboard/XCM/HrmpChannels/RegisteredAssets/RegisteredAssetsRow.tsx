import { AssetLogo } from '@/components/AssetLogo';
import { CollapseIcon } from '@/components/CollapseIcon';
import { CopyIcon } from '@/components/CopyIcon';
import { ForeignAsset } from '@/hooks/polkadot/xcm/queries/useForeignAssets';
import { useFormatValue } from '@/hooks/useFormatValue';
import { ellipsis } from '@/utils/address';
import {
  Collapse,
  Grid,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { toDecimal } from '@moonbeam-network/xcm-utils';

export interface Props {
  asset: ForeignAsset;
}

export function RegisteredAssetsRow({ asset }: Props) {
  const [isOpen, { toggle }] = useDisclosure(false);
  const supply = useFormatValue(toDecimal(asset.supply, asset.decimals));

  return (
    <Stack gap={0} bg={'dark.6'} style={{ borderRadius: 12 }}>
      <Grid
        role={'row'}
        p={10}
        gutter={'xs'}
        bg={'dark.8'}
        align={'center'}
        style={{ borderRadius: 12 }}
      >
        <Grid.Col span={2}>
          <Group gap={'xs'}>
            <AssetLogo assetKey={asset.symbol.toLowerCase()} size={30} />
            <Text>{asset.name}</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={2}>
          <Text ta={'center'}>{asset.symbol}</Text>
        </Grid.Col>
        <Grid.Col span={2.5}>
          <Text ta={'center'}>{asset.id.toString()}</Text>
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>{supply}</Text>
        </Grid.Col>
        <Grid.Col span={2} ta={'center'}>
          <Text>{asset.paraId || '-'}</Text>
        </Grid.Col>
        <Grid.Col span={0.5}>
          <UnstyledButton onMouseDown={toggle}>
            <CollapseIcon isOpen={isOpen} />
          </UnstyledButton>
        </Grid.Col>
      </Grid>

      <Collapse in={isOpen}>
        <Group h={50} pl={'md'} gap={48}>
          <Group gap={2}>
            <Text size={'sm'} mr={4} c={'gray.6'}>
              {'Owner: '}
            </Text>
            <Text size={'sm'}>{ellipsis(asset.owner, 4, 8)}</Text>
            <CopyIcon value={asset.owner} c={'white'} size={16} />
          </Group>
          <Group gap={2}>
            <Text size={'sm'} mr={4} c={'gray.6'}>
              {'Admin: '}
            </Text>
            <Text size={'sm'}>{ellipsis(asset.admin, 4, 8)}</Text>
            <CopyIcon value={asset.admin} c={'white'} size={16} />
          </Group>
          {/* Disabled because is not ready! Please read a comment in useDestroyAsset.ts */}
          {/* <Button */}
          {/*   size={'sm'} */}
          {/*   variant="transparent" */}
          {/*   rightSection={<IconTrash size={14} />} */}
          {/*   ml={'auto'} */}
          {/*   loading={isLoading} */}
          {/*   disabled={isDisabled} */}
          {/*   onClick={isLive ? onStart : onFinish} */}
          {/* > */}
          {/*   {isLive ? 'Start deleting asset' : 'Finish deleting asset'} */}
          {/* </Button> */}
        </Group>
      </Collapse>
    </Stack>
  );
}
