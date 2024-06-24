import { useExtensions } from '@/state/polkadot-extension';
import { Tabs } from '@mantine/core';
import { useState } from 'react';
import { AccountsTab } from './AccountsTab';
import { Tab } from './ConnectWalletModal.interfaces';
import { ExtensionsTab } from './ExtensionsTab';

export function ConnectWalletModal() {
  const { extension } = useExtensions();
  const [activeTab, setActiveTab] = useState<Tab>(
    extension ? Tab.Accounts : Tab.Extensions,
  );

  return (
    <Tabs value={activeTab} keepMounted={false}>
      <Tabs.Panel value={Tab.Extensions}>
        <ExtensionsTab setActiveTab={setActiveTab} />
      </Tabs.Panel>
      <Tabs.Panel value={Tab.Accounts}>
        <AccountsTab setActiveTab={setActiveTab} />
      </Tabs.Panel>
    </Tabs>
  );
}
