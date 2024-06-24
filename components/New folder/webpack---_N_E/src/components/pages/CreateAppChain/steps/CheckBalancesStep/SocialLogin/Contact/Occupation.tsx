import { ActionButton } from '@/components/ActionButton';
import { ChipInput } from '@/components/ChipInput';
import classes from '@/components/ModalButton/ModalButton.module.css';
import { ContactModalStepper } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/Contact/ContactModalStepper';
import { INITIAL_CONTACT_OCCUPATION_FORM_VALUES } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.constants';
import {
  useContactForm,
  useContactModalActiveTab,
} from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { ContactModalTab } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.interfaces';
import { Contact } from '@/server/router/contacts/contacts.interfaces';
import {
  Occupation as OccupationEnum,
  contactSchema,
} from '@/server/router/contacts/contacts.schema';
import { Center, Grid, Stack, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useEffect } from 'react';

export function Occupation() {
  const { setActiveTab } = useContactModalActiveTab();
  const { contactFormValues, setContactFormValues } = useContactForm();

  const form = useForm<{ occupation: Contact['occupation'] }>({
    validate: zodResolver(contactSchema.pick({ occupation: true })),
    initialValues: {
      occupation: contactFormValues
        ? contactFormValues.occupation
        : INITIAL_CONTACT_OCCUPATION_FORM_VALUES.occupation,
    },
  });

  const onChange = (checked: boolean, occupation: OccupationEnum) => {
    checked
      ? form.insertListItem('occupation', occupation)
      : form.removeListItem(
          'occupation',
          form.values.occupation.indexOf(occupation),
        );
  };

  const onSubmit = () => {
    if (form.isValid()) setActiveTab(ContactModalTab.Field);
  };

  useEffect(() => {
    setContactFormValues({ occupation: form.values.occupation });
  }, [setContactFormValues, form.values.occupation]);

  return (
    <>
      <Title order={5} c={'white'}>
        {`Welcome ${contactFormValues.name.split(' ')[0]}!`}
      </Title>

      <ContactModalStepper mt={15} step={1} />

      <Title mt={5} order={5} c={'white'}>
        {'What describes you best?'}
      </Title>

      <form onSubmit={form.onSubmit(onSubmit)} style={{ width: '100%' }}>
        <Stack gap={'xs'}>
          <Grid grow gutter={'xs'}>
            {Object.values(OccupationEnum).map((occupation) => (
              <Grid.Col key={occupation} span={'content'}>
                <ChipInput
                  checked={form.values.occupation.includes(occupation)}
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
