import { sidebarAtom } from '@/components/Sidebar/state/sidebar.atoms';
import { useMediaQuery } from '@mantine/hooks';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface Sidebar {
  sidebar: React.ReactElement | undefined;
  sidebarWidth: number | undefined;
  open: (sidebar: React.ReactElement) => void;
  close: () => void;
}

export function useSidebar(): Sidebar {
  const router = useRouter();
  const [sidebar, setSidebar] = useAtom(sidebarAtom);
  const isSidebarOnTop = useMediaQuery(
    `(max-width: ${router.pathname === '/staking' ? '1624px' : '1400px'})`,
  );
  const sidebarWidth = sidebar && !isSidebarOnTop ? 320 : 0;

  return {
    sidebar,
    sidebarWidth,
    open: useCallback(
      (sidebar: React.ReactElement) => setSidebar(sidebar),
      [setSidebar],
    ),
    close: useCallback(() => setSidebar(undefined), [setSidebar]),
  };
}
