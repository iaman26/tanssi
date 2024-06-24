import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { ManageAppchainSidebar } from '@/components/pages/Dashboard/ManageAppchain/ManageAppchainSidebar';
import { ChainConfig } from '@/config';
import { useAtomValue, useSetAtom } from 'jotai';
import { ReactElement } from 'react';
import { activeTabAtom, configAtom, paraIdAtom } from './ManageAppchain.atoms';
import { ManageAppchainTab } from './ManageAppchain.constants';

export function useSetActiveTab(): (tab: ManageAppchainTab) => void {
  return useSetAtom(activeTabAtom);
}

export interface ManageAppchainState {
  tab: ManageAppchainTab | undefined;
  paraId: number | undefined;
  config: ChainConfig | undefined;
}

export function useManageAppchainState(): ManageAppchainState {
  const tab = useAtomValue(activeTabAtom);
  const paraId = useAtomValue(paraIdAtom);
  const config = useAtomValue(configAtom);

  return {
    tab,
    paraId,
    config,
  };
}

interface ManageAppchain {
  openManageAppchain: ({
    paraId,
    config,
    component,
  }: {
    paraId: number;
    config: ChainConfig;
    component?: ReactElement | undefined;
  }) => void;
  closeManageAppchain: () => void;
}

export function useManageAppchain(): ManageAppchain {
  const { open, close } = useSidebar();

  const setActiveTab = useSetAtom(activeTabAtom);
  const setParaId = useSetAtom(paraIdAtom);
  const setConfig = useSetAtom(configAtom);

  const openManageAppchain = ({
    paraId,
    config,
    component = <ManageAppchainSidebar />,
  }: {
    paraId: number;
    config: ChainConfig;
    component?: ReactElement;
  }) => {
    setParaId(paraId);
    setConfig(config);
    open(component);
    setActiveTab(ManageAppchainTab.Management);
  };

  const closeManageAppchain = () => {
    close();
    setActiveTab(ManageAppchainTab.Management);
    setParaId(undefined);
    setConfig(undefined);
  };

  return {
    openManageAppchain,
    closeManageAppchain,
  };
}
