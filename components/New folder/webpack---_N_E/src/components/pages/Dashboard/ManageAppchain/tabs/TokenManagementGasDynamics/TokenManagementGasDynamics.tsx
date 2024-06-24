import { SudoSidebarWrapper } from '@/components/pages/Dashboard/ManageAppchain/SudoSidebarWrapper';
import { useManageAppchainState } from '@/components/pages/Dashboard/ManageAppchain/state';
import { ManageAppchainTab } from '@/components/pages/Dashboard/ManageAppchain/state/ManageAppchain.constants';
import {
  useAppchainBaseFee,
  useAppchainElasticity,
} from '@/hooks/polkadot/appchain';
import { TokenManagementGasDynamicsForm } from './TokenManagementGasDynamicsForm';

export function TokenManagementGasDynamics() {
  const { paraId, config } = useManageAppchainState();
  const elasticity = useAppchainElasticity(paraId, config);
  const baseFeePerGas = useAppchainBaseFee(paraId, config);

  return (
    <SudoSidebarWrapper
      tab={ManageAppchainTab.TokenManagementGas}
      goBack={ManageAppchainTab.TokenManagement}
      goToOnProxyDisconnect={ManageAppchainTab.TokenManagement}
    >
      {baseFeePerGas && elasticity && (
        <TokenManagementGasDynamicsForm
          baseFeePerGas={baseFeePerGas}
          elasticity={elasticity}
        />
      )}
    </SudoSidebarWrapper>
  );
}
