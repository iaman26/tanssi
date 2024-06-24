import { SocialLoginModalWrapper } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/SocialLoginModalWrapper';
import { ChainKey } from '@/config';
import { useChainConfig } from '@/hooks/useChainConfig';
import { Group, Text, Title } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export function Done() {
  const { key, displayName } = useChainConfig();

  return (
    <SocialLoginModalWrapper>
      <Title order={5} c={'white'}>
        {'Done!'}
      </Title>
      <Group
        my={'xs'}
        w={45}
        h={45}
        justify={'center'}
        align={'center'}
        bg={'tanssiTeal.9'}
        style={{
          border: '1px solid var(--mantine-color-tanssiTeal-8)',
          borderRadius: '50%',
        }}
      >
        <IconCheck color={'white'} size={30} />
      </Group>
      {key === ChainKey.Flashbox ? (
        <Title order={5} c={'white'}>
          {"Let's get some tokens"}
        </Title>
      ) : (
        <Text size={'lg'} ta={'center'}>
          {`Thank you for requesting a dedicated appchain on ${displayName}. Our team will get in touch with you as soon as possible!`}
        </Text>
      )}
    </SocialLoginModalWrapper>
  );
}
