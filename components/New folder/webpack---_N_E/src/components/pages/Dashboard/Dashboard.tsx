import { AppchainCard } from '@/components/AppchainCard';
import { CampaignBanner } from '@/components/CampaignBanner';
import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { useUserAppchains } from '@/hooks/polkadot/appchain';
import { useChainConfig } from '@/hooks/useChainConfig';
import { Box, Center, Loader } from '@mantine/core';
import { usePrevious } from '@mantine/hooks';
import { useManageAppchainState } from './ManageAppchain/state';
import {
  ManageAppchainTab,
  isXcmTab,
} from './ManageAppchain/state/ManageAppchain.constants';
import { HrmpChannels } from './XCM/HrmpChannels';

export function Dashboard() {
  const config = useChainConfig();
  const { appchains } = useUserAppchains(config);
  const { tab } = useManageAppchainState();
  const previousTab = usePrevious(tab);
  const { sidebar } = useSidebar();
  const isSidebarOpen = !!sidebar;

  if (!appchains) {
    return (
      <Center style={{ flex: 1 }}>
        <Loader size={50} />
      </Center>
    );
  }

  if (
    isSidebarOpen &&
    (isXcmTab(tab) ||
      (isXcmTab(previousTab) && tab === ManageAppchainTab.Proxy))
  ) {
    return <HrmpChannels />;
  }

  return (
    <>
      <CampaignBanner />
      <Box component={'section'} pt={20}>
        {appchains.map(({ paraId }) => (
          <AppchainCard key={paraId} paraId={paraId} config={config} />
        ))}
      </Box>
    </>
  );
}
