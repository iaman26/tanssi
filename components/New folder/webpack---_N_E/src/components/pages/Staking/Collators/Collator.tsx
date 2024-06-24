import { ActionButton } from '@/components/ActionButton';
import { CollapseIcon } from '@/components/CollapseIcon';
import { useSidebar } from '@/components/Sidebar/state/sidebar.hooks';
import { TokenAmount } from '@/components/TokenAmount';
import { IncreaseStakingSidebar } from '@/components/pages/Staking/Actions/IncreaseStakingSidebar';
import { CollatorDisplay } from '@/components/pages/Staking/CollatorDisplay';
import { APYInfoTooltip } from '@/components/pages/Staking/Collators/APYInfoTooltip';
import { CollatorIdenticon } from '@/components/pages/Staking/Collators/CollatorIdenticon';
import { ChainConfigProps } from '@/config';
import { Collator as ICollator } from '@/hooks/polkadot/staking';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  Box,
  Collapse,
  Grid,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface Props extends ICollator, ChainConfigProps {
  position: number;
}

export function Collator({
  address,
  identity,
  isActive,
  isUpcoming,
  position,
  total,
  self,
  delegations,
  apy,
  delegated,
  config,
}: Props) {
  const { open } = useSidebar();
  const { md } = useMediaQuery();
  const [opened, { toggle }] = useDisclosure(false);

  return md ? (
    <Grid
      role={'row'}
      columns={23}
      p={'md'}
      bg={'dark.8'}
      align={'center'}
      style={{ borderRadius: 20 }}
    >
      <Grid.Col span={4.2}>
        <Group gap={0} wrap={'nowrap'}>
          <Text size={'sm'} c={'gray.6'} w={35} style={{ flexShrink: 0 }}>
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

      <Grid.Col span={3.75}>
        <TokenAmount
          amount={delegated}
          symbolColor={'gray.6'}
          ta={'right'}
          pr={5}
        />
      </Grid.Col>

      <Grid.Col span={3.75}>
        <TokenAmount amount={self} symbolColor={'gray.6'} ta={'right'} pr={5} />
      </Grid.Col>

      <Grid.Col span={3.75}>
        <TokenAmount
          amount={total}
          symbolColor={'gray.6'}
          ta={'right'}
          pr={5}
        />
      </Grid.Col>

      <Grid.Col span={3.1} pl={'lg'} data-testid={'collator-delegations'}>
        <Text ta={'center'} size={'sm'}>
          {delegations}
        </Text>
      </Grid.Col>

      <Grid.Col span={4}>
        <Group gap={0} justify={'space-between'} wrap={'nowrap'} grow>
          <Text miw={40} size={'sm'} ta={'center'}>
            {apy > 9000 ? '>9000' : apy.toFixed(0)}
            {'%'}
          </Text>
          <ActionButton
            miw={'auto'}
            withArrow={false}
            px={'md'}
            fw={600}
            onClick={() =>
              open(
                <IncreaseStakingSidebar
                  title={'Open Staking Position'}
                  collatorAddress={address}
                  collatorIdentity={identity}
                  collatorTotalStake={total}
                  config={config}
                />,
              )
            }
          >
            {'Stake'}
          </ActionButton>
        </Group>
      </Grid.Col>
    </Grid>
  ) : (
    <Box p={'md'} bg={'dark.8'} style={{ borderRadius: 20 }}>
      <Box>
        <Group gap={0}>
          <Text size={'sm'} c={'gray.6'} w={35} style={{ flexShrink: 0 }}>
            {position}
            {'. '}
          </Text>
          <CollatorIdenticon
            address={address}
            isActive={isActive}
            isUpcoming={isUpcoming}
          />
          <CollatorDisplay address={address} display={identity?.display} />
          <UnstyledButton onMouseDown={toggle}>
            <CollapseIcon isOpen={opened} />
          </UnstyledButton>
        </Group>
      </Box>
      <Collapse in={opened} mt={25}>
        <Stack>
          <Group>
            <Text size={'sm'} c={'gray.6'}>
              Delegated stake:{' '}
            </Text>
            <TokenAmount amount={delegated} symbolColor={'gray.6'} />
          </Group>
          <Group>
            <Text size={'sm'} c={'gray.6'}>
              Self stake:{' '}
            </Text>
            <TokenAmount amount={self} symbolColor={'gray.6'} />
          </Group>
          <Group>
            <Text size={'sm'} c={'gray.6'}>
              Total staked:{' '}
            </Text>
            <TokenAmount amount={total} symbolColor={'gray.6'} />
          </Group>
          <Group>
            <Text size={'sm'} c={'gray.6'}>
              Delegations:{' '}
            </Text>
            <Text size={'sm'}>{delegations}</Text>
          </Group>
          <Group>
            <APYInfoTooltip />
            <Text size={'sm'} c={'gray.6'}>
              APY:{' '}
            </Text>
            <Text size={'sm'}>
              {apy > 9000 ? '>9000' : apy.toFixed(0)}
              {'%'}
            </Text>
          </Group>
          <ActionButton
            miw={'auto'}
            withArrow={false}
            px={'md'}
            fw={600}
            onClick={() =>
              open(
                <IncreaseStakingSidebar
                  title={'Open Staking Position'}
                  collatorAddress={address}
                  collatorIdentity={identity}
                  collatorTotalStake={total}
                  config={config}
                />,
              )
            }
          >
            {'Stake'}
          </ActionButton>
        </Stack>
      </Collapse>
    </Box>
  );
}
