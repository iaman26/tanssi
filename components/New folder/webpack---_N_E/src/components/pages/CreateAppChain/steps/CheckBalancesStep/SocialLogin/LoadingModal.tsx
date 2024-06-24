import { SocialLoginModalWrapper } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/SocialLoginModalWrapper';
import { Loader, Text } from '@mantine/core';

export function LoadingModal() {
  return (
    <SocialLoginModalWrapper>
      <Text mt={'lg'} ta={'center'} c={'gray.6'}>
        {'Loading...'}
      </Text>
      <Loader type={'oval'} size={25} color={'gray.1'} />
    </SocialLoginModalWrapper>
  );
}
