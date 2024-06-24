import { Stack, StackProps } from '@mantine/core';

export interface Props extends StackProps {
  children: React.ReactNode;
}

export function SidebarStack({ children, ...others }: Props) {
  return (
    <Stack p={'xs'} gap={'xs'} {...others}>
      {children}
    </Stack>
  );
}
