import '@rainbow-me/rainbowkit/styles.css';

import { DEMO_CHAIN_ID } from '@/config';
import { http, defineChain } from 'viem';
import { createConfig } from 'wagmi';
import { connectors } from './rainbowkit';

export const demo = /*#__PURE__*/ defineChain({
  id: DEMO_CHAIN_ID,
  name: 'Tanssi Demo',
  nativeCurrency: {
    decimals: 18,
    name: 'TANGO',
    symbol: 'TANGO',
  },
  rpcUrls: {
    default: {
      http: ['https://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network'],
      webSocket: ['wss://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'BlockScout',
      url: 'https://3001-blockscout.a.dancebox.tanssi.network',
    },
  },
  testnet: true,
});

export const wagmiConfig = createConfig({
  chains: [demo],
  connectors,
  transports: {
    [DEMO_CHAIN_ID]: http(),
  },
  ssr: true,
});
