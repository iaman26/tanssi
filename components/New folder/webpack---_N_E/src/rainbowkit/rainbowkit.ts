import { connectorsForWallets, midnightTheme } from '@rainbow-me/rainbowkit';
import {
  bitgetWallet,
  bybitWallet,
  metaMaskWallet,
  talismanWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

export const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        talismanWallet,
        bitgetWallet,
        bybitWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: 'Tanssi Network',
    projectId: '5f235502f5a4f4bc2e17d3051b8e8bf4',
  },
);

export const rainbowkitTheme = midnightTheme();
