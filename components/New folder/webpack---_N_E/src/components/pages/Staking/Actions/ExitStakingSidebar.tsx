import { ActionButton } from '@/components/ActionButton';
import { SidebarHeader } from '@/components/Sidebar';
import { CollatorDisplayStakingAction } from '@/components/pages/Staking/Actions/CollatorDisplayStakingAction';
import { ProjectedStakePosition } from '@/components/pages/Staking/Actions/ProjectedStakePosition';
import { ChainConfigProps } from '@/config';
import { IdentityMetadata } from '@/hooks/polkadot/common/queries';
import {
  useDelegationShares,
  useRequestUndelegateAll,
} from '@/hooks/polkadot/staking';
import { getPercentage } from '@/utils/numbers';
import { Box, Center, List, Text } from '@mantine/core';
import { AssetAmount } from '@moonbeam-network/xcm-types';

interface Props extends ChainConfigProps {
  title: string;
  collatorAddress: string;
  collatorIdentity: IdentityMetadata | undefined;
  collatorTotalStake: AssetAmount;
  delegation: {
    auto: AssetAmount;
    manual: AssetAmount;
    total: AssetAmount;
  };
  goBack?: () => void;
}

export function ExitStakingSidebar({
  title,
  collatorAddress,
  collatorIdentity,
  collatorTotalStake,
  delegation,
  config,
  goBack,
}: Props) {
  const { auto, manual } = useDelegationShares(collatorAddress, config);
  const { isLoading, send } = useRequestUndelegateAll(config);

  const autoPercentage = getPercentage(
    delegation.auto.amount,
    delegation.total.amount,
  );

  return (
    <>
      <SidebarHeader title={title} goBack={goBack} />

      <Box
        py={'lg'}
        px={'md'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        <Text size={'sm'}>{'You can remove your staking position.'}</Text>
        <List c={'white'} ml={'xs'} style={{ fontSize: 13 }}>
          <List.Item mt={'xs'}>
            {'This removes your pool participation.'}
          </List.Item>
          <List.Item mt={'xs'}>{'Withdraws all your staked tokens.'}</List.Item>
        </List>
      </Box>

      <Box
        py={'lg'}
        px={'md'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        <CollatorDisplayStakingAction
          address={collatorAddress}
          identity={collatorIdentity}
        />
      </Box>

      <ProjectedStakePosition
        collatorAddress={collatorAddress}
        collatorTotalStake={collatorTotalStake}
        manualAssetAmount={delegation.manual}
        autoAssetAmount={delegation.auto}
        autoPercentage={autoPercentage}
        config={config}
        isExit
      />

      <Center>
        <ActionButton
          mx={'sm'}
          w={'100%'}
          onClick={() => send(collatorAddress, auto, manual)}
          withArrow={false}
          isLoading={isLoading}
          data-testid={'execute-exit-staking'}
        >
          {isLoading ? 'Executing' : 'Execute'}
        </ActionButton>
      </Center>
    </>
  );
}
