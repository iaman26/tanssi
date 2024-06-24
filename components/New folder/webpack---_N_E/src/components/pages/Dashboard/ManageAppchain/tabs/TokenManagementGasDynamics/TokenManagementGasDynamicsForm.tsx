import { ActionButton } from '@/components/ActionButton';
import { SidebarStack } from '@/components/Sidebar';
import { useManageAppchainState } from '@/components/pages/Dashboard/ManageAppchain/state';
import { useSudoSetBaseFee } from '@/hooks/polkadot/sudo';
import { formNumberSchema } from '@/schema/number.schema';
import { NumberInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

interface Props {
  baseFeePerGas: bigint;
  elasticity: bigint;
}

export function TokenManagementGasDynamicsForm({
  baseFeePerGas,
  elasticity,
}: Props) {
  const { paraId, config } = useManageAppchainState();
  const { send, isLoading } = useSudoSetBaseFee(paraId, config);

  const form = useForm<{ baseFeePerGas: string; elasticity: string }>({
    validate: zodResolver(
      z.object({
        baseFeePerGas: z.coerce.string().min(10).max(20),
        elasticity: formNumberSchema(z.coerce.number().positive().max(999999)),
      }),
    ),
    initialValues: {
      baseFeePerGas: baseFeePerGas.toString(),
      elasticity: elasticity.toString(),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(() => {
        if (!form.values.baseFeePerGas || !form.values.elasticity) return;

        send(BigInt(form.values.baseFeePerGas), BigInt(form.values.elasticity));
      })}
    >
      <SidebarStack gap={'md'}>
        <NumberInput
          hideControls
          allowNegative={false}
          allowDecimal={false}
          label={'Base fee per gas (wei)'}
          {...form.getInputProps('baseFeePerGas')}
        />
        <NumberInput
          hideControls
          allowNegative={false}
          allowDecimal={false}
          label={'Elasticity (permill)'}
          maxLength={6}
          {...form.getInputProps('elasticity')}
        />
        <ActionButton type={'submit'} withArrow={false} isLoading={isLoading}>
          {isLoading ? 'Updating' : 'Update dynamics'}
        </ActionButton>
      </SidebarStack>
    </form>
  );
}
