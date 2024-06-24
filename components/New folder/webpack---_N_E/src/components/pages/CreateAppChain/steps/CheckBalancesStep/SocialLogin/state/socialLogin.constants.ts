export const INITIAL_CONTACT_INFO_FORM_VALUES = {
  name: '',
  telegram: '',
  project: '',
};
export const INITIAL_CONTACT_OCCUPATION_FORM_VALUES = {
  occupation: [],
};

export const INITIAL_CONTACT_FIELD_FORM_VALUES = {
  field: [],
};

export const INITIAL_CONTACT_FORM_VALUES = {
  ...INITIAL_CONTACT_INFO_FORM_VALUES,
  ...INITIAL_CONTACT_OCCUPATION_FORM_VALUES,
  ...INITIAL_CONTACT_FIELD_FORM_VALUES,
};
