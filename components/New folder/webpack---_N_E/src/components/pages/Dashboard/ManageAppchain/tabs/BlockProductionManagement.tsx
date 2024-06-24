import { ActionButton } from '@/components/ActionButton';
import { SidebarHeader } from '@/components/Sidebar';
import { TokenAmount } from '@/components/TokenAmount';
import { TokenAmountInput } from '@/components/TokenAmountInput';
import {
  useManageAppchain,
  useManageAppchainState,
  useSetActiveTab,
} from '@/components/pages/Dashboard/ManageAppchain/state';
import { ManageAppchainTab } from '@/components/pages/Dashboard/ManageAppchain/state/ManageAppchain.constants';
import {
  useAppchainTank,
  useBlockProductionFreeTime,
  useBlockProductionProjectedTime,
  useTopUpAppchain,
} from '@/hooks/polkadot/appchain';
import {
  useExistentialDeposit,
  useTanssiFreeBalance,
} from '@/hooks/polkadot/common';
import { formNumberSchema } from '@/schema/number.schema';
import { formatDuration, getDaysFromDuration } from '@/utils/date';
import {
  Box,
  Center,
  Group,
  List,
  Text,
  rgba,
  useMantineTheme,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { toBigInt } from '@moonbeam-network/xcm-utils';
import { z } from 'zod';

interface Props {
  closeOnBack?: boolean;
}

export function BlockProductionManagement({ closeOnBack = false }: Props) {
  const { paraId, config } = useManageAppchainState();
  const time = useBlockProductionFreeTime(paraId, config);
  const freeBalance = useTanssiFreeBalance(config);
  const { balance, address: tankAddress } = useAppchainTank(paraId, config);
  const existentialDeposit = useExistentialDeposit(config);
  const { closeManageAppchain } = useManageAppchain();
  const { send, getFee, isLoading } = useTopUpAppchain(config);
  const setActiveTab = useSetActiveTab();
  const theme = useMantineTheme();

  const form = useForm<{ amount: string }>({
    validate: zodResolver(
      z.object({
        amount: formNumberSchema(z.coerce.number().positive()),
      }),
    ),
    initialValues: { amount: '' },
  });

  const amount = config?.getAssetAmount(
    toBigInt(form.values.amount || 0, config.decimals),
  );
  const projectedTime = useBlockProductionProjectedTime(paraId, amount, config);

  const getMax = async () => {
    if (!freeBalance || !existentialDeposit) {
      form.setFieldError(
        'amount',
        'Something went wrong. Please try again later.',
      );

      return;
    }

    const freeBalanceMinusExistential =
      freeBalance.amount - existentialDeposit.amount;
    const fee = await getFee(tankAddress, freeBalanceMinusExistential);
    const netMaxBalance = freeBalanceMinusExistential - (fee?.amount || 0n);

    if (netMaxBalance < 0n) {
      form.setFieldError(
        'amount',
        "Amount entered isn't enough to cover transaction fee and existential deposit.",
      );

      return;
    } else {
      return config?.getAssetAmount(netMaxBalance);
    }
  };

  const onMax = async () => {
    const max = await getMax();

    if (max) {
      form.setValues({
        amount: max.toDecimal(),
      });
    }
  };

  const onSubmit = async () => {
    const max = await getMax();

    if (!max || !amount?.amount) return;

    if (amount.amount > max.amount) {
      form.setFieldError('amount', 'Amount exceeds available balance.');

      return;
    }

    send(tankAddress, amount.amount);
  };

  return (
    <>
      <SidebarHeader
        title={'Block Production'}
        goBack={() =>
          closeOnBack
            ? closeManageAppchain()
            : setActiveTab(ManageAppchainTab.Management)
        }
      />

      <Box
        py={'md'}
        px={'md'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        <Text size={'xs'}>{'You can manage production with:'}</Text>
        <List c={'white'} ml={'xs'} style={{ fontSize: 12 }}>
          <List.Item mt={5}>
            {'Funding: ensure your Appchain is running.'}
          </List.Item>
          <List.Item>
            {'Forecast: estimate your approximate runway. '}
          </List.Item>
        </List>
      </Box>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Box
          py={'md'}
          px={'md'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          <Box>
            <Group justify={'space-between'}>
              <Text c={'gray.6'} size={'sm'}>
                {'Credit:'}
              </Text>
              {time && (
                <Text c={'gray.6'} size={'sm'}>
                  <Text span c={'white'} size={'sm'}>
                    {getDaysFromDuration(time)}
                  </Text>
                  {' DAYS'}
                </Text>
              )}
            </Group>
            <Group mt={5} justify={'space-between'}>
              <Text c={'gray.6'} size={'sm'}>
                {'Balance:'}
              </Text>
              <TokenAmount
                amount={balance}
                symbolColor={'gray.6'}
                data-testid={'projected-auto-stake'}
              />
            </Group>
          </Box>

          <TokenAmountInput
            mt={'sm'}
            label={'Enter amount'}
            labelStyles={{ fontSize: 14 }}
            disabled={isLoading}
            value={form.values.amount}
            symbol={config?.asset.originSymbol || ''}
            onMax={onMax}
            {...form.getInputProps('amount')}
          />
          <Group mt={5} gap={5} align={'end'}>
            <TokenAmount amount={freeBalance} c={'gray.6'} />
            <Text size={'sm'} c={'gray.6'}>
              {'available'}
            </Text>
          </Group>
        </Box>

        <Text
          size={'xl'}
          py={'md'}
          px={'md'}
          ta={'center'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          {'Projected Forecast'}
        </Text>

        <Text
          size={'xs'}
          c={'gray.6'}
          py={'md'}
          px={'md'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          {
            'Projected horizon is estimated by current block cost and production assignments, fluctuations are possible due to changes in block production demand.'
          }
        </Text>

        <Box
          py={'md'}
          px={'md'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          <Text size={'sm'} c={'white'}>
            {'Current Cost'}
          </Text>
          <Group mt={5} justify={'space-between'}>
            <Text c={'gray.6'} size={'sm'}>
              {'Per block:'}
            </Text>
            <TokenAmount
              amount={config?.fees.costPerBlock}
              symbolColor={'gray.6'}
              data-testid={'projected-auto-stake'}
            />
          </Group>
          <Group mt={5} justify={'space-between'}>
            <Text c={'gray.6'} size={'sm'}>
              {'Per session:'}
            </Text>
            <TokenAmount
              amount={config?.fees.costPerSession}
              symbolColor={'gray.6'}
              data-testid={'projected-auto-stake'}
            />
          </Group>
        </Box>

        <Box py={'md'} px={'md'}>
          <Text size={'sm'} c={'white'}>
            {'Projected Forecast'}
          </Text>
          <Group mt={5} justify={'space-between'}>
            <Text c={'gray.6'} size={'sm'}>
              {'Date:'}
            </Text>
            {projectedTime && (
              <Text
                py={5}
                px={'xs'}
                c={theme.other.colors.orange}
                bg={rgba(theme.other.colors.orange, 0.1)}
                size={'sm'}
                style={{ borderRadius: 8 }}
              >
                {new Date(Date.now() + projectedTime).toLocaleDateString()}
              </Text>
            )}
          </Group>
          <Group mt={'xs'} justify={'space-between'}>
            <Text c={'gray.6'} size={'sm'}>
              {'Days:'}
            </Text>
            {projectedTime && (
              <Text
                py={5}
                px={'xs'}
                c={theme.other.colors.orange}
                bg={rgba(theme.other.colors.orange, 0.1)}
                size={'sm'}
                style={{ borderRadius: 8 }}
              >
                {formatDuration(projectedTime)}
              </Text>
            )}
          </Group>
        </Box>

        <Center>
          <ActionButton
            type={'submit'}
            mt={'md'}
            mx={'sm'}
            w={'100%'}
            isLoading={isLoading}
            withArrow={false}
          >
            {'Top Up'}
          </ActionButton>
        </Center>
      </form>
    </>
  );
}
