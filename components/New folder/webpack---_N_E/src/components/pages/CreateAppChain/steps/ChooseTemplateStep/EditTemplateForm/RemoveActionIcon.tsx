import { ActionIcon, ActionIconProps } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

export interface Props extends ActionIconProps {
  onClick: () => void;
}

export function RemoveActionIcon(props: Props) {
  return (
    <ActionIcon
      c={'white'}
      variant={'transparent'}
      title={'Remove'}
      bg={'dark.6'}
      style={{ borderRadius: 7 }}
      {...props}
    >
      <IconTrash size={12} stroke={1.5} />
    </ActionIcon>
  );
}
