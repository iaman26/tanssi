import { ManageAppchainSudoActionsSidebar } from '@/components/pages/Dashboard/ManageAppchain/ManageAppchainSudoActionsSidebar';
import { SudoSidebarWrapper } from '@/components/pages/Dashboard/ManageAppchain/SudoSidebarWrapper';
import {
  ManageAppchainTab,
  getTabInfo,
} from '../state/ManageAppchain.constants';

const buttons = [
  ManageAppchainTab.TokenManagementMint,
  ManageAppchainTab.TokenManagementUpdate,
  ManageAppchainTab.TokenManagementTransfer,
  ManageAppchainTab.TokenManagementGas,
].map(getTabInfo);

export function TokenManagement() {
  return (
    <SudoSidebarWrapper
      tab={ManageAppchainTab.TokenManagement}
      goBack={ManageAppchainTab.Management}
      goToOnProxyDisconnect={ManageAppchainTab.TokenManagement}
    >
      <ManageAppchainSudoActionsSidebar buttons={buttons} />
    </SudoSidebarWrapper>
  );
}
