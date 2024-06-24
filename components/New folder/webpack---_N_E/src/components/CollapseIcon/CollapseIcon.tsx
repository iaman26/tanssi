import { Center, CenterProps } from '@mantine/core';
import { IconChevronDown, IconChevronUp, IconProps } from '@tabler/icons-react';
import { memo } from 'react';

export interface Props extends CenterProps {
  isOpen: boolean;
  size?: number;
  iconProps?: IconProps;
}

export const CollapseIcon = memo(function CollapseIcon({
  isOpen,
  size = 24,
  iconProps,
  ...other
}: Props) {
  return (
    <Center
      w={size}
      h={size}
      bg={'dark.6'}
      style={{ borderRadius: 8 }}
      {...other}
    >
      {isOpen ? (
        <IconChevronUp
          size={size / 2}
          stroke={3}
          color="white"
          {...iconProps}
        />
      ) : (
        <IconChevronDown
          size={size / 2}
          stroke={3}
          color="white"
          {...iconProps}
        />
      )}
    </Center>
  );
});
