import {
  SidebarButton,
  SidebarHeader,
  SidebarStack,
} from '@/components/Sidebar';
import { useAppchainSudo } from '@/hooks/polkadot/appchain';
import { ScrollArea } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useSetActiveTab } from '../state';
import {
  ManageAppchainTab,
  getTabInfo,
} from '../state/ManageAppchain.constants';

const buttons = [
  ManageAppchainTab.TokenManagement,
  ManageAppchainTab.BlockProduction,
  ManageAppchainTab.Xcm,
  ManageAppchainTab.Oracles,
  ManageAppchainTab.Bridges,
  ManageAppchainTab.Indexers,
  ManageAppchainTab.AppchainStaking,
  ManageAppchainTab.Maintenance,
].map(getTabInfo);

export function Management() {
  const setActiveTab = useSetActiveTab();
  const { height } = useViewportSize();
  const { isLoading, isSudoAvailable, isProxyAvailable } = useAppchainSudo();

  return (
    <>
      <SidebarHeader title={getTabInfo(ManageAppchainTab.Management).title} />

      {!isLoading && (
        <ScrollArea.Autosize type={'never'} mah={height - 65}>
          <SidebarStack mt={isSudoAvailable && !isProxyAvailable ? 'sm' : 0}>
            {buttons.map(({ title, description, tab, isDisabled }) => (
              <SidebarButton
                key={title}
                onClick={() => setActiveTab(tab)}
                title={title}
                description={description}
                isDisabled={isDisabled}
                badgeText={isDisabled ? 'Coming soon' : undefined}
              />
            ))}
          </SidebarStack>
        </ScrollArea.Autosize>
      )}
    </>
  );
}
