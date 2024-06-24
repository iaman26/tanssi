import {
  contactFormValuesAtom,
  contactModalActiveTabAtom,
  isContactCreatedAtom,
} from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.atoms';
import { ContactModalTab } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.interfaces';
import { useGetContact } from '@/hooks/api/useGetContact';
import { useAtom } from 'jotai';

export function useContactModalActiveTab(): {
  activeTab: ContactModalTab;
  setActiveTab: (tab: ContactModalTab) => void;
} {
  const [activeTab, setActiveTab] = useAtom(contactModalActiveTabAtom);

  return {
    activeTab,
    setActiveTab,
  };
}

export function useContactForm() {
  const [contactFormValues, setContactFormValues] = useAtom(
    contactFormValuesAtom,
  );

  return { contactFormValues, setContactFormValues };
}

export function useIsContactCreated(): {
  isLoading: boolean;
  isContactCreated: boolean;
  setIsContactCreated: (isContactCreated: boolean) => void;
} {
  const [isContactCreatedInMemory, setIsContactCreated] =
    useAtom(isContactCreatedAtom);
  const { isLoading, contact } = useGetContact();

  return {
    isLoading,
    isContactCreated: isContactCreatedInMemory || !!contact?.id,
    setIsContactCreated,
  };
}
