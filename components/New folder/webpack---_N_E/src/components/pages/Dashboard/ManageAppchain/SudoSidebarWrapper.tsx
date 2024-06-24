import { SidebarHeader } from '@/components/Sidebar';
import { ProxyOrSudoSidebarAlert } from '@/components/pages/Dashboard/ManageAppchain/ProxyOrSudoSidebarAlert';
import { useSetActiveTab } from '@/components/pages/Dashboard/ManageAppchain/state';
import {
  ManageAppchainTab,
  getTabInfo,
} from '@/components/pages/Dashboard/ManageAppchain/state/ManageAppchain.constants';

interface Props {
  tab: ManageAppchainTab;
  children: React.ReactNode;
  goBack: ManageAppchainTab;
  goToOnProxyDisconnect: ManageAppchainTab;
}

export function SudoSidebarWrapper({
  tab,
  children,
  goBack,
  goToOnProxyDisconnect,
}: Props) {
  const setActiveTab = useSetActiveTab();

  return (
    <>
      <SidebarHeader
        title={getTabInfo(tab).title}
        goBack={() => setActiveTab(goBack)}
        goToOnProxyDisconnect={() => setActiveTab(goToOnProxyDisconnect)}
        showProxy
      />
      <ProxyOrSudoSidebarAlert />
      {children}
    </>
  );
}
