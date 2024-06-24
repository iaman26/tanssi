import { ActionButton } from '@/components/ActionButton';
import { useExtensions } from '@/state/polkadot-extension';
import { useAddress, useConnect } from '@/state/user';
import {
  ActionIcon,
  Alert,
  Box,
  Group,
  Image,
  Loader,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import NextImage from 'next/image';
import { useMemo, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { EXTENSIONS, ExtensionInfo } from '../ConnectWalletModal.constants';
import { Tab } from '../ConnectWalletModal.interfaces';
import { AccountButton } from './AccountButton/AccountButton';

export interface Props {
  setActiveTab(tab: Tab): void;
}

export function AccountsTab({ setActiveTab }: Props) {
  const address = useAddress();
  const [lastSelectedAddress, setLastSelectedAddress] = useState<string>();
  const { isConnecting, connect } = useConnect();
  const { accounts, extension, isLoading, error, setExtension } =
    useExtensions('sr25519');

  const [isWaiting, setIsWaiting] = useState(accounts.length ? false : true);
  const isLoadingTimeout = isLoading || isWaiting;

  const info = useMemo(
    () => EXTENSIONS.find((ext) => ext.key === extension) as ExtensionInfo,
    [extension],
  );

  const { clear, start } = useTimeout(() => setIsWaiting(false), 300, {
    autoInvoke: true,
  });

  const sortedAccounts = useMemo(
    () =>
      accounts.sort((a, b): number => {
        if (a.address === address) {
          return -1;
        }

        if (b.address === address) {
          return 1;
        }

        return (a.meta.name || '').localeCompare(b.meta.name || '');
      }),
    [accounts, address],
  );

  return (
    <Stack gap={'lg'}>
      <Group justify={'space-between'} align={'start'}>
        <ActionIcon
          mt={-5}
          c={'white'}
          variant={'transparent'}
          onClick={() => setActiveTab(Tab.Extensions)}
        >
          <FaArrowLeft />
        </ActionIcon>
        <Stack align={'center'}>
          <Box>
            <Image
              component={NextImage}
              alt={info.name}
              src={info.logo}
              fit={'scale-down'}
              width={40}
              height={40}
            />
          </Box>
          <Box>
            <Text ta={'center'} fw={500}>
              {info.name}
            </Text>
          </Box>
          {isLoadingTimeout && (
            <Loader size={20} type={'oval'} color={`rgb(${info.color})`} />
          )}
        </Stack>
        <ActionIcon
          mt={-5}
          c={'white'}
          variant={'transparent'}
          onClick={modals.closeAll}
        >
          <IoClose size={24} />
        </ActionIcon>
      </Group>
      {error && !isLoadingTimeout && (
        <Box>
          <Alert title={'Connection rejected'} />
          <ActionButton
            size={'lg'}
            mt={'xs'}
            fullWidth
            onClick={() => {
              clear();
              start();
              setIsWaiting(true);
              setExtension('');
              setExtension(info.key);
            }}
          >
            {'Try again'}
          </ActionButton>
        </Box>
      )}
      {!isLoadingTimeout && !!accounts.length && (
        <ScrollArea.Autosize type={'never'} mah={250}>
          <Stack gap={'xs'}>
            {sortedAccounts.map((account, index) => (
              <AccountButton
                key={account.address}
                account={account}
                index={index}
                isSelected={address === account.address}
                isLoading={
                  isConnecting && lastSelectedAddress === account.address
                }
                onClick={(account) => {
                  connect(account);
                  setLastSelectedAddress(account.address);
                }}
              />
            ))}
          </Stack>
        </ScrollArea.Autosize>
      )}
    </Stack>
  );
}
