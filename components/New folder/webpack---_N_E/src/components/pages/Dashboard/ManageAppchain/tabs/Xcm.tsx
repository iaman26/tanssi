import { SidebarButton, SidebarStack } from '@/components/Sidebar';
import { useIsRegisterAssetsEnabledFlag } from '@/hooks/flags/useIsRegisterAssetsEnabledFlag';
import { useHasEnoughHrmpOpenChannelBalance } from '@/hooks/polkadot/xcm';
import { SudoSidebarWrapper } from '../SudoSidebarWrapper';
import { useManageAppchainState, useSetActiveTab } from '../state';
import {
  ManageAppchainTab,
  getTabInfo,
} from '../state/ManageAppchain.constants';

const buttons = [
  ManageAppchainTab.XcmHrmpChannels,
  ManageAppchainTab.XcmAssetRegistration,
  ManageAppchainTab.XcmMrl,
].map(getTabInfo);

export function Xcm() {
  const setActiveTab = useSetActiveTab();
  const { paraId, config } = useManageAppchainState();
  const hasEnoughBalance = useHasEnoughHrmpOpenChannelBalance(paraId, config);
  const { isEnabled } = useIsRegisterAssetsEnabledFlag();

  return (
    <SudoSidebarWrapper
      tab={ManageAppchainTab.Xcm}
      goBack={ManageAppchainTab.Management}
      goToOnProxyDisconnect={ManageAppchainTab.Xcm}
    >
      <SidebarStack>
        {buttons.map(({ title, description, tab, isDisabled }) => (
          <SidebarButton
            key={title}
            onClick={() => {
              if (
                tab === ManageAppchainTab.XcmHrmpChannels &&
                !hasEnoughBalance
              ) {
                setActiveTab(ManageAppchainTab.XcmHrmpDeposit);

                return;
              }

              setActiveTab(tab);
            }}
            title={title}
            description={description}
            isDisabled={
              isDisabled ||
              (tab === ManageAppchainTab.XcmAssetRegistration && !isEnabled)
            }
          />
        ))}
      </SidebarStack>
    </SudoSidebarWrapper>
  );
}
