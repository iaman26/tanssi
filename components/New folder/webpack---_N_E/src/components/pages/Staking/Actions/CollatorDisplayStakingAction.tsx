import { CollatorDisplay } from '@/components/pages/Staking/CollatorDisplay';
import { CollatorIdenticon } from '@/components/pages/Staking/Collators/CollatorIdenticon';
import { IdentityMetadata } from '@/hooks/polkadot/common/queries';
import { Group, Text, useMantineTheme } from '@mantine/core';

interface Props {
  address: string;
  identity: IdentityMetadata | undefined;
}

export function CollatorDisplayStakingAction({ address, identity }: Props) {
  const theme = useMantineTheme();
  return (
    <>
      <Text>{'Block Producer'}</Text>
      <Group
        align={'center'}
        mt={'sm'}
        pl={'xs'}
        pr={'xl'}
        py={5}
        bg={'dark.6'}
        gap={0}
        wrap={'nowrap'}
        style={{ borderRadius: 10 }}
      >
        <CollatorIdenticon address={address} outerBg={'dark.7'} size={25} />
        <CollatorDisplay
          address={address}
          display={identity?.display}
          maxLength={22}
          shadowColor={theme.colors.dark[6]}
        />
      </Group>
    </>
  );
}
