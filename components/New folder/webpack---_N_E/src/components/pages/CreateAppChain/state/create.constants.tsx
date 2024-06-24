import {
  Step,
  TemplateOption,
  Templates,
} from '@/components/pages/CreateAppChain/state/create.interfaces';
import {
  EvmFormData,
  SubstrateFormData,
} from '@/server/router/file/file.interfaces';

import { CheckBalanceStep } from '../steps/CheckBalancesStep';
import { ChooseTemplateStep } from '../steps/ChooseTemplateStep';
import { GenerateFilesStep } from '../steps/GenerateFilesStep';
import { RegisterChainStep } from '../steps/RegisterChainStep';
import { ReserveParaIdStep } from '../steps/ReserveParaIdStep';

export const STEPS = [
  { name: Step.Template, component: <ChooseTemplateStep /> },
  { name: Step.Balances, component: <CheckBalanceStep /> },
  { name: Step.ParaID, component: <ReserveParaIdStep /> },
  { name: Step.Files, component: <GenerateFilesStep /> },
  { name: Step.Register, component: <RegisterChainStep /> },
];

export const TEMPLATES: Templates = [
  {
    name: TemplateOption.Evm,
    description: 'EVM Template based on Moonbeam Codebase',
    logo: 'logo_ethereum_light.svg',
    color: '#FF502D',
  },
  {
    name: TemplateOption.Substrate,
    description: 'Substrate simple template with standard specs',
    logo: 'logo_substrate_light.svg',
    color: '#48a6a7',
  },
  {
    name: TemplateOption.Custom,
    description: 'Provide your custom raw specifications.',
    logo: '/icons/json-light-icon.svg',
    color: '#FFA113',
  },
];

export const INITIAL_TEMPLATE_VALUES: {
  [TemplateOption.Evm]: EvmFormData;
  [TemplateOption.Substrate]: SubstrateFormData;
} = {
  [TemplateOption.Evm]: {
    name: '',
    url: '',
    x: '',
    isEthereum: true,
    evmChainId: '',
    tokenDecimals: 18,
    tokenSymbol: '',
    sudoAddress: '',
    sudoBalance: '',
    balances: [],
    precompiles: [],
    baseFeePerGas: 1,
    elasticity: 12.5,
  },
  [TemplateOption.Substrate]: {
    name: '',
    url: '',
    x: '',
    isEthereum: false,
    tokenDecimals: '',
    tokenSymbol: '',
    sudoAddress: '',
    sudoBalance: '',
    ss58Format: '',
    balances: [],
  },
};

export const INITIAL_TEMPLATE_TEST_VALUES: {
  [TemplateOption.Evm]: EvmFormData;
  [TemplateOption.Substrate]: SubstrateFormData;
} = {
  [TemplateOption.Evm]: {
    name: 'Test',
    isEthereum: true,
    evmChainId: '12345',
    tokenDecimals: 18,
    tokenSymbol: 'TEST',
    sudoAddress: '0xeF46c7649270C912704fB09B75097f6E32208b85',
    sudoBalance: '100000',
    balances: [],
    precompiles: [],
    baseFeePerGas: 1,
    elasticity: 12.5,
  },
  [TemplateOption.Substrate]: {
    name: 'Test',
    isEthereum: false,
    tokenDecimals: '12',
    tokenSymbol: 'TEST',
    ss58Format: '42',
    balances: [],
    sudoAddress: '5Fpat4SsY6z1WZRdtEtDXKF2BXbdQ2icrX36hGnGB6BdxZQy',
    sudoBalance: '100000',
  },
};
