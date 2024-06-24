import { Text, rgba, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props {
  delegationPercentage?: string;
}

export const DelegationPercentage = memo(function DelegationPercentage({
  delegationPercentage,
}: Readonly<Props>) {
  const theme = useMantineTheme();

  if (!delegationPercentage) {
    return null;
  }

  return (
    <Text
      size={'xs'}
      py={5}
      px={'xs'}
      c={theme.other.colors.amber}
      bg={rgba(theme.other.colors.amber, 0.1)}
      style={{ borderRadius: 5 }}
    >
      {delegationPercentage}
      {'%'}
    </Text>
  );
});
