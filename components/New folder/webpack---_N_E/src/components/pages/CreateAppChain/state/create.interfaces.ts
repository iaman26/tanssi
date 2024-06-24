export enum Step {
  Balances = 'Balances',
  Template = 'Template',
  ParaID = 'ParaID',
  Files = 'Files',
  Register = 'Register',
}

export enum TemplateOption {
  Evm = 'Evm',
  Substrate = 'Substrate',
  Custom = 'Custom',
}

export type TemplateFormOption = TemplateOption.Evm | TemplateOption.Substrate;

export interface TemplateMeta {
  name: TemplateOption;
  description: string;
  logo: string;
  color: string;
}

export interface TemplateOptionMeta<T extends TemplateOption>
  extends TemplateMeta {
  name: T;
}

export type Templates = [
  TemplateOptionMeta<TemplateOption.Evm>,
  TemplateOptionMeta<TemplateOption.Substrate>,
  TemplateOptionMeta<TemplateOption.Custom>,
];
