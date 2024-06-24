import { PercentageBar } from '@/components/PercentageBar';
import { isDefined } from '@/utils/validate';
import { Group, Text, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props {
  manualPercentageFormatted?: string;
  manualPercentage?: number;
  autoPercentageFormatted?: string;
}

export const PercentageBars = memo(function PercentageBars({
  manualPercentageFormatted,
  manualPercentage,
  autoPercentageFormatted,
}: Readonly<Props>) {
  const theme = useMantineTheme();

  if (!isDefined(manualPercentageFormatted)) {
    return null;
  }

  return (
    <Group mt={2} justify={'space-between'} gap={0}>
      <Text w={48} size={'sm'} c={theme.primaryColor}>
        {manualPercentageFormatted}
        {'%'}
      </Text>
      <PercentageBar value={manualPercentage} style={{ flexGrow: 1 }} />
      <Text w={48} size={'sm'} c={theme.other.colors.amber} ta={'right'}>
        {autoPercentageFormatted}
        {'%'}
      </Text>
    </Group>
  );
});
