import { ActionButton } from '@/components/ActionButton';
import { SidebarHeader } from '@/components/Sidebar';
import { TokenAmount } from '@/components/TokenAmount';
import { TokenAmountInput } from '@/components/TokenAmountInput';
import { CollatorDisplayStakingAction } from '@/components/pages/Staking/Actions/CollatorDisplayStakingAction';
import { ProjectedStakePosition } from '@/components/pages/Staking/Actions/ProjectedStakePosition';
import { SliderStaking } from '@/components/pages/Staking/Actions/SliderStaking';
import { ChainConfigProps } from '@/config';
import { IdentityMetadata } from '@/hooks/polkadot/common/queries';
import { useRequestUndelegateInBatch } from '@/hooks/polkadot/staking';
import { formNumberSchema } from '@/schema/number.schema';
import { getPercentage } from '@/utils/numbers';
import { Box, Center, Group, List, Text, useMantineTheme } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { toBigInt } from '@moonbeam-network/xcm-utils';
import { z } from 'zod';

interface Props extends ChainConfigProps {
  title: string;
  collatorAddress: string;
  collatorIdentity: IdentityMetadata | undefined;
  collatorTotalStake: AssetAmount;
  delegation: {
    manual: AssetAmount;
    auto: AssetAmount;
    total: AssetAmount;
  };
  goBack?: () => void;
}

export function DecreaseStakingSidebar({
  title,
  collatorAddress,
  collatorIdentity,
  collatorTotalStake,
  delegation,
  config,
  goBack,
}: Props) {
  const { isLoading, send } = useRequestUndelegateInBatch(config);
  const theme = useMantineTheme();

  const form = useForm<{
    autoAmount: string;
    manualAmount: string;
  }>({
    validate: zodResolver(
      z.object({
        autoAmount: formNumberSchema(z.coerce.number()),
        manualAmount: formNumberSchema(z.coerce.number()),
      }),
    ),
    initialValues: {
      autoAmount: '',
      manualAmount: '',
    },
  });

  const autoAmountBigInt = toBigInt(
    form.values.autoAmount || 0,
    config.decimals,
  );
  const manualAmountBigInt = toBigInt(
    form.values.manualAmount || 0,
    config.decimals,
  );

  const autoSliderPercentage = getPercentage(
    autoAmountBigInt,
    delegation.auto.amount,
    2,
  );

  const manualSliderPercentage = getPercentage(
    manualAmountBigInt,
    delegation.manual.amount,
  );

  const remainingManualAssetAmount = config.getAssetAmount(
    delegation.manual.amount - manualAmountBigInt,
  );
  const remainingAutoAssetAmount = config.getAssetAmount(
    delegation.auto.amount - autoAmountBigInt,
  );
  const remainingAutoPercentage = getPercentage(
    remainingAutoAssetAmount.amount,
    remainingManualAssetAmount.amount + remainingAutoAssetAmount.amount,
  );

  const onSubmit = async () => {
    const maxManual = delegation.manual;
    const maxAuto = delegation.auto;

    if (manualAmountBigInt > maxManual.amount) {
      form.setFieldError(
        'manualAmount',
        'Manual amount exceeds current amount.',
      );

      return;
    }

    if (autoAmountBigInt > maxAuto.amount) {
      form.setFieldError('autoAmount', 'Auto amount exceeds current amount.');

      return;
    }

    send(collatorAddress, manualAmountBigInt, autoAmountBigInt);
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <SidebarHeader title={title} goBack={goBack} />

      <Box
        py={'md'}
        px={'md'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        <Text size={'sm'}>{'Decrease your staking position in:'}</Text>
        <List c={'white'} ml={'xs'} style={{ fontSize: 13 }}>
          <List.Item mt={5}>{'Auto-compounding stake.'}</List.Item>
          <List.Item>{'Manual claimable rewards stake.'}</List.Item>
        </List>
      </Box>

      <Box
        py={'md'}
        px={'md'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        <CollatorDisplayStakingAction
          address={collatorAddress}
          identity={collatorIdentity}
        />

        {!!delegation.auto.amount && (
          <>
            <TokenAmountInput
              mt={'md'}
              label={'Decrease Auto Stake'}
              value={form.values.autoAmount}
              symbol={config.asset.originSymbol}
              onMax={() =>
                form.setValues({ autoAmount: delegation.auto.toDecimal() })
              }
              {...form.getInputProps('autoAmount')}
            />
            <Group gap={5}>
              <TokenAmount
                py={5}
                c={'gray.6'}
                size={'sm'}
                amount={remainingAutoAssetAmount}
              />
              <Text size={'sm'} c={'gray.6'}>
                {'staked'}
              </Text>
            </Group>
            <SliderStaking
              leftColor={theme.other.colors.coralRed}
              rightColor={theme.other.colors.mahoganyRed}
              percentage={autoSliderPercentage}
              onChange={(value) => {
                form.setValues({
                  autoAmount: config
                    .getAssetAmount(
                      (delegation.auto.amount * BigInt(value)) / 100n,
                    )
                    .toDecimal(),
                });
              }}
            />
          </>
        )}

        {!!delegation.manual.amount && (
          <>
            <TokenAmountInput
              mt={'lg'}
              label={'Decrease Manual Stake'}
              value={form.values.manualAmount}
              symbol={config.asset.originSymbol}
              onMax={() =>
                form.setValues({ manualAmount: delegation.manual.toDecimal() })
              }
              {...form.getInputProps('manualAmount')}
            />
            <Group gap={5}>
              <TokenAmount
                py={5}
                c={'gray.6'}
                size={'sm'}
                amount={remainingManualAssetAmount}
              />
              <Text size={'sm'} c={'gray.6'}>
                {'staked'}
              </Text>
            </Group>
            <SliderStaking
              leftColor={theme.other.colors.coralRed}
              rightColor={theme.other.colors.mahoganyRed}
              percentage={manualSliderPercentage}
              onChange={(value) => {
                form.setValues({
                  manualAmount: config
                    .getAssetAmount(
                      (delegation.manual.amount * BigInt(value)) / 100n,
                    )
                    .toDecimal(),
                });
              }}
            />
          </>
        )}
      </Box>

      <ProjectedStakePosition
        amount={config.getAssetAmount(manualAmountBigInt + autoAmountBigInt)}
        autoAssetAmount={remainingAutoAssetAmount}
        manualAssetAmount={remainingManualAssetAmount}
        collatorAddress={collatorAddress}
        collatorTotalStake={collatorTotalStake}
        autoPercentage={remainingAutoPercentage}
        config={config}
        isDecrease
      />

      <Center>
        <ActionButton
          type={'submit'}
          mx={'sm'}
          w={'100%'}
          isLoading={isLoading}
          withArrow={false}
          disabled={!manualAmountBigInt && !autoAmountBigInt}
        >
          {isLoading ? 'Executing' : 'Execute'}
        </ActionButton>
      </Center>
    </form>
  );
}
