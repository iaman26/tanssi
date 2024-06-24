import { Box } from '@mantine/core';

export interface SidebarProps {
  children: React.ReactNode;
  close: () => void;
  goBack?: () => void;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <Box
      py={'lg'}
      pos={'fixed'}
      top={0}
      right={0}
      bottom={0}
      w={{ base: '100%', sm: 320 }}
      bg={'dark.8'}
      style={{
        zIndex: 1000,
        overflowY: 'scroll',
        borderLeft: '1px solid var(--mantine-color-gray-9)',
      }}
      data-testid={'sidebar'}
    >
      {children}
    </Box>
  );
}
