import { ActionButton } from '@/components/ActionButton';
import { SidebarHeader } from '@/components/Sidebar';
import { TokenAmount } from '@/components/TokenAmount';
import { CollatorDisplayStakingAction } from '@/components/pages/Staking/Actions/CollatorDisplayStakingAction';
import { SliderStaking } from '@/components/pages/Staking/Actions/SliderStaking';
import { ChainConfigProps } from '@/config';
import { IdentityMetadata } from '@/hooks/polkadot/common/queries';
import { useSwapPool } from '@/hooks/polkadot/staking';
import { getPercentage } from '@/utils/numbers';
import { Box, Center, Group, List, Text, useMantineTheme } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { z } from 'zod';

interface Props extends ChainConfigProps {
  title: string;
  collatorAddress: string;
  collatorIdentity: IdentityMetadata | undefined;
  delegation: {
    auto: AssetAmount;
    manual: AssetAmount;
    total: AssetAmount;
  };
  goBack?: () => void;
}

export function ChangeStakingRatioSidebar({
  title,
  collatorAddress,
  collatorIdentity,
  delegation,
  config,
  goBack,
}: Props) {
  const theme = useMantineTheme();

  const { isLoading, send } = useSwapPool(config);

  const manualPercentage = getPercentage(
    delegation.manual.amount,
    delegation.total.amount,
  );

  const form = useForm<{ manualPercentage: number }>({
    validate: zodResolver(
      z.object({
        manualPercentage: z.coerce.number().int().min(0).max(100),
      }),
    ),
    initialValues: { manualPercentage: manualPercentage || 0 },
  });

  const manual = BigInt(
    delegation.total
      .toBig()
      .times(form.values.manualPercentage / 100)
      .toFixed(0),
  );
  const auto = delegation.total.amount - manual;

  const onSubmit = async () => {
    const pool =
      form.values.manualPercentage < manualPercentage
        ? 'ManualRewards'
        : 'AutoCompounding';

    const amount =
      form.values.manualPercentage < manualPercentage
        ? delegation.manual.amount - manual
        : delegation.auto.amount - auto;

    send(collatorAddress, pool, amount);
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <SidebarHeader title={title} goBack={goBack} />

      <Box
        py={'lg'}
        px={'md'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        <Text size={'sm'}>{'You can change your staking ratio.'}</Text>
        <List c={'white'} ml={'xs'} style={{ fontSize: 13 }}>
          <List.Item mt={'xs'}>
            {'Change ratio between Auto and Manual.'}
          </List.Item>
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

        <Text mt={'xl'}>{'Staking Ratio'}</Text>

        <Group mt={'xs'} justify={'space-between'}>
          <Group gap={5}>
            <Box
              w={10}
              h={10}
              bg={theme.colors.tanssiTeal[9]}
              style={{ borderRadius: '50%' }}
            />
            <Text c={'gray.6'} size={'sm'}>
              {'Manual Stake'}
            </Text>
          </Group>
          <Group gap={5}>
            <Text c={'gray.6'} size={'sm'}>
              {'Auto Stake'}
            </Text>
            <Box
              w={10}
              h={10}
              bg={theme.other.colors.amber}
              style={{ borderRadius: '50%' }}
            />
          </Group>
        </Group>

        <SliderStaking
          label={null}
          mt={5}
          percentage={form.values.manualPercentage}
          {...form.getInputProps('manualPercentage')}
        />

        <Group py={6} justify={'space-between'} gap={0}>
          <Text w={48} size={'sm'} c={theme.colors.tanssiTeal[9]}>
            {form.values.manualPercentage.toFixed(1)}
            {'%'}
          </Text>
          <Text w={48} size={'sm'} c={theme.other.colors.amber} ta={'right'}>
            {(100 - form.values.manualPercentage).toFixed(1)}
            {'%'}
          </Text>
        </Group>

        <Box mt={40}>
          <Group
            justify={'space-between'}
            style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
          >
            <Text c={'gray.6'}>{'Manual:'}</Text>
            <TokenAmount
              amount={config.getAssetAmount(manual)}
              size={'md'}
              symbolColor={'gray.6'}
              data-testid={'projected-manual-stake'}
            />
          </Group>
          <Group
            py={6}
            justify={'space-between'}
            style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
          >
            <Text c={'gray.6'}>{'Auto:'}</Text>
            <TokenAmount
              amount={config.getAssetAmount(auto)}
              size={'md'}
              symbolColor={'gray.6'}
              data-testid={'projected-auto-stake'}
            />
          </Group>
        </Box>
      </Box>

      <Center>
        <ActionButton
          type={'submit'}
          mx={'sm'}
          w={'100%'}
          disabled={
            form.values.manualPercentage.toFixed(0) ===
            manualPercentage.toFixed(0)
          }
          isLoading={isLoading}
          withArrow={false}
        >
          {isLoading ? 'Executing' : 'Execute'}
        </ActionButton>
      </Center>
    </form>
  );
}
