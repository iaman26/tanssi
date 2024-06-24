import { ProxyDropdownRow } from '@/components/Proxy/ProxyDropdownRow';
import { useProxy } from '@/components/Proxy/state/proxy.hooks';
import { SidebarHeader, SidebarStack } from '@/components/Sidebar';
import { useSetActiveTab } from '@/components/pages/Dashboard/ManageAppchain/state';
import {
  ManageAppchainTab,
  getTabInfo,
} from '@/components/pages/Dashboard/ManageAppchain/state/ManageAppchain.constants';
import { useAppchainSudo } from '@/hooks/polkadot/appchain';

interface Props {
  previousTab: ManageAppchainTab;
}

export function ProxyAppchainManagement({ previousTab }: Props) {
  const setActiveTab = useSetActiveTab();
  const { proxies, sudoKey } = useAppchainSudo();
  const { proxy, setProxy } = useProxy();

  return (
    <>
      <SidebarHeader
        title={getTabInfo(ManageAppchainTab.Proxy).title}
        goBack={() => setActiveTab(previousTab)}
      />

      <SidebarStack>
        {proxies?.map(({ delegate, proxyType }) => (
          <ProxyDropdownRow
            key={delegate}
            address={delegate}
            checked={proxy?.address === delegate}
            onChange={() => {
              setProxy(
                proxy?.address === delegate || !sudoKey
                  ? undefined
                  : {
                      address: delegate,
                      proxyType,
                      proxiedAddress: sudoKey,
                    },
              );
              setActiveTab(previousTab);
            }}
          />
        ))}
      </SidebarStack>
    </>
  );
}
