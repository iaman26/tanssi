import { ActionButton } from '@/components/ActionButton';
import { CollapseIcon } from '@/components/CollapseIcon';
import { PercentageBars } from '@/components/PercentageBars/PercentageBars';
import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { TokenAmount } from '@/components/TokenAmount';
import { ManageStakingSidebar } from '@/components/pages/Staking/Actions/ManageStakingSidebar';
import { CollatorDisplay } from '@/components/pages/Staking/CollatorDisplay';
import { CollatorIdenticon } from '@/components/pages/Staking/Collators/CollatorIdenticon';
import { DelegationPercentage } from '@/components/pages/Staking/Collators/DelegationPercentage';
import { StakeHeader } from '@/components/pages/Staking/Collators/StakeHeader';
import { ChainConfigProps } from '@/config';
import { MyCollator, useClaimManualRewards } from '@/hooks/polkadot/staking';
import { useFormatValue } from '@/hooks/useFormatValue';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  Box,
  Collapse,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMemo } from 'react';

interface Props extends MyCollator, ChainConfigProps {
  position: number;
}

export function MyCollatorRow({
  address,
  identity,
  isActive,
  isUpcoming,
  position,
  delegation,
  totalStake,
  manualRewards,
  config,
}: Props) {
  const { open } = useSidebar();
  const theme = useMantineTheme();
  const { md } = useMediaQuery();
  const [opened, { toggle }] = useDisclosure(false);

  const totalDelegation = useFormatValue(delegation.total.toDecimal());
  const { isLoading, send } = useClaimManualRewards(config);

  const manualPercentage = useMemo(
    () =>
      delegation.total.amount
        ? delegation.manual
            .toBig()
            .div(delegation.total.toBig())
            .times(100)
            .toNumber()
        : undefined,
    [delegation.manual, delegation.total],
  );

  const delegationPercentage = useMemo(
    () =>
      totalStake.amount
        ? delegation.total.toBig().div(totalStake.toBig()).times(100).toFixed(2)
        : undefined,
    [delegation.total, totalStake],
  );

  const manualPercentageFormatted = useFormatValue(manualPercentage, 1);
  const autoPercentageFormatted = useFormatValue(
    manualPercentageFormatted
      ? 100 - Number(manualPercentageFormatted)
      : undefined,
    1,
  );

  return md ? (
    <Grid
      role={'row'}
      columns={20}
      p={'md'}
      bg={'dark.8'}
      style={{ borderRadius: 20 }}
    >
      <Grid.Col span={3.8} pr={'xl'}>
        <Group gap={0} wrap={'nowrap'}>
          <Text size={'sm'} c={'gray.6'} w={25} style={{ flexShrink: 0 }}>
            {position}
            {'. '}
          </Text>
          <CollatorIdenticon
            address={address}
            isActive={isActive}
            isUpcoming={isUpcoming}
          />
          <CollatorDisplay address={address} display={identity?.display} />
        </Group>
      </Grid.Col>

      <Grid.Col span={'auto'} data-testid={'my-collator-stakes'}>
        <Group justify={'space-between'}>
          <TokenAmount amount={delegation.manual} symbolColor={'gray.6'} />
          <TokenAmount amount={delegation.auto} symbolColor={'gray.6'} />
        </Group>

        <PercentageBars
          manualPercentageFormatted={manualPercentageFormatted}
          manualPercentage={manualPercentage}
          autoPercentageFormatted={autoPercentageFormatted}
        />
      </Grid.Col>

      <Grid.Col span={4.1} miw={260} data-testid={'my-collator-share'}>
        <Group justify={'end'} align={'end'} gap={'xs'}>
          <Stack align={'center'} gap={0}>
            <Text size={'sm'}>
              {totalDelegation}
              {' / '}
            </Text>
            <TokenAmount amount={totalStake} symbolColor={'gray.6'} />
          </Stack>
          <DelegationPercentage delegationPercentage={delegationPercentage} />
        </Group>
      </Grid.Col>

      <Grid.Col
        span={4.8}
        miw={300}
        pl={'3.5%'}
        data-testid={'my-collator-actions'}
      >
        <Group justify={'center'} gap={0} wrap={'nowrap'}>
          <ActionButton
            miw={150}
            px={'md'}
            c={!manualPercentage ? 'gray.6' : 'white'}
            withArrow={false}
            disabled={!manualPercentage || !manualRewards.amount || isLoading}
            loading={isLoading}
            onClick={() => send([address])}
          >
            {!manualPercentage ? (
              'Compounding'
            ) : (
              <TokenAmount amount={manualRewards} />
            )}
          </ActionButton>
          <ActionButton
            miw={'auto'}
            px={'sm'}
            ml={'xs'}
            fw={600}
            withArrow={false}
            onClick={() =>
              open(
                <ManageStakingSidebar
                  collatorAddress={address}
                  collatorIdentity={identity}
                  collatorTotalStake={totalStake}
                  delegation={delegation}
                  config={config}
                />,
              )
            }
          >
            {'Manage'}
          </ActionButton>
        </Group>
      </Grid.Col>
    </Grid>
  ) : (
    <Box p={'md'} bg={'dark.8'} style={{ borderRadius: 20 }}>
      <Group>
        <Text size={'xs'} c={'gray.6'}>
          {position}
          {'. '}
        </Text>
        <CollatorIdenticon
          address={address}
          isActive={isActive}
          isUpcoming={isUpcoming}
        />
        <CollatorDisplay
          address={address}
          display={identity?.display}
          size={'xs'}
        />
        <UnstyledButton onMouseDown={toggle}>
          <CollapseIcon isOpen={opened} />
        </UnstyledButton>
      </Group>

      <Collapse in={opened} mt={15}>
        <Box data-testid={'my-collator-stakes'}>
          <StakeHeader />
          <Group justify={'space-between'}>
            <TokenAmount amount={delegation.manual} symbolColor={'gray.6'} />
            <TokenAmount amount={delegation.auto} symbolColor={'gray.6'} />
          </Group>
          <PercentageBars
            manualPercentageFormatted={manualPercentageFormatted}
            manualPercentage={manualPercentage}
            autoPercentageFormatted={autoPercentageFormatted}
          />
        </Box>

        <Divider mt={30} mb={30} color={theme.colors.dark[6]} />

        <Box data-testid={'my-collator-share'}>
          <Stack>
            <Text size={'sm'} c={theme.colors.gray[6]}>
              My share of the total stake
            </Text>
            <Group gap={10}>
              <Group gap={0}>
                <Text size={'sm'}>
                  {totalDelegation}
                  {' / '}
                </Text>
                <TokenAmount
                  amount={totalStake}
                  symbolColor={theme.colors.gray[6]}
                />
              </Group>

              <DelegationPercentage
                delegationPercentage={delegationPercentage}
              />
            </Group>
          </Stack>
        </Box>

        <Divider mt={30} mb={30} color={theme.colors.dark[6]} />

        <Box ata-testid={'my-collator-actions'}>
          <Stack>
            <Text size={'sm'} c={theme.colors.gray[6]}>
              Claim rewards
            </Text>
            <Group>
              <ActionButton
                w={'auto'}
                px={'md'}
                c={!manualPercentage ? 'gray.6' : 'white'}
                withArrow={false}
                disabled={
                  !manualPercentage || !manualRewards.amount || isLoading
                }
                loading={isLoading}
                onClick={() => send([address])}
              >
                {!manualPercentage ? (
                  'Compounding'
                ) : (
                  <TokenAmount amount={manualRewards} />
                )}
              </ActionButton>
              <ActionButton
                w={'auto'}
                px={'sm'}
                fw={600}
                withArrow={false}
                onClick={() =>
                  open(
                    <ManageStakingSidebar
                      collatorAddress={address}
                      collatorIdentity={identity}
                      collatorTotalStake={totalStake}
                      delegation={delegation}
                      config={config}
                    />,
                  )
                }
              >
                {'Manage'}
              </ActionButton>
            </Group>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
