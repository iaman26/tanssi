import { IdentityIcon } from '@/components/IndentityIcon';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ellipsis } from '@/utils/address';
import { Center, Group, Stack, Text } from '@mantine/core';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { capitalize } from 'lodash';

interface Props {
  address: string;
  meta: InjectedAccountWithMeta['meta'];
}

export function SudoAddressDropdownOption({ address, meta }: Props) {
  const { xs } = useMediaQuery();

  return (
    <Group wrap="nowrap" gap={7}>
      <Center
        p={2}
        bg={'dark.7'}
        pos={'relative'}
        style={{ borderRadius: '50%' }}
      >
        <IdentityIcon value={address} size={20} />
      </Center>
      <Stack gap={0}>
        <Text size="sm" lh={1.2}>
          {capitalize(meta.source)} {meta.name}
        </Text>
        <Text size="sm" c={'gray.6'} lh={1.2}>
          {ellipsis(address, xs ? 12 : 8, xs ? 8 : 4)}
        </Text>
      </Stack>
    </Group>
  );
}
