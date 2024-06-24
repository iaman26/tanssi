import { ModalButton } from '@/components/ModalButton';
import { SocialLoginModalWrapper } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/SocialLoginModalWrapper';
import { Box, Divider, Text, Title } from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

enum Provider {
  Google = 'google',
  Github = 'github',
}

export function LoginModal() {
  const [loading, setLoading] = useState<Provider | undefined>();
  const { status } = useSession();

  const onLogin = async (provider: Provider) => {
    setLoading(provider);
    signIn(provider);
  };

  return (
    <SocialLoginModalWrapper>
      <Title order={5} c={'white'}>
        {'Login'}
      </Title>
      <Text ta={'center'} c={'gray.6'}>
        {'Set up a profile to receive your tokens'}
      </Text>
      <Divider mb={'sm'} w={'100%'} c={'white'} opacity={0.2} />
      <ModalButton
        w={'100%'}
        loading={loading === Provider.Google && status === 'unauthenticated'}
        leftSection={
          <Image
            src={'/images/logo_google.svg'}
            width={28}
            height={28}
            alt={'Google logo'}
          />
        }
        rightSection={<Box w={28} />}
        onClick={() => onLogin(Provider.Google)}
      >
        {'Sign in with Google'}
      </ModalButton>
      <ModalButton
        w={'100%'}
        loading={loading === Provider.Github && status === 'unauthenticated'}
        leftSection={
          <Image
            src={'/images/logo_github.svg'}
            width={28}
            height={28}
            alt={'Github logo'}
          />
        }
        rightSection={<Box w={28} />}
        onClick={() => {
          onLogin(Provider.Github);
        }}
      >
        {'Sign in with GitHub'}
      </ModalButton>
    </SocialLoginModalWrapper>
  );
}
