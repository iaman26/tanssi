import { ProxyDropdownRow } from '@/components/Proxy/ProxyDropdownRow';
import { useProxy } from '@/components/Proxy/state/proxy.hooks';
import { ProxyType } from '@/components/Proxy/state/proxy.interfaces';
import { ChainConfig } from '@/config';
import { useProxiedAccounts } from '@/hooks/useProxiedAccounts';
import { ellipsis } from '@/utils/address';
import {
  Center,
  Combobox,
  Group,
  Stack,
  Text,
  useCombobox,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

interface Props {
  address: string;
  proxyType: ProxyType;
  config: ChainConfig;
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: FIXME: Do not use "Proxy" to declare a function - use another name.
export function Proxy({ address, proxyType, config }: Props) {
  const combobox = useCombobox();
  const { proxy, setProxy } = useProxy();
  const { accounts } = useProxiedAccounts(address, proxyType, config);

  return (
    <Stack h={40} px={'xs'} align={'end'} gap={'xs'}>
      <Combobox store={combobox} position={'bottom-end'}>
        <Combobox.Target>
          <Group
            gap={5}
            style={{ cursor: 'default' }}
            onClick={() => combobox.toggleDropdown()}
          >
            {proxy?.proxiedAddress && <Text c={'gray.6'}>{'Proxy: '}</Text>}
            <Text>
              {proxy
                ? ellipsis(proxy.proxiedAddress, 10, 6)
                : 'Use as proxy account'}
            </Text>
            <Center
              ml={5}
              w={20}
              h={20}
              bg={'dark.6'}
              style={{ borderRadius: 10 }}
            >
              <IconChevronDown size={15} color={'white'} />
            </Center>
          </Group>
        </Combobox.Target>

        <Combobox.Dropdown
          p={'sm'}
          bg={'dark.6'}
          miw={370}
          style={{ border: 'none' }}
        >
          <Combobox.Options>
            {accounts?.length ? (
              accounts.map(({ address: proxiedAddress, proxyType }) => (
                <ProxyDropdownRow
                  key={proxiedAddress}
                  bg={'dark.5'}
                  address={proxiedAddress}
                  checked={proxy?.proxiedAddress === proxiedAddress}
                  onChange={() => {
                    setProxy(
                      proxy?.proxiedAddress === proxiedAddress
                        ? undefined
                        : { address, proxyType, proxiedAddress },
                    );
                    combobox.closeDropdown();
                  }}
                />
              ))
            ) : (
              <Center>
                <Text c={'gray.6'}>{'No proxy found.'}</Text>
              </Center>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Stack>
  );
}
