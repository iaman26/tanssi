import { CopyIcon } from '@/components/CopyIcon';
import { Box, Group, HoverCard, HoverCardProps, Text } from '@mantine/core';
import { ReactNode, memo } from 'react';

interface Props extends HoverCardProps {
  children: ReactNode | undefined;
  address: string;
}

export const CopyAddressTooltip = memo(function CopyAddressTooltip({
  children,
  address,
  ...others
}: Props) {
  if (!children) return null;

  return (
    <HoverCard openDelay={400} {...others}>
      <HoverCard.Target>
        <Box component={'span'}>{children}</Box>
      </HoverCard.Target>
      <HoverCard.Dropdown w={'auto'} style={{ zIndex: 1000 }}>
        <Group gap={5}>
          <Text size={'sm'}>{address}</Text>
          <CopyIcon value={address} size={20} />
        </Group>
      </HoverCard.Dropdown>
    </HoverCard>
  );
});
