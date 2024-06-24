import { ChangeStakingRatioSidebar } from '@/components/pages/Staking/Actions/ChangeStakingRatioSidebar';
import { DecreaseStakingSidebar } from '@/components/pages/Staking/Actions/DecreaseStakingSidebar';
import { ExitStakingSidebar } from '@/components/pages/Staking/Actions/ExitStakingSidebar';
import { IncreaseStakingSidebar } from '@/components/pages/Staking/Actions/IncreaseStakingSidebar';
import {
  Action,
  ManageStakingActions,
} from '@/components/pages/Staking/Actions/ManageStakingActions';
import { ChainConfigProps } from '@/config';
import { IdentityMetadata } from '@/hooks/polkadot/common/queries';
import { Tabs } from '@mantine/core';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { useEffect, useState } from 'react';

interface Props extends ChainConfigProps {
  collatorAddress: string;
  collatorIdentity: IdentityMetadata | undefined;
  collatorTotalStake: AssetAmount;
  delegation: {
    auto: AssetAmount;
    manual: AssetAmount;
    total: AssetAmount;
  };
}

export function ManageStakingSidebar({
  collatorAddress,
  collatorIdentity,
  collatorTotalStake,
  delegation,
  config,
}: Props) {
  const [activeTab, setActiveTab] = useState<string | null>('manage');
  const [action, setAction] = useState<Action | null>(null);

  const onClick = (action: Action) => {
    setAction(action);
    setActiveTab('action');
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: trigger when collatorAddress changes
  useEffect(() => {
    setActiveTab('manage');
  }, [collatorAddress]);

  return (
    <Tabs value={activeTab}>
      <Tabs.Panel value={'manage'}>
        <ManageStakingActions onClick={onClick} />
      </Tabs.Panel>

      <Tabs.Panel value={'action'}>
        {action === Action.Increase && (
          <IncreaseStakingSidebar
            title={Action.Increase}
            collatorAddress={collatorAddress}
            collatorIdentity={collatorIdentity}
            collatorTotalStake={collatorTotalStake}
            delegation={delegation}
            goBack={() => setActiveTab('manage')}
            config={config}
          />
        )}
        {action === Action.Decrease && (
          <DecreaseStakingSidebar
            title={Action.Decrease}
            collatorAddress={collatorAddress}
            collatorIdentity={collatorIdentity}
            collatorTotalStake={collatorTotalStake}
            delegation={delegation}
            goBack={() => setActiveTab('manage')}
            config={config}
          />
        )}
        {action === Action.Change && (
          <ChangeStakingRatioSidebar
            title={Action.Change}
            collatorAddress={collatorAddress}
            collatorIdentity={collatorIdentity}
            delegation={delegation}
            goBack={() => setActiveTab('manage')}
            config={config}
          />
        )}
        {action === Action.Exit && (
          <ExitStakingSidebar
            title={Action.Exit}
            collatorAddress={collatorAddress}
            collatorIdentity={collatorIdentity}
            collatorTotalStake={collatorTotalStake}
            delegation={delegation}
            goBack={() => setActiveTab('manage')}
            config={config}
          />
        )}
      </Tabs.Panel>
    </Tabs>
  );
}
