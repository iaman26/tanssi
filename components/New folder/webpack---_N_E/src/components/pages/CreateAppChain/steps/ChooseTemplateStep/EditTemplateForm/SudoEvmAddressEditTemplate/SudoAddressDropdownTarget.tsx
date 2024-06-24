import { IdentityIcon } from '@/components/IndentityIcon';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ellipsis } from '@/utils/address';
import { Center, ComboboxStore, Group, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

interface Props {
  value: string;
  combobox: ComboboxStore;
}

export function SudoAddressDropdownTarget({ value, combobox }: Props) {
  const { xs } = useMediaQuery();

  return (
    <Group
      gap={5}
      h={36}
      px={'xs'}
      bg={'dark.6'}
      justify="space-between"
      onClick={() => combobox.toggleDropdown()}
      style={{ borderRadius: 10, cursor: 'default' }}
      wrap="nowrap"
    >
      {value ? (
        <Group gap={5}>
          <Center
            p={2}
            bg={'dark.7'}
            pos={'relative'}
            style={{ borderRadius: '50%' }}
          >
            <IdentityIcon value={value as string} size={20} />
          </Center>
          <Text size="sm">{ellipsis(value, xs ? 12 : 8, xs ? 8 : 4)}</Text>
        </Group>
      ) : (
        <Text size="sm">{'Select Wallet Address'}</Text>
      )}

      {combobox.dropdownOpened ? (
        <IconChevronUp size={15} color="white" />
      ) : (
        <IconChevronDown size={15} color="white" />
      )}
    </Group>
  );
}
