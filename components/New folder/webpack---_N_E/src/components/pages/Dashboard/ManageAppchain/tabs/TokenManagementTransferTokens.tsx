import { ActionButton } from '@/components/ActionButton';
import { AddressInput } from '@/components/AddressInput';
import { SidebarStack } from '@/components/Sidebar';
import { TokenAmount } from '@/components/TokenAmount';
import { TokenAmountInput } from '@/components/TokenAmountInput';
import { SudoSidebarWrapper } from '@/components/pages/Dashboard/ManageAppchain/SudoSidebarWrapper';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useAppchainConfig, useIsAppchainEvm } from '@/hooks/polkadot/appchain';
import { useFreeBalance } from '@/hooks/polkadot/common';
import { useSudoForceTransfer } from '@/hooks/polkadot/sudo';
import {
  ethereumAddressSchema,
  substrateAddressSchema,
} from '@/schema/address.schema';
import { formNumberSchema } from '@/schema/number.schema';
import { Box, Group, Text } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { toBigInt } from '@moonbeam-network/xcm-utils';
import { z } from 'zod';
import { useManageAppchainState } from '../state';
import { ManageAppchainTab } from '../state/ManageAppchain.constants';

export function TokenManagementTransferTokens() {
  const { paraId, config } = useManageAppchainState();
  const isEthereum = useIsAppchainEvm(paraId, config);
  const appchainConfig = useAppchainConfig(paraId, config);
  const { transactionSuccess } = useWalletNotifications(appchainConfig);

  const { send, isLoading } = useSudoForceTransfer(paraId, config, {
    onSuccess: (txHash, blockHash) => {
      transactionSuccess({
        txHash,
        blockHash,
        title: 'Balance was successfully transferred.',
        message: 'The tokens have been transferred to the destination account.',
      });
    },
  });

  const addressSchema = isEthereum
    ? ethereumAddressSchema
    : substrateAddressSchema;

  const form = useForm<{ from: string; to: string; amount: string }>({
    validate: zodResolver(
      z.object({
        from: addressSchema,
        to: addressSchema,
        amount: formNumberSchema(z.coerce.number().positive()),
      }),
    ),
    initialValues: { from: '', to: '', amount: '' },
  });

  const originAccountBalance = useFreeBalance(
    form.isValid('from') ? form.values.from : undefined,
    appchainConfig,
  );

  return (
    <SudoSidebarWrapper
      tab={ManageAppchainTab.TokenManagementTransfer}
      goBack={ManageAppchainTab.TokenManagement}
      goToOnProxyDisconnect={ManageAppchainTab.TokenManagement}
    >
      <form
        onSubmit={form.onSubmit(() => {
          if (!form.values.amount || !appchainConfig) return;

          send(
            form.values.from,
            form.values.to,
            toBigInt(form.values.amount, appchainConfig.decimals),
          );
        })}
      >
        <SidebarStack gap={'md'}>
          <AddressInput
            label={'From'}
            labelStyles={{ fontSize: 14 }}
            isEthereum={isEthereum}
            disabled={isLoading}
            {...form.getInputProps('from')}
          />
          <AddressInput
            label={'To'}
            labelStyles={{ fontSize: 14 }}
            isEthereum={isEthereum}
            disabled={isLoading}
            {...form.getInputProps('to')}
          />
          <Box>
            <TokenAmountInput
              label={'Amount'}
              labelStyles={{ fontSize: 14 }}
              symbol={appchainConfig?.asset.originSymbol || ''}
              value={form.values.amount}
              disabled={isLoading}
              {...form.getInputProps('amount')}
            />
            <Group gap={5} mt={5}>
              <TokenAmount
                amount={appchainConfig?.getAssetAmount(
                  originAccountBalance?.amount,
                )}
                c={'gray.6'}
              />
              <Text size={'sm'} c={'gray.6'}>
                {'available'}
              </Text>
            </Group>
          </Box>
          <ActionButton type={'submit'} withArrow={false} isLoading={isLoading}>
            {isLoading ? 'Transferring' : 'Transfer'}
          </ActionButton>
        </SidebarStack>
      </form>
    </SudoSidebarWrapper>
  );
}
