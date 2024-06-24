import { useProxy } from '@/components/Proxy/state/proxy.hooks';
import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { useManageAppchain } from '@/components/pages/Dashboard/ManageAppchain/state';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useAddress } from '@/state/user';
import { usePrevious } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export function useResetState(): void {
  const router = useRouter();

  const address = useAddress();
  const newAddress = usePrevious(address);

  const config = useChainConfig();
  const newConfig = usePrevious(config);

  const { close } = useSidebar();
  const { closeManageAppchain } = useManageAppchain();
  const { setProxy } = useProxy();

  const clearState = useCallback(() => {
    closeManageAppchain();
    close();
    setProxy();
  }, [close, closeManageAppchain, setProxy]);

  // Clear state when config changes
  useEffect(() => {
    if (newConfig && config !== newConfig) {
      clearState();
    }
  }, [config, newConfig, clearState]);

  // Clear state when address changes
  useEffect(() => {
    if (newAddress && address !== newAddress) {
      clearState();
    }
  }, [address, newAddress, clearState]);

  // Clear state on route change
  useEffect(() => {
    router.events.on('routeChangeComplete', clearState);

    return () => {
      router.events.off('routeChangeComplete', clearState);
    };
  }, [router, clearState]);
}
