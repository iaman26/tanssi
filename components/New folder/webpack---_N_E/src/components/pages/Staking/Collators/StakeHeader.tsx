import { Box, Group, Text, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

export const StakeHeader = memo(function StakeHeader() {
  const theme = useMantineTheme();

  return (
    <Group justify={'space-between'}>
      <Group gap={5} mt={10} mb={10}>
        <Box
          w={10}
          h={10}
          bg={theme.colors.tanssiTeal[9]}
          style={{ borderRadius: '50%' }}
        />
        <Text size={'sm'} c={'gray.6'}>
          {'Manual Stake'}
        </Text>
      </Group>
      <Group gap={5}>
        <Box
          w={10}
          h={10}
          bg={theme.other.colors.amber}
          style={{ borderRadius: '50%' }}
        />
        <Text size={'sm'} c={'gray.6'}>
          {'Auto Stake'}
        </Text>
      </Group>
    </Group>
  );
});
