import { ActionButton } from '@/components/ActionButton';
import { ChipInput } from '@/components/ChipInput';
import classes from '@/components/ModalButton/ModalButton.module.css';
import { ContactModalStepper } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/Contact/ContactModalStepper';
import { INITIAL_CONTACT_FIELD_FORM_VALUES } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.constants';
import {
  useContactForm,
  useContactModalActiveTab,
} from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { ContactModalTab } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.interfaces';
import { useCreateContact } from '@/hooks/api/useCreateContact';
import { Contact } from '@/server/router/contacts/contacts.interfaces';
import {
  Field as FieldEnum,
  contactSchema,
} from '@/server/router/contacts/contacts.schema';
import { Center, Grid, Stack, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect } from 'react';

export function Field() {
  const { setActiveTab } = useContactModalActiveTab();
  const { createContact, isPending } = useCreateContact();
  const { contactFormValues, setContactFormValues } = useContactForm();

  const form = useForm<{ field: Contact['field'] }>({
    validate: zodResolver(contactSchema.pick({ field: true })),
    initialValues: {
      field: contactFormValues
        ? contactFormValues.field
        : INITIAL_CONTACT_FIELD_FORM_VALUES.field,
    },
  });

  const onChange = (checked: boolean, field: FieldEnum) => {
    checked
      ? form.insertListItem('field', field)
      : form.removeListItem('field', form.values.field.indexOf(field));
  };

  const onSubmit = async () => {
    if (!form.isValid()) return;
    await createContact();
    setActiveTab(ContactModalTab.Done);
  };

  useEffect(() => {
    setContactFormValues({ field: form.values.field });
  }, [setContactFormValues, form.values.field]);

  return (
    <>
      <Title order={5} c={'white'}>
        {`Welcome ${contactFormValues.name.split(' ')[0]}!`}
      </Title>

      <ContactModalStepper mt={15} step={2} />

      <Title mt={5} order={5} c={'white'}>
        {'I am working in'}
      </Title>

      <form onSubmit={form.onSubmit(onSubmit)} style={{ width: '100%' }}>
        <Stack gap={'xs'}>
          <Grid grow gutter={'xs'}>
            {Object.values(FieldEnum).map((occupation) => (
              <Grid.Col key={occupation} span={'content'}>
                <ChipInput
                  checked={form.values.field.includes(occupation)}
                  onChange={(checked) => onChange(checked, occupation)}
                >
                  {occupation}
                </ChipInput>
              </Grid.Col>
            ))}
          </Grid>

          <Center>
            <ActionButton
              className={classes.modalButton}
              type={'submit'}
              miw={140}
              mt={'xs'}
              isLoading={isPending}
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
