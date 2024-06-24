import { Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Props {
  isValid: boolean;
  children: ReactNode;
}

export function InputLabelRequired({ isValid, children }: Props) {
  return (
    <>
      {children}
      {isValid ? (
        <IconCheck
          size={15}
          style={{ marginLeft: 3 }}
          color={'var(--mantine-color-tanssiTeal-9)'}
        />
      ) : (
        <Text c={'red.9'} span>
          {' *'}
        </Text>
      )}
    </>
  );
}
