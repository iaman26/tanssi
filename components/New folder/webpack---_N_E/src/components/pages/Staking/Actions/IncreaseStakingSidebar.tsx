import { ActionButton } from '@/components/ActionButton';
import { SidebarAlert, SidebarHeader } from '@/components/Sidebar';
import { TokenAmount } from '@/components/TokenAmount';
import { TokenAmountInput } from '@/components/TokenAmountInput/TokenAmountInput';
import { CollatorDisplayStakingAction } from '@/components/pages/Staking/Actions/CollatorDisplayStakingAction';
import { ProjectedStakePosition } from '@/components/pages/Staking/Actions/ProjectedStakePosition';
import { SliderStaking } from '@/components/pages/Staking/Actions/SliderStaking';
import { ChainConfigProps } from '@/config';
import { useProxiedFreeBalance } from '@/hooks/polkadot/common';
import {
  IdentityMetadata,
  useExistentialDeposit,
} from '@/hooks/polkadot/common/queries';
import { useRequestDelegateAuto } from '@/hooks/polkadot/staking';
import { formNumberSchema } from '@/schema/number.schema';
import { useAddress } from '@/state/user';
import { splitByPercentage } from '@/utils/numbers';
import { Box, Center, Group, List, Text, useMantineTheme } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { toBigInt } from '@moonbeam-network/xcm-utils';
import { useCallback } from 'react';
import { z } from 'zod';

interface Props extends ChainConfigProps {
  title: string;
  collatorAddress: string;
  collatorIdentity: IdentityMetadata | undefined;
  collatorTotalStake: AssetAmount;
  delegation?: {
    manual: AssetAmount;
    auto: AssetAmount;
    total: AssetAmount;
  };
  goBack?: () => void;
}

export function IncreaseStakingSidebar({
  title,
  collatorAddress,
  collatorIdentity,
  collatorTotalStake,
  delegation,
  config,
  goBack,
}: Props) {
  const address = useAddress();
  const freeBalance = useProxiedFreeBalance(config);
  const existentialDeposit = useExistentialDeposit(config);
  const { isLoading, send, getFee } = useRequestDelegateAuto(config);
  const theme = useMantineTheme();

  const form = useForm<{ amount: string; autoPercentage: number }>({
    validate: zodResolver(
      z.object({
        amount: formNumberSchema(z.coerce.number().positive()),
        autoPercentage: z.coerce.number().int().min(0).max(100),
      }),
    ),
    initialValues: { amount: '', autoPercentage: 50 },
  });

  const amountBigInt = toBigInt(form.values.amount || 0, config.decimals);
  const amount = config.getAssetAmount(amountBigInt);
  const [auto, manual] = splitByPercentage(
    amount.amount,
    form.values.autoPercentage,
  );
  const autoAssetAmount = config.getAssetAmount(
    auto + (delegation?.auto.amount || 0n),
  );
  const manualAssetAmount = config.getAssetAmount(
    manual + (delegation?.manual.amount || 0n),
  );

  const getMax = useCallback(async () => {
    const fee = await getFee(
      collatorAddress,
      amount.amount,
      form.values.autoPercentage,
    );

    if (!fee || !freeBalance || !existentialDeposit) {
      form.setFieldError(
        'amount',
        'Something went wrong. Please try again later.',
      );

      return;
    }

    const netAmount =
      freeBalance.amount - fee.amount - existentialDeposit.amount;

    if (netAmount < 0n) {
      form.setFieldError(
        'amount',
        "Amount entered isn't enough to cover transaction fee and existential deposit.",
      );

      return;
    } else {
      return config.getAssetAmount(netAmount);
    }
  }, [
    config,
    collatorAddress,
    form,
    freeBalance,
    amount.amount,
    existentialDeposit,
    getFee,
  ]);

  const onMax = useCallback(async () => {
    const max = await getMax();

    if (max) {
      form.setValues({
        amount: max.toDecimal(),
      });
    }
  }, [form, getMax]);

  const onSubmit = async () => {
    const max = await getMax();

    if (!max) return;

    if (amount.amount > max.amount) {
      form.setFieldError('amount', 'Amount exceeds available balance.');

      return;
    }

    send(collatorAddress, amount.amount, form.values.autoPercentage);
  };

  return (
    <>
      <SidebarHeader title={title} goBack={goBack} />

      <Box
        py={'md'}
        px={'md'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        {address ? (
          <>
            <Text size={'sm'}>{'You can open a staking position with:'}</Text>
            <List c={'white'} ml={'xs'} style={{ fontSize: 13 }}>
              <List.Item mt={5}>
                {'Auto: compounding to increase position.'}
              </List.Item>
              <List.Item>{'Manual: claimable upon distribution.'}</List.Item>
            </List>
          </>
        ) : (
          <SidebarAlert
            title={'Connect Wallet'}
            description={'Please connect your wallet to stake'}
          />
        )}
      </Box>

      <form
        onSubmit={form.onSubmit(onSubmit)}
        style={{ opacity: !address ? 0.5 : undefined }}
      >
        <Box
          py={'md'}
          px={'md'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          <CollatorDisplayStakingAction
            address={collatorAddress}
            identity={collatorIdentity}
          />
          <TokenAmountInput
            mt={'md'}
            label={'Amount'}
            value={form.values.amount}
            symbol={config.asset.originSymbol}
            onMax={onMax}
            disabled={!address}
            {...form.getInputProps('amount')}
          />
          {address && (
            <>
              <Group mt={5} gap={5} align={'end'}>
                <TokenAmount amount={freeBalance} c={'gray.6'} />
                <Text size={'sm'} c={'gray.6'}>
                  {'available'}
                </Text>
              </Group>
              <Text mt={'xs'}>{'Set auto-compounding rewards'}</Text>
              <SliderStaking
                rightColor={theme.other.colors.midnightBlue}
                percentage={form.values.autoPercentage}
                {...form.getInputProps('autoPercentage')}
              />
            </>
          )}
        </Box>

        <ProjectedStakePosition
          amount={amount}
          manualAssetAmount={manualAssetAmount}
          autoAssetAmount={autoAssetAmount}
          autoPercentage={form.values.autoPercentage}
          collatorAddress={collatorAddress}
          collatorTotalStake={collatorTotalStake}
          config={config}
        />

        <Center>
          <ActionButton
            type={'submit'}
            mx={'sm'}
            w={'100%'}
            isLoading={isLoading}
            withArrow={false}
            disabled={!address}
          >
            {isLoading ? 'Executing' : 'Execute'}
          </ActionButton>
        </Center>
      </form>
    </>
  );
}
