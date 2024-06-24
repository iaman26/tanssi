import { ellipsis } from '@/utils/address';
import { Checkbox, CheckboxProps, useMantineTheme } from '@mantine/core';

interface Props extends CheckboxProps {
  address: string;
}

export function ProxyDropdownRow({ address, ...others }: Props) {
  const theme = useMantineTheme();

  return (
    <Checkbox
      labelPosition={'left'}
      label={ellipsis(address, 14, 12)}
      p={'xs'}
      bg={'dark.6'}
      c={'tanssiTeal.9'}
      color={'dark.9'}
      {...others}
      style={{
        ...others.style,
        borderRadius: 12,
      }}
      styles={{
        ...others.styles,
        body: { justifyContent: 'space-between', gap: 10 },
        labelWrapper: { flexGrow: 1 },
        label: { color: 'white', textAlign: 'center', fontWeight: 500 },
        input: {
          backgroundColor: theme.other.colors.obsidian,
          borderWidth: 0,
          borderRadius: 5,
        },
        icon: { width: 9 },
      }}
    />
  );
}
