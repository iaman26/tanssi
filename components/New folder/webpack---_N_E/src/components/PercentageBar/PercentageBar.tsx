import { Box, BoxProps, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props extends BoxProps {
  value: number | undefined;
}

export const PercentageBar = memo(function PercentageBar({
  value,
  h = 10,
  ...other
}: Props) {
  const theme = useMantineTheme();

  return (
    <Box
      pos={'relative'}
      bg={theme.other.colors.amber}
      h={h}
      w={other.w}
      {...other}
      style={{ ...other.style, borderRadius: 10, overflow: 'hidden' }}
    >
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${value}%`,
          backgroundColor: theme.colors.tanssiTeal[9],
        }}
      />
    </Box>
  );
});
