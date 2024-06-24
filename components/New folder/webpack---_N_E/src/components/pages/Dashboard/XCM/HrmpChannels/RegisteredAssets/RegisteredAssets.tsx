import { CollapseIcon } from '@/components/CollapseIcon';
import { useForeignAssets } from '@/hooks/polkadot/xcm';
import {
  Box,
  Collapse,
  Grid,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useManageAppchainState } from '../../../ManageAppchain/state';
import { EmptyResults } from '../EmptyResults';
import { RegisteredAssetsRow } from './RegisteredAssetsRow';

export function RegisteredAssets() {
  const { paraId, config } = useManageAppchainState();
  const [isOpen, { toggle }] = useDisclosure(true);
  const assets = useForeignAssets(paraId, config);

  return (
    <Box>
      <UnstyledButton onMouseDown={toggle}>
        <Group gap={'xs'}>
          <Text>{'Registered Assets'}</Text>
          <CollapseIcon isOpen={isOpen} />
        </Group>
      </UnstyledButton>
      <Collapse in={isOpen}>
        <Stack mt={'lg'} gap={'xs'}>
          <Grid role={'row'} px={'md'} gutter={'xs'}>
            <Grid.Col span={2}>
              <Text c={'gray.6'}>Name</Text>
            </Grid.Col>
            <Grid.Col span={2}>
              <Text c={'gray.6'} ta={'center'}>
                Symbol
              </Text>
            </Grid.Col>
            <Grid.Col span={2.5}>
              <Text c={'gray.6'} ta={'center'}>
                Asset ID
              </Text>
            </Grid.Col>
            <Grid.Col span={3}>
              <Text c={'gray.6'}>Supply</Text>
            </Grid.Col>
            <Grid.Col span={2}>
              <Text c={'gray.6'} ta={'center'}>
                Appchain ID
              </Text>
            </Grid.Col>
          </Grid>
          {assets?.length ? (
            assets.map((asset) => (
              <RegisteredAssetsRow key={asset.id} asset={asset} />
            ))
          ) : (
            <EmptyResults>{'No registered assets'}</EmptyResults>
          )}
        </Stack>
      </Collapse>
    </Box>
  );
}
