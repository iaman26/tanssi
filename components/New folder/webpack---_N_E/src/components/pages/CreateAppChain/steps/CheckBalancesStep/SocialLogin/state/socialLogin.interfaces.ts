import { Contact } from '@/server/router/contacts/contacts.interfaces';

export enum ContactModalTab {
  Info = 'info',
  Occupation = 'occupation',
  Field = 'field',
  Done = 'done',
}
export type ContactFormValues = Omit<Contact, 'email'>;
