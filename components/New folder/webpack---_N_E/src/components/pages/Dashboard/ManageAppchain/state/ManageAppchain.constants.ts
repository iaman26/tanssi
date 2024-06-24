export interface TabInfo {
  title: string;
  description: string;
  tab: ManageAppchainTab;
  isDisabled?: boolean;
}

export enum ManageAppchainTab {
  Management = 'management',
  TokenManagement = 'token-management',
  TokenManagementMint = 'token-management-mint',
  TokenManagementUpdate = 'token-management-update',
  TokenManagementTransfer = 'token-management-transfer',
  TokenManagementGas = 'token-management-gas',
  Xcm = 'xcm',
  XcmHrmpDeposit = 'xcm-hrmp-deposit',
  XcmHrmpChannels = 'xcm-hrmp-channels',
  XcmAssetRegistration = 'xcn-asset-registration',
  XcmMrl = 'xcm-mrl',
  Oracles = 'oracles',
  Bridges = 'bridges',
  Indexers = 'indexers',
  Maintenance = 'maintenance',
  BlockProduction = 'block-production',
  AppchainStaking = 'appchain-staking',
  Proxy = 'proxy',
}

export const tabsInfo: Record<ManageAppchainTab, TabInfo> = {
  [ManageAppchainTab.Management]: {
    title: 'Management',
    description: '',
    tab: ManageAppchainTab.Management,
  },
  [ManageAppchainTab.TokenManagement]: {
    title: 'Token Management',
    description:
      'Set of tools to manage your appchain token, mint, transfer and update balances.',
    tab: ManageAppchainTab.TokenManagement,
  },
  [ManageAppchainTab.TokenManagementMint]: {
    title: 'Mint Tokens',
    description: 'Mint more tokens to an account',
    tab: ManageAppchainTab.TokenManagementMint,
  },
  [ManageAppchainTab.TokenManagementUpdate]: {
    title: 'Update Balances',
    description: 'Increase token balance',
    tab: ManageAppchainTab.TokenManagementUpdate,
  },
  [ManageAppchainTab.TokenManagementTransfer]: {
    title: 'Transfer Tokens',
    description: 'Transfer tokens between accounts',
    tab: ManageAppchainTab.TokenManagementTransfer,
  },
  [ManageAppchainTab.TokenManagementGas]: {
    title: 'Gas Dynamics',
    description: 'Edit 1559 configuration from Genesis',
    tab: ManageAppchainTab.TokenManagementGas,
  },
  [ManageAppchainTab.Xcm]: {
    title: 'XCM',
    description: 'Configuration for cross-chain activity.',
    tab: ManageAppchainTab.Xcm,
  },
  [ManageAppchainTab.XcmHrmpDeposit]: {
    title: 'Sovereign Account',
    description: '',
    tab: ManageAppchainTab.XcmHrmpDeposit,
  },
  [ManageAppchainTab.XcmHrmpChannels]: {
    title: 'HRMP Channels',
    description: 'Open and manage channels to other chains.',
    tab: ManageAppchainTab.XcmHrmpChannels,
  },
  [ManageAppchainTab.XcmAssetRegistration]: {
    title: 'Asset Registration',
    description: 'Register your Appchain to receive XC-20 tokens.',
    tab: ManageAppchainTab.XcmAssetRegistration,
  },
  [ManageAppchainTab.XcmMrl]: {
    title: 'Moonbeam Routed Liquidity',
    description: 'Request to be added to Moonbeam Routed Liquidity.',
    tab: ManageAppchainTab.XcmHrmpChannels,
    isDisabled: true,
  },
  [ManageAppchainTab.Oracles]: {
    title: 'Oracles',
    description: 'Deploy oracles for your appchain.',
    tab: ManageAppchainTab.Oracles,
    isDisabled: true,
  },
  [ManageAppchainTab.Bridges]: {
    title: 'Bridges',
    description: 'Deploy bridging infrastructure to your appchain.',
    tab: ManageAppchainTab.Bridges,
    isDisabled: true,
  },
  [ManageAppchainTab.Indexers]: {
    title: 'Indexers',
    description:
      'Set up generic or contract-specific indexing for your appchain.',
    tab: ManageAppchainTab.Indexers,
    isDisabled: true,
  },
  [ManageAppchainTab.Maintenance]: {
    title: 'Maintenance',
    description:
      'Set the chain into maintenance mode, where state transitions are suspended.',
    tab: ManageAppchainTab.Maintenance,
    isDisabled: true,
  },
  [ManageAppchainTab.BlockProduction]: {
    title: 'Block Production',
    description:
      'Manage payments to allow your appchain to produce with Tanssi.',
    tab: ManageAppchainTab.BlockProduction,
  },
  [ManageAppchainTab.AppchainStaking]: {
    title: 'Appchain Staking',
    description: 'Set inflation schedule and distribution of gas tokens.',
    tab: ManageAppchainTab.AppchainStaking,
    isDisabled: true,
  },
  [ManageAppchainTab.Proxy]: {
    title: 'Proxy Account',
    description: '',
    tab: ManageAppchainTab.Proxy,
  },
};

export const getTabInfo = (tab: ManageAppchainTab): TabInfo => tabsInfo[tab];

export const isXcmTab = (tab?: ManageAppchainTab): boolean =>
  !!tab &&
  [
    ManageAppchainTab.Xcm,
    ManageAppchainTab.XcmHrmpDeposit,
    ManageAppchainTab.XcmHrmpChannels,
    ManageAppchainTab.XcmAssetRegistration,
  ].includes(tab);
