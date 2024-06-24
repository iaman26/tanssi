import { useProxy } from '@/components/Proxy/state/proxy.hooks';
import { useManageAppchain } from '@/components/pages/Dashboard/ManageAppchain/state';
import { useAppchainSudo } from '@/hooks/polkadot/appchain';
import { ellipsis } from '@/utils/address';
import { Group, Stack, Text } from '@mantine/core';
import { IconArrowLeft, IconLogout } from '@tabler/icons-react';
import classes from './SidebarHeader.module.css';

interface Props {
  title: string;
  showProxy?: boolean;
  goToOnProxyDisconnect?: () => void;
  goBack?: () => void;
}

export function SidebarHeader({
  title,
  showProxy = false,
  goToOnProxyDisconnect,
  goBack,
}: Props) {
  const { closeManageAppchain } = useManageAppchain();
  const { proxy, setProxy } = useProxy();
  const { isSudoAvailable } = useAppchainSudo();

  return (
    <Group
      h={45}
      px={'sm'}
      gap={5}
      align={'start'}
      style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      data-testid={'sidebar-title'}
    >
      <Group
        role={'button'}
        justify={'center'}
        align={'center'}
        w={35}
        c={'var(--mantine-color-gray-6)'}
        className={classes.arrow}
        style={{ cursor: 'pointer' }}
        onClick={goBack || closeManageAppchain}
      >
        <IconArrowLeft className={classes.arrow} stroke={1.2} size={23} />
      </Group>
      <Stack gap={0}>
        <Text>{title}</Text>
        {showProxy && proxy && (
          <Group gap={5}>
            <Text size={'xs'} c={'gray.6'}>
              {'Proxy: '}
              {ellipsis(proxy.address, 4, 8)}
            </Text>
            <IconLogout
              className={classes.logout}
              size={15}
              onClick={() => {
                setProxy();

                if (!isSudoAvailable) {
                  goToOnProxyDisconnect?.();
                }
              }}
              style={{ cursor: 'pointer' }}
            />
          </Group>
        )}
      </Stack>
    </Group>
  );
}
