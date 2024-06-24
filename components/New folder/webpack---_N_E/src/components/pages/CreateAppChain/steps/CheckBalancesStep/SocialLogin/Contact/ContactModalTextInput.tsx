import { TextInput, TextInputProps } from '@mantine/core';

export function ContactModalTextInput({ ...props }: TextInputProps) {
  return (
    <TextInput
      styles={{
        input: {
          backgroundColor: 'var(--mantine-color-dark-8)',
          border: '1px solid var(--mantine-color-gray-8)',
          height: 48,
        },
      }}
      {...props}
    />
  );
}
