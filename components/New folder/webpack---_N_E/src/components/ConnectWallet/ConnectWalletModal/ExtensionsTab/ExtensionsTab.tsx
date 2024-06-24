import { Logo } from '@/components/Logo';
import { useExtensions } from '@/state/polkadot-extension';
import { Box, Center, Divider, Stack, Text } from '@mantine/core';
import { EXTENSIONS } from '../ConnectWalletModal.constants';
import { Tab } from '../ConnectWalletModal.interfaces';
import { ExtensionButton } from './ExtensionButton';

export interface Props {
  setActiveTab(tab: Tab): void;
}

export function ExtensionsTab({ setActiveTab }: Props) {
  const { extensions, extension, setExtension } = useExtensions();

  const buttons = EXTENSIONS.map((ext) => {
    const isInstalled = extensions.some(({ name }) => name === ext.key);
    const isSelected = extension === ext.key;

    return (
      <ExtensionButton
        key={ext.key}
        extension={ext}
        isInstalled={isInstalled}
        isSelected={isSelected}
        onClick={() => {
          setExtension(ext.key);
          setActiveTab(Tab.Accounts);
        }}
      />
    );
  });

  return (
    <Stack>
      <Center>
        <Logo width={110} withLink={false} />
      </Center>
      <Text ta={'center'} size={'xs'} c={'gray.6'}>
        {'Enjoy the easiest way to deploy Appchains'}
      </Text>
      <Box mx={'xs'}>
        <Divider c={'white'} opacity={0.1} />
      </Box>
      <Stack gap={'xs'}>{buttons}</Stack>
    </Stack>
  );
}
