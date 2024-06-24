import { AppChainStatus } from '@/hooks/polkadot/appchain';

export const APPCHAIN_STATUS = {
  [AppChainStatus.NotFound]: {
    color: 'red',
    status: 'Not found',
  },
  [AppChainStatus.PendingVerification]: {
    color: 'yellow.5',
    status: 'Pending',
  },
  [AppChainStatus.Deploying]: {
    color: 'blue',
    status: 'Deploying',
  },
  [AppChainStatus.Online]: {
    color: 'green.4',
    status: 'Live',
  },
  [AppChainStatus.NotOnline]: {
    color: 'red',
    status: 'Not online',
  },
} as const;
