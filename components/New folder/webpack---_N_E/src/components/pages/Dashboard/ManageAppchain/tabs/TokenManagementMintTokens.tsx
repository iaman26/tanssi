import { ActionButton } from '@/components/ActionButton';
import { AddressInput } from '@/components/AddressInput';
import { SidebarStack } from '@/components/Sidebar';
import { TokenAmountInput } from '@/components/TokenAmountInput';
import { SudoSidebarWrapper } from '@/components/pages/Dashboard/ManageAppchain/SudoSidebarWrapper';
import { useWalletNotifications } from '@/hooks/notifications/useWalletNotifications';
import { useAppchainConfig, useIsAppchainEvm } from '@/hooks/polkadot/appchain';
import { useFreeBalance } from '@/hooks/polkadot/common';
import { useSudoForceSetBalance } from '@/hooks/polkadot/sudo';
import {
  ethereumAddressSchema,
  substrateAddressSchema,
} from '@/schema/address.schema';
import { formNumberSchema } from '@/schema/number.schema';
import { useForm, zodResolver } from '@mantine/form';
import { toBigInt } from '@moonbeam-network/xcm-utils';
import { z } from 'zod';
import { useManageAppchainState } from '../state';
import { ManageAppchainTab } from '../state/ManageAppchain.constants';

export function TokenManagementMintTokens() {
  const { paraId, config } = useManageAppchainState();
  const isEthereum = useIsAppchainEvm(paraId, config);
  const appchainConfig = useAppchainConfig(paraId, config);
  const { transactionSuccess } = useWalletNotifications(appchainConfig);

  const { send, isLoading } = useSudoForceSetBalance(paraId, config, {
    onSuccess: (txHash, blockHash) => {
      transactionSuccess({
        txHash,
        blockHash,
        title: 'You have successfully minted tokens.',
        message:
          'The tokens have been minted and sent to the destination account.',
      });
    },
  });

  const form = useForm<{ address: string; amount: string }>({
    validate: zodResolver(
      z.object({
        address: isEthereum ? ethereumAddressSchema : substrateAddressSchema,
        amount: formNumberSchema(z.coerce.number().positive()),
      }),
    ),
    initialValues: { address: '', amount: '' },
  });

  const destAccountBalance = useFreeBalance(
    form.isValid('address') ? form.values.address : undefined,
    appchainConfig,
  );

  return (
    <SudoSidebarWrapper
      tab={ManageAppchainTab.TokenManagementMint}
      goBack={ManageAppchainTab.TokenManagement}
      goToOnProxyDisconnect={ManageAppchainTab.TokenManagement}
    >
      <form
        onSubmit={form.onSubmit(() => {
          if (!form.values.amount || !appchainConfig || !destAccountBalance)
            return;

          send(
            form.values.address,
            destAccountBalance.amount +
              toBigInt(form.values.amount, appchainConfig.decimals),
          );
        })}
      >
        <SidebarStack gap={'md'}>
          <AddressInput
            label={'Address'}
            labelStyles={{ fontSize: 14 }}
            isEthereum={isEthereum}
            disabled={isLoading}
            {...form.getInputProps('address')}
          />
          <TokenAmountInput
            label={'Amount'}
            labelStyles={{ fontSize: 14 }}
            symbol={appchainConfig?.asset.originSymbol || ''}
            value={form.values.amount}
            disabled={isLoading}
            {...form.getInputProps('amount')}
          />
          <ActionButton type={'submit'} withArrow={false} isLoading={isLoading}>
            {isLoading ? 'Minting' : 'Mint'}
          </ActionButton>
        </SidebarStack>
      </form>
    </SudoSidebarWrapper>
  );
}
