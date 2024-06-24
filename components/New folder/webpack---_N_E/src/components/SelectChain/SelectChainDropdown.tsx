import { ChainKey, chainKeys, chains, isLocal } from '@/config';
import { useIsFlashboxEnabledFlag } from '@/hooks/flags/useIsFlashboxEnabledFlag';
import { useIsStagenetEnabledFlag } from '@/hooks/flags/useIsStagenetEnabledFlag';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useSetChainKey } from '@/state/chain';
import { Button, Combobox, useCombobox } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useMemo } from 'react';

export function SelectChainDropdown() {
  const { displayName } = useChainConfig();
  const setChainKey = useSetChainKey();
  const combobox = useCombobox();
  const { isEnabled: isStagenetEnabled } = useIsStagenetEnabledFlag();
  const { isEnabled: isFlashboxEnabled } = useIsFlashboxEnabledFlag();

  const options = useMemo(
    () =>
      chainKeys
        .filter((key) => key !== ChainKey.Stagebox || isStagenetEnabled)
        .filter((key) => key !== ChainKey.Flashbox || isFlashboxEnabled)
        .filter((key) => key !== ChainKey.Local || isLocal)
        .map((key) => {
          const { displayName } = chains.get(key) || {};

          return (
            <Combobox.Option
              value={key}
              key={key}
              fz={'sm'}
              c={'white'}
              px={15}
            >
              {displayName}
            </Combobox.Option>
          );
        }),
    [isStagenetEnabled, isFlashboxEnabled],
  );

  if (options.length === 1) {
    return null;
  }

  return (
    <Combobox
      store={combobox}
      width={150}
      position={'bottom-end'}
      onOptionSubmit={(key) => {
        setChainKey(key as ChainKey);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <Button
          variant={'light'}
          bg={'dark.7'}
          fz={'sm'}
          px={{ base: 'sm', sm: 'lg' }}
          rightSection={<IconChevronDown size={16} />}
          onClick={() => combobox.toggleDropdown()}
        >
          {displayName}
        </Button>
      </Combobox.Target>

      <Combobox.Dropdown p={'sm'} bg={'dark.7'} style={{ border: 'none' }}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
