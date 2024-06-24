import { useProxy } from '@/components/Proxy/state/proxy.hooks';
import { SidebarAlert } from '@/components/Sidebar';
import { useAppchainSudo } from '@/hooks/polkadot/appchain';
import { useSetActiveTab } from './state';
import { ManageAppchainTab } from './state/ManageAppchain.constants';

export function ProxyOrSudoSidebarAlert() {
  const { proxy } = useProxy();
  const setActiveTab = useSetActiveTab();
  const { isSudoAvailable, isProxyAvailable, isLoading } = useAppchainSudo();

  const showSudoAlert = !isSudoAvailable && !isProxyAvailable;
  const showProxyAlert = isProxyAvailable && !proxy;

  if (isLoading) return null;

  return (
    <>
      {showSudoAlert && (
        <SidebarAlert
          mt={'lg'}
          mb={'md'}
          mx={'sm'}
          variant={'error'}
          title={'Sudo not available'}
          description={'Ensure Sudo or Proxy is in your extension.'}
        />
      )}

      {showProxyAlert && (
        <SidebarAlert
          mx={'sm'}
          mt={'lg'}
          mb={'md'}
          title={'Proxy Available'}
          description={'Select your Proxy account'}
          onClick={() => setActiveTab(ManageAppchainTab.Proxy)}
        />
      )}
    </>
  );
}
