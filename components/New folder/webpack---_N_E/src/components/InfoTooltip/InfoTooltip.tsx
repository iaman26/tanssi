import { InfoIcon } from '@/components/icons/InfoIcon';
import { Center, HoverCard, HoverCardProps } from '@mantine/core';

export function InfoTooltip({ children, ...other }: HoverCardProps) {
  return (
    <HoverCard position={'bottom-end'} {...other}>
      <HoverCard.Target>
        <Center>
          <InfoIcon />
        </Center>
      </HoverCard.Target>
      <HoverCard.Dropdown w={'80%'} maw={400}>
        {children}
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
