import {
  useContactForm,
  useIsContactCreated,
} from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { isProd } from '@/config';
import { useUserEmail } from '@/hooks/useUserEmail';
import { trpc } from '@/utils/trpc';

export function useCreateContact() {
  const email = useUserEmail();
  const trpcUtils = trpc.useUtils();
  const { setIsContactCreated } = useIsContactCreated();
  const { contactFormValues } = useContactForm();

  const { isPending, mutateAsync } = trpc.contacts.create.useMutation({
    onSuccess: () => {
      setIsContactCreated(true);
      trpcUtils.contacts.get.invalidate();
    },
  });

  return {
    isPending,
    createContact: async () => {
      if (email && contactFormValues && isProd)
        await mutateAsync({
          name: contactFormValues.name,
          telegram: contactFormValues.telegram,
          project: contactFormValues.project,
          occupation: contactFormValues.occupation,
          field: contactFormValues.field,
          email,
        });
    },
  };
}
