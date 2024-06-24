import { useProxy } from '@/components/Proxy/state/proxy.hooks';
import { SidebarButton, SidebarStack } from '@/components/Sidebar';
import { useSetActiveTab } from '@/components/pages/Dashboard/ManageAppchain/state';
import { TabInfo } from '@/components/pages/Dashboard/ManageAppchain/state/ManageAppchain.constants';
import { useAppchainSudo } from '@/hooks/polkadot/appchain';

interface Props {
  buttons: TabInfo[];
}

export function ManageAppchainSudoActionsSidebar({ buttons }: Props) {
  const setActiveTab = useSetActiveTab();
  const { isSudoAvailable } = useAppchainSudo();
  const { proxy } = useProxy();

  return (
    <>
      <SidebarStack>
        {buttons.map(({ title, description, tab, isDisabled }) => (
          <SidebarButton
            key={title}
            onClick={() => setActiveTab(tab)}
            title={title}
            description={description}
            isDisabled={isDisabled || (!isSudoAvailable && !proxy)}
          />
        ))}
      </SidebarStack>
    </>
  );
}
