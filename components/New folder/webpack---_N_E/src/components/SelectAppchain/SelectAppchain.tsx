import { Combobox, Group, NumberInput, Text, useCombobox } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { AppchainIdenticon } from '../AppchainIdenticon';

export interface Props {
  selected: number | undefined;
  paraIds: number[];
  onSelect: (paraId: number | undefined) => void;
}

export function SelectAppchain({ selected, paraIds, onSelect }: Props) {
  const [search, setSearch] = useState('');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const filteredOptions = useMemo(
    () =>
      paraIds
        .map((item) => item.toString())
        .filter((item) => item.toString().includes(search.trim()))
        .sort((a, b) => a.localeCompare(b)),
    [paraIds, search],
  );

  const options = useMemo(
    () =>
      filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
          <Group>
            <AppchainIdenticon paraId={+item} />
            <Text>{item}</Text>
          </Group>
        </Combobox.Option>
      )),
    [filteredOptions],
  );

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        onSelect(val ? +val : undefined);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <NumberInput
          size={'lg'}
          value={search}
          allowDecimal={false}
          allowNegative={false}
          onChange={(value) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(value ? value.toString() : '');
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(selected ? selected.toString() : '');
          }}
          placeholder={'Select Appchain'}
          leftSection={
            selected && <AppchainIdenticon paraId={selected} size={24} />
          }
          rightSection={<IconChevronDown size={15} />}
          rightSectionPointerEvents={'none'}
        />
      </Combobox.Target>

      <Combobox.Dropdown bg={'dark.9'} style={{ border: 'none' }}>
        <Combobox.Options>
          {options.length > 0 ? (
            options
          ) : (
            <Combobox.Empty>{'Nothing found'}</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
