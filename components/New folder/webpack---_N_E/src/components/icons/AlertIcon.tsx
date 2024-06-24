import { Center, CenterProps, lighten, useMantineTheme } from '@mantine/core';
import { IconExclamationMark } from '@tabler/icons-react';

interface AlertIconIconProps extends CenterProps {
  color?: string;
  stroke?: number;
  size?: number | string;
}

export function AlertIcon({
  size = 20,
  color,
  stroke = 3,
  ...others
}: AlertIconIconProps) {
  const theme = useMantineTheme();

  const alertColor = color || theme.colors.tanssiBlue[9];

  return (
    <Center
      w={size}
      h={size}
      bg={alertColor}
      style={{
        borderWidth: 1,
        borderColor: lighten(alertColor, 0.3),
        borderStyle: 'solid',
        borderRadius: '50%',
      }}
      {...others}
    >
      <IconExclamationMark stroke={stroke} color="white" height={'75%'} />
    </Center>
  );
}
