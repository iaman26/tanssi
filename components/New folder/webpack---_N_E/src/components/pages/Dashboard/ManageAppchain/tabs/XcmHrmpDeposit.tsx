import { ActionButton } from '@/components/ActionButton';
import { CopyIcon } from '@/components/CopyIcon';
import { SidebarAlert, SidebarHeader } from '@/components/Sidebar';
import { TokenAmount } from '@/components/TokenAmount';
import { TokenAmountInput } from '@/components/TokenAmountInput';
import { useFreeBalance, useTransferKeepAlive } from '@/hooks/polkadot/common';
import { useHasEnoughHrmpOpenChannelBalance } from '@/hooks/polkadot/xcm';
import { useRelaySovereignAddress } from '@/hooks/useRelaySovereignAddress';
import { formNumberSchema } from '@/schema/number.schema';
import { useAddress } from '@/state/user';
import { ellipsis } from '@/utils/address';
import { Box, Group, Text, useMantineTheme } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { toBigInt } from '@moonbeam-network/xcm-utils';
import { z } from 'zod';
import { useManageAppchainState, useSetActiveTab } from '../state';
import {
  ManageAppchainTab,
  getTabInfo,
} from '../state/ManageAppchain.constants';

export function XcmHrmpDeposit() {
  const setActiveTab = useSetActiveTab();
  const theme = useMantineTheme();
  const address = useAddress();
  const { paraId, config } = useManageAppchainState();
  const balance = useFreeBalance(address, config?.relay);
  const sovereignAddress = useRelaySovereignAddress(paraId);
  const sovereignBalance = useFreeBalance(sovereignAddress, config?.relay);
  const hasEnoughBalance = useHasEnoughHrmpOpenChannelBalance(paraId, config);

  const { isLoading, send, getMax } = useTransferKeepAlive(
    address,
    config?.relay,
    {
      onSuccess: () => {
        setActiveTab(ManageAppchainTab.XcmHrmpChannels);
      },
    },
  );

  const form = useForm<{ amount: string }>({
    validate: zodResolver(
      z.object({
        amount: formNumberSchema(z.coerce.number().positive()),
      }),
    ),
    initialValues: { amount: '' },
  });

  const getAmount = () =>
    toBigInt(form.values.amount || 0, config?.decimals || 12);

  const onMax = async () => {
    const max = await getMax();

    if (max) {
      form.setValues({
        amount: max.toDecimal(),
      });
    }
  };

  const onSubmit = async () => {
    const amount = getAmount();

    if (!amount || !sovereignAddress) return;

    const max = await getMax();

    if (!max) {
      form.setFieldError(
        'amount',
        'Something went wrong. Please try again later.',
      );

      return;
    }

    if (amount > max.amount) {
      form.setFieldError('amount', 'Amount exceeds available balance.');

      return;
    }

    send(sovereignAddress, amount);
  };

  return (
    <>
      <SidebarHeader
        title={getTabInfo(ManageAppchainTab.XcmHrmpDeposit).title}
        goBack={() => setActiveTab(ManageAppchainTab.Xcm)}
      />
      {!hasEnoughBalance && (
        <Box
          pb={'lg'}
          px={'sm'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          <SidebarAlert
            variant={'info'}
            title={
              'You need a balance on your sovereign account to open XCM channels.'
            }
          />
        </Box>
      )}
      <Box px={'md'} mt={'lg'}>
        <Text>{'Address'}</Text>
        <Group
          gap={5}
          h={40}
          mt={'sm'}
          px={'sm'}
          bg={'dark.6'}
          style={{ borderRadius: 10 }}
          justify={'space-between'}
        >
          <Text>{ellipsis(sovereignAddress, 13, 7)}</Text>
          <CopyIcon
            value={sovereignAddress}
            c={theme.other.colors.orange}
            size={16}
          />
        </Group>
        <Group mt={5} gap={5} align={'end'}>
          <Text size={'xs'} c={'gray.6'}>
            {'Balance: '}
          </Text>
          <TokenAmount amount={sovereignBalance} c={'gray.6'} size={'xs'} />
        </Group>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TokenAmountInput
            mt={'xl'}
            label={'Enter amount'}
            symbol={config?.relay.asset.originSymbol || ''}
            disabled={isLoading}
            onMax={onMax}
            value={form.values.amount}
            {...form.getInputProps('amount')}
          />
          <TokenAmount mt={5} amount={balance} c={'gray.6'} size={'xs'} />
          <ActionButton
            mt={'xl'}
            type={'submit'}
            withArrow={false}
            isLoading={isLoading}
            fullWidth
          >
            {'Deposit'}
          </ActionButton>
        </form>
      </Box>
    </>
  );
}
