import { Box } from '@mantine/core';
import { memo } from 'react';

interface Props {
  color: string;
  disabled?: boolean;
}

export const Dot = memo(function Dot({ disabled, color }: Props) {
  return (
    <Box
      w={12}
      h={12}
      bg={disabled ? 'dark.6' : color}
      style={{ borderRadius: '50%' }}
    />
  );
});
