import { ActionButton } from '@/components/ActionButton';
import classes from '@/components/ModalButton/ModalButton.module.css';
import { ContactModalStepper } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/Contact/ContactModalStepper';
import { ContactModalTextInput } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/Contact/ContactModalTextInput';
import { INITIAL_CONTACT_INFO_FORM_VALUES } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.constants';
import {
  useContactForm,
  useContactModalActiveTab,
} from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { ContactModalTab } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.interfaces';
import { Contact } from '@/server/router/contacts/contacts.interfaces';
import { contactSchema } from '@/server/router/contacts/contacts.schema';
import { Center, Stack, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';

type ContactInfo = Pick<Contact, 'name' | 'telegram' | 'project'>;

export function Info() {
  const { setActiveTab } = useContactModalActiveTab();
  const { contactFormValues, setContactFormValues } = useContactForm();

  const form = useForm<ContactInfo>({
    validate: zodResolver(
      contactSchema.pick({ name: true, telegram: true, project: true }),
    ),
    initialValues: contactFormValues
      ? {
          name: contactFormValues.name,
          telegram: contactFormValues.telegram,
          project: contactFormValues.project,
        }
      : INITIAL_CONTACT_INFO_FORM_VALUES,
  });

  return (
    <>
      <Title order={5} c={'white'}>
        {'Almost there!'}
      </Title>

      <ContactModalStepper mt={15} step={0} />

      <form
        onSubmit={form.onSubmit((values) => {
          setContactFormValues(values);
          setActiveTab(ContactModalTab.Occupation);
        })}
        style={{ width: '100%' }}
      >
        <Stack gap={'xs'}>
          <ContactModalTextInput
            label={'Name'}
            placeholder={'John Doe'}
            {...form.getInputProps('name')}
          />

          <ContactModalTextInput
            label={'Telegram'}
            placeholder={'@johndoe'}
            {...form.getInputProps('telegram')}
          />

          <ContactModalTextInput
            label={'Project'}
            placeholder={'My project'}
            {...form.getInputProps('project')}
          />

          <Center>
            <ActionButton
              className={classes.modalButton}
              type={'submit'}
              miw={140}
              mt={'xs'}
              disabled={!form.isValid()}
            >
              {'Continue'}
            </ActionButton>
          </Center>
        </Stack>
      </form>
    </>
  );
}
