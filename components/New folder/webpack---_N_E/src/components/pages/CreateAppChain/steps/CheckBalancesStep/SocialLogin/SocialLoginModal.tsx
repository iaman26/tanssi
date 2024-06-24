import { ContactModal } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/Contact';
import { Done } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/Contact/Done';
import { LoadingModal } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/LoadingModal';
import { LoginModal } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/Login';
import { useIsContactCreated } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { useSession } from 'next-auth/react';

export function SocialLoginModal() {
  const { data: session } = useSession();
  const { isContactCreated, isLoading } = useIsContactCreated();

  if (!session) {
    return <LoginModal />;
  }

  if (isLoading) {
    return <LoadingModal />;
  }

  if (!isContactCreated) {
    return <ContactModal />;
  }

  return <Done />;
}
