import { APYInfoTooltip } from '@/components/pages/Staking/Collators/APYInfoTooltip';
import { COLLATORS_SORTING_DATA } from '@/components/pages/Staking/Collators/Collators.constants';
import { CollatorsTableHeadField } from '@/components/pages/Staking/Collators/CollatorsTableHeadField';
import { CollatorSortingCriteria, sortingKeys } from '@/hooks/polkadot/staking';
import { Button, Collapse, Group, Stack, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props {
  sortedBy: CollatorSortingCriteria;
  sortBy: (sortingKey: CollatorSortingCriteria['key']) => void;
  opened: boolean;
}

export const CollatorsMobileSortingMenu = memo(
  function CollatorsMobileSortingMenu({
    sortedBy,
    sortBy,
    opened,
  }: Readonly<Props>) {
    const theme = useMantineTheme();

    return (
      <Collapse in={opened} mt={25}>
        <Stack bg={theme.colors.dark[8]} style={{ borderRadius: '12px' }} p={5}>
          {COLLATORS_SORTING_DATA.map((option) => {
            return (
              <Group key={option.value}>
                <Button
                  fullWidth
                  justify="left"
                  p={10}
                  style={{
                    border: 0,
                    textAlign: 'left',
                    paddingLeft: '10px',
                  }}
                  bg={
                    option.key === sortedBy.key
                      ? theme.colors.dark[6]
                      : theme.colors.dark[8]
                  }
                  leftSection={
                    option.key === sortingKeys.apy && <APYInfoTooltip />
                  }
                >
                  <CollatorsTableHeadField
                    sortingKey={option.key}
                    sortedBy={sortedBy}
                    sortBy={sortBy}
                  >
                    {option.value}
                  </CollatorsTableHeadField>
                </Button>
              </Group>
            );
          })}
        </Stack>
      </Collapse>
    );
  },
);
