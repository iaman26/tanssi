import { Group, Text } from '@mantine/core';

interface Props {
  children: string;
}

export function EmptyResults({ children }: Props) {
  return (
    <Group h={70} justify="center" bg={'dark.8'} style={{ borderRadius: 12 }}>
      <Text c={'gray.6'}>{children}</Text>
    </Group>
  );
}
