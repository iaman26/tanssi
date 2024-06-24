import { CollatorSortingCriteria } from '@/hooks/polkadot/staking';
import { Group, GroupProps, Stack, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ReactNode, memo } from 'react';

interface Props extends GroupProps {
  children: ReactNode;
  sortedBy?: CollatorSortingCriteria;
  sortingKey?: CollatorSortingCriteria['key'];
  sortBy?: (key: CollatorSortingCriteria['key']) => void;
}

export const CollatorsTableHeadField = memo(function CollatorsTableHeadField({
  children,
  sortedBy,
  sortingKey,
  sortBy,
  ...other
}: Props) {
  return (
    <Group
      gap={0}
      justify={'end'}
      wrap={'nowrap'}
      style={{ cursor: 'pointer' }}
      onClick={() => sortingKey && sortBy?.(sortingKey)}
      {...other}
    >
      <Text c={sortedBy?.key === sortingKey ? 'white' : 'gray.6'}>
        {children}
      </Text>

      {sortBy && sortingKey && sortedBy && (
        <Stack gap={0} ml={2}>
          <IconChevronUp
            size={12}
            stroke={2.5}
            color={
              sortedBy?.key === sortingKey && !sortedBy?.isDesc
                ? 'white'
                : 'var(--mantine-color-gray-7)'
            }
            style={{ marginBottom: -3 }}
          />
          <IconChevronDown
            size={12}
            stroke={2.5}
            color={
              sortedBy?.key === sortingKey && sortedBy?.isDesc
                ? 'white'
                : 'var(--mantine-color-gray-7)'
            }
            style={{ marginTop: -2 }}
          />
        </Stack>
      )}
    </Group>
  );
});
