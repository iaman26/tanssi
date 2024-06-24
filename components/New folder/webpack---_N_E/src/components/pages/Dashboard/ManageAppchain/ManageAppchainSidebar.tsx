import { BlockProductionManagement } from '@/components/pages/Dashboard/ManageAppchain/tabs/BlockProductionManagement';
import { ProxyAppchainManagement } from '@/components/pages/Dashboard/ManageAppchain/tabs/ProxyAppchainManagement';
import { Tabs } from '@mantine/core';
import { usePrevious } from '@mantine/hooks';
import { useManageAppchainState } from './state';
import { ManageAppchainTab } from './state/ManageAppchain.constants';
import { Management } from './tabs/Management';
import { TokenManagement } from './tabs/TokenManagement';
import { TokenManagementGasDynamics } from './tabs/TokenManagementGasDynamics';
import { TokenManagementMintTokens } from './tabs/TokenManagementMintTokens';
import { TokenManagementTransferTokens } from './tabs/TokenManagementTransferTokens';
import { TokenManagementUpdateBalances } from './tabs/TokenManagementUpdateBalances';
import { Xcm } from './tabs/Xcm';
import { XcmAssetRegistration } from './tabs/XcmAssetRegistration';
import { XcmHrmpChannels } from './tabs/XcmHrmpChannels';
import { XcmHrmpDeposit } from './tabs/XcmHrmpDeposit';

export function ManageAppchainSidebar() {
  const { tab: activeTab } = useManageAppchainState();
  const previousTab = usePrevious(activeTab);

  return (
    <Tabs value={activeTab} keepMounted={false}>
      <Tabs.Panel value={ManageAppchainTab.Management}>
        <Management />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.TokenManagement}>
        <TokenManagement />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.TokenManagementMint}>
        <TokenManagementMintTokens />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.TokenManagementUpdate}>
        <TokenManagementUpdateBalances />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.TokenManagementTransfer}>
        <TokenManagementTransferTokens />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.TokenManagementGas}>
        <TokenManagementGasDynamics />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.Xcm}>
        <Xcm />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.XcmHrmpDeposit}>
        <XcmHrmpDeposit />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.XcmHrmpChannels}>
        <XcmHrmpChannels />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.XcmAssetRegistration}>
        <XcmAssetRegistration />
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.Proxy}>
        {previousTab && <ProxyAppchainManagement previousTab={previousTab} />}
      </Tabs.Panel>

      <Tabs.Panel value={ManageAppchainTab.BlockProduction}>
        <BlockProductionManagement />
      </Tabs.Panel>
    </Tabs>
  );
}
