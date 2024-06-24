import { APYInfoTooltip } from '@/components/pages/Staking/Collators/APYInfoTooltip';
import { CollatorsTableHeadField } from '@/components/pages/Staking/Collators/CollatorsTableHeadField';
import { CollatorSortingCriteria, sortingKeys } from '@/hooks/polkadot/staking';
import { Box, Grid, Group } from '@mantine/core';
import { memo } from 'react';

interface Props {
  sortedBy: CollatorSortingCriteria;
  sortBy: (sortingKey: CollatorSortingCriteria['key']) => void;
}

export const CollatorsSortingRow = memo(function CollatorsSortingRow({
  sortedBy,
  sortBy,
}: Readonly<Props>) {
  return (
    <Grid px={'md'} columns={23}>
      <Grid.Col span={4.2}>
        <CollatorsTableHeadField justify={'start'}>
          {'Block Producers'}
        </CollatorsTableHeadField>
      </Grid.Col>

      <Grid.Col span={3.75}>
        <CollatorsTableHeadField
          sortingKey={sortingKeys.delegated}
          sortedBy={sortedBy}
          sortBy={sortBy}
        >
          {'Delegated Stake'}
        </CollatorsTableHeadField>
      </Grid.Col>

      <Grid.Col span={3.75}>
        <CollatorsTableHeadField
          sortingKey={sortingKeys.self}
          sortedBy={sortedBy}
          sortBy={sortBy}
        >
          {'Self-stake'}
        </CollatorsTableHeadField>
      </Grid.Col>

      <Grid.Col span={3.75}>
        <CollatorsTableHeadField
          sortingKey={sortingKeys.total}
          sortedBy={sortedBy}
          sortBy={sortBy}
        >
          {'Total Stake'}
        </CollatorsTableHeadField>
      </Grid.Col>

      <Grid.Col span={3.1}>
        <CollatorsTableHeadField
          pl={'lg'}
          justify={'center'}
          sortingKey={sortingKeys.delegations}
          sortedBy={sortedBy}
          sortBy={sortBy}
        >
          {'Delegations'}
        </CollatorsTableHeadField>
      </Grid.Col>

      <Grid.Col span={4}>
        <Group grow>
          <Group align={'center'} justify={'center'} gap={5} wrap={'nowrap'}>
            <APYInfoTooltip />
            <CollatorsTableHeadField
              justify={'start'}
              sortingKey={sortingKeys.apy}
              sortedBy={sortedBy}
              sortBy={sortBy}
            >
              {'APY'}
            </CollatorsTableHeadField>
          </Group>
          <Box />
        </Group>
      </Grid.Col>
    </Grid>
  );
});
