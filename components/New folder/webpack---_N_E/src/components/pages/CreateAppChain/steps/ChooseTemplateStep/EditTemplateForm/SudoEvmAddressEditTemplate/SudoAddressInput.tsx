import { AddressInput } from '@/components/AddressInput';
import {
  EvmFormData,
  SubstrateFormData,
} from '@/server/router/file/file.interfaces';
import { Center, ComboboxStore } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

interface Props {
  isEthereum: boolean;
  value: string;
  form: UseFormReturnType<EvmFormData | SubstrateFormData>;
  combobox: ComboboxStore;
  accounts: InjectedAccountWithMeta[];
}

export function SudoAddressInput({
  isEthereum,
  value,
  form,
  combobox,
  accounts,
}: Props) {
  return (
    <AddressInput
      isEthereum={isEthereum}
      value={value}
      {...form.getInputProps('sudoAddress')}
      onChange={(event) => {
        form.setFieldValue('sudoAddress', event.currentTarget.value);
      }}
      onFocus={() => combobox.closeDropdown()}
      onBlur={() => combobox.closeDropdown()}
      rightSection={
        !!accounts?.length && (
          <Center
            p={4}
            bg={'dark.6'}
            style={{ borderRadius: 5 }}
            onClick={() =>
              !combobox.dropdownOpened
                ? combobox.openDropdown()
                : combobox.closeDropdown()
            }
          >
            {combobox.dropdownOpened ? (
              <IconChevronUp size={15} color="white" />
            ) : (
              <IconChevronDown size={15} color="white" />
            )}
          </Center>
        )
      }
    />
  );
}
