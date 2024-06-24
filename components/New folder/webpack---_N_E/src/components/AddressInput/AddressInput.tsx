import { IdentityIcon } from '@/components/IndentityIcon';
import { isDefined } from '@/utils/validate';
import {
  CSSProperties,
  Center,
  TextInput,
  TextInputProps,
} from '@mantine/core';

export interface Props extends TextInputProps {
  labelStyles?: CSSProperties;
  isEthereum?: boolean;
}

export function AddressInput({
  value,
  isEthereum,
  labelStyles,
  ...other
}: Props) {
  return (
    <TextInput
      placeholder={
        isDefined(isEthereum)
          ? isEthereum
            ? '0x987C17e98F1D5838940D63bd3B8BA9BC32B315a2'
            : '5FjJn2hvwogDFLhHR6ej86zDw5yi18jtHsT7HBQy9cu7tcBN'
          : undefined
      }
      spellCheck={'false'}
      autoComplete={'off'}
      leftSection={
        value && (
          <Center
            p={2}
            bg={'dark.7'}
            pos={'relative'}
            style={{ borderRadius: '50%' }}
          >
            <IdentityIcon value={value as string} size={20} />
          </Center>
        )
      }
      value={value}
      styles={{
        label: { ...labelStyles },
      }}
      {...other}
    />
  );
}
