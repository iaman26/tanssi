import { InputLabelRequired } from '@/components/InputLabelRequired';
import {
  EvmFormData,
  SubstrateFormData,
} from '@/server/router/file/file.interfaces';
import { useExtensions } from '@/state/polkadot-extension';
import {
  Box,
  Combobox,
  Input,
  InputWrapperProps,
  useCombobox,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useState } from 'react';
import { SudoAddressDropdownOptions } from './SudoAddressDropdownOptions';
import { SudoAddressDropdownTarget } from './SudoAddressDropdownTarget';
import { SudoAddressInput } from './SudoAddressInput';

interface Props extends InputWrapperProps {
  value: string;
  form: UseFormReturnType<EvmFormData | SubstrateFormData>;
  isEthereum: boolean;
}

export function SudoEvmAddressEditTemplate({
  value,
  form,
  isEthereum,
  ...others
}: Props) {
  const [isCustom, setIsCustom] = useState(false);

  const combobox = useCombobox();
  const { accounts } = useExtensions('ethereum');

  return (
    <Input.Wrapper
      label={
        <InputLabelRequired isValid={form.isValid('sudoAddress')}>
          {'Sudo'}
        </InputLabelRequired>
      }
      {...others}
      style={{ position: 'relative' }}
    >
      <Combobox
        store={combobox}
        onOptionSubmit={(address) => {
          form.setFieldValue('sudoAddress', address);
          setIsCustom(address === '');
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Box>
            {!accounts?.length || isCustom ? (
              <SudoAddressInput
                isEthereum={isEthereum}
                value={value}
                form={form}
                combobox={combobox}
                accounts={accounts}
              />
            ) : (
              <SudoAddressDropdownTarget value={value} combobox={combobox} />
            )}
          </Box>
        </Combobox.Target>

        <Combobox.Dropdown
          p={7}
          bg={'dark.6'}
          miw={{ base: 'auto', sm: 400 }}
          style={{ border: 'none' }}
        >
          <Combobox.Options>
            <SudoAddressDropdownOptions
              accounts={accounts}
              onClick={() => {
                form.clearErrors();
              }}
            />
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Input.Wrapper>
  );
}
