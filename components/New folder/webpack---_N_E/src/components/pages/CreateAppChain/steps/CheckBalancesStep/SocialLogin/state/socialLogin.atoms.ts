import { INITIAL_CONTACT_FORM_VALUES } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.constants';
import {
  ContactFormValues,
  ContactModalTab,
} from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.interfaces';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Contact
export const contactFormValuesStorageAtom = atomWithStorage<ContactFormValues>(
  'contact-form-values',
  INITIAL_CONTACT_FORM_VALUES,
);

export const contactFormValuesAtom = atom(
  (get) => get(contactFormValuesStorageAtom),
  (get, set, values: Partial<ContactFormValues>) => {
    const currentValues = get(contactFormValuesStorageAtom);

    set(contactFormValuesStorageAtom, {
      ...currentValues,
      ...values,
    });
  },
);

export const isContactCreatedAtom = atom(false); // Needed because of a delay in the getContact call

// Active tab
export const contactModalActiveTabAtom = atom<ContactModalTab>(
  ContactModalTab.Info,
);
