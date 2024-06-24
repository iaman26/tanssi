import { env } from '@/env.mjs';
import { Asset, AssetAmount } from '@moonbeam-network/xcm-types';
import {
  AppChainUrls,
  BaseChainConfig,
  ChainConfig,
  ChainKey,
  ChopsticksFork,
  Explorer,
  Explorers,
  RelayChainConfig,
} from './config.interfaces';

export const DEMO_CHAIN_ID = 5678;
export const DEMO_APPCHAIN_PARA_ID = 3001;

export const isLocal = env.NEXT_PUBLIC_LOCAL_NODE;
export const isProd = env.NEXT_PUBLIC_DEPLOYMENT === 'production';
export const isTest = env.NEXT_PUBLIC_DEPLOYMENT === 'test';

export const captchaSiteKey = env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

export const dance = new Asset({
  key: 'dance',
  originSymbol: 'DANCE',
});

export const snap = new Asset({
  key: 'snap',
  originSymbol: 'SNAP',
});

export const tango = new Asset({
  key: 'tango',
  originSymbol: 'TANGO',
});

export const unit = new Asset({
  key: 'unit',
  originSymbol: 'UNIT',
});

export const EXPLORERS = {
  polkadotJs: {
    name: 'Polkadot JS Apps',
    url: 'https://polkadot.js.org/apps',
  },
  subscan: {
    name: 'Subscan',
    url: 'https://dancebox.subscan.io/',
  },
  evm: {
    name: 'EVM Basic Explorer',
    url: 'https://evmexplorer.tanssi-chains.network',
  },
} satisfies Explorers;

/**
 * Stagebox
 */

export const moonbaseRelayStagenet: RelayChainConfig = {
  asset: unit,
  decimals: 12,
  genesisHash:
    '0x64d25a5d58d8d330b8804103e6452be6258ebfd7c4f4c1294835130e75628401',
  name: 'Moonbase Relay Stagenet',
  parachainId: 0,
  ss58Format: 42,
  ws: 'wss://deo-moon-moondev-1-stagenet-relay-rpc-1.rv.moondev.network/',
  fees: {
    reserveParaId: AssetAmount.fromAsset(unit, {
      amount: 40_000_000_000_000n,
      decimals: 12,
    }),
    register: AssetAmount.fromAsset(unit, {
      amount: 130_000_000_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(unit, {
      amount: amount || 0n,
      decimals: moonbaseRelayStagenet.decimals,
    }),
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${moonbaseRelayStagenet.ws}#/explorer/query/${blockHash}`,
};

export const stagebox: ChainConfig = {
  asset: dance,
  blockTime: 6,
  blocksPerSession: 600,
  decimals: 12,
  genesisHash:
    '0xfce2a2e9c0e0147137a11d9b268ba0471ff3e3f11064b80f88aea17e03c55e33',
  key: ChainKey.Stagebox,
  name: 'Stagebox',
  displayName: 'Stagebox',
  parachainId: 2001,
  ss58Format: 42,
  relay: moonbaseRelayStagenet,
  ws: 'wss://fraa-stagebox-rpc.a.stagenet.tanssi.network',
  http: 'https://fraa-stagebox-rpc.a.stagenet.tanssi.network',
  fees: {
    register: AssetAmount.fromAsset(dance, {
      amount: 100_000_000_000_000n,
      decimals: 12,
    }),
    costPerBlock: AssetAmount.fromAsset(dance, {
      amount: 1_000_000n,
      decimals: 12,
    }),
    costPerSession: AssetAmount.fromAsset(dance, {
      amount: 100_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(dance, {
      amount: amount || 0n,
      decimals: stagebox.decimals,
    }),
  getAppChainUrls: (paraId, isEvm) => {
    const host = `fraa-stagebox-${paraId}-rpc.a.dancebox.tanssi.network`;

    return getAppChainUrls(host, isEvm);
  },
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${stagebox.ws}#/explorer/query/${blockHash}`,
};

/**
 * Dancebox
 */

export const moonbaseRelay: RelayChainConfig = {
  asset: unit,
  decimals: 12,
  genesisHash:
    '0xe1ea3ab1d46ba8f4898b6b4b9c54ffc05282d299f89e84bd0fd08067758c9443',
  name: 'Moonbase Relay',
  parachainId: 0,
  ss58Format: 42,
  ws: 'wss://fro-moon-rpc-1-moonbase-relay-rpc-1.moonbase.ol-infra.network',
  fees: {
    reserveParaId: AssetAmount.fromAsset(unit, {
      amount: 40_000_000_000_000n,
      decimals: 12,
    }),
    register: AssetAmount.fromAsset(unit, {
      amount: 130_000_000_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(unit, {
      amount: amount || 0n,
      decimals: moonbaseRelay.decimals,
    }),
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${moonbaseRelay.ws}#/explorer/query/${blockHash}`,
};

export const dancebox: ChainConfig = {
  asset: dance,
  decimals: 12,
  blockTime: 6,
  blocksPerSession: 600,
  runtime: {
    block: 1_834_800,
    session: 6_114,
    version: 601,
  },
  genesisHash:
    '0x27aafd88e5921f5d5c6aebcd728dacbbf5c2a37f63e2eda301f8e0def01c43ea',
  key: ChainKey.Dancebox,
  name: 'Dancebox',
  displayName: 'Dancebox',
  parachainId: 3000,
  ss58Format: 42,
  relay: moonbaseRelay,
  ws: 'wss://dancebox.tanssi-api.network',
  http: 'https://dancebox.tanssi-api.network',
  fees: {
    register: AssetAmount.fromAsset(dance, {
      amount: 100_000_000_000_000n,
      decimals: 12,
    }),
    costPerBlock: AssetAmount.fromAsset(dance, {
      amount: 1_000_000n,
      decimals: 12,
    }),
    costPerSession: AssetAmount.fromAsset(dance, {
      amount: 100_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(dance, {
      amount: amount || 0n,
      decimals: dancebox.decimals,
    }),
  getAppChainUrls: (paraId, isEvm) => {
    const host = `fraa-dancebox-${paraId}-rpc.a.dancebox.tanssi.network`;

    return getAppChainUrls(host, isEvm);
  },
  getTransactionUrl: (_: string, txHash: string) =>
    `${EXPLORERS.subscan.url}/extrinsic/${txHash}`,
};

/**
 * Flashbox
 */

export const flashboxRelay: RelayChainConfig = {
  asset: unit,
  decimals: 12,
  genesisHash:
    '0x8da0918b2b71a4f1a8b166dac1f8a5090ced496c83c3da98b51944f736d4811a',
  name: 'Dancebox Snaps Relay',
  parachainId: 0,
  ss58Format: 42,
  ws: 'wss://fraa-flashbox-relay-rpc.a.stagenet.tanssi.network',
  fees: {
    reserveParaId: AssetAmount.fromAsset(unit, {
      amount: 40_000_000_000_000n,
      decimals: 12,
    }),
    register: AssetAmount.fromAsset(unit, {
      amount: 120_000_000_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(unit, {
      amount: amount || 0n,
      decimals: flashboxRelay.decimals,
    }),
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${flashboxRelay.ws}#/explorer/query/${blockHash}`,
};

export const flashbox: ChainConfig = {
  asset: snap,
  decimals: 12,
  blockTime: 6,
  blocksPerSession: 600,
  genesisHash:
    '0xb4604fbda16d096f0818889d0134daa81d71af0f9ef4e5a0aad5e3543536bda1',
  key: ChainKey.Flashbox,
  name: 'Dancebox Snaps',
  displayName: 'Snaps',
  parachainId: 1000,
  ss58Format: 42,
  relay: flashboxRelay,
  ws: 'wss://fraa-flashbox-rpc.a.stagenet.tanssi.network',
  http: 'https://fraa-flashbox-rpc.a.stagenet.tanssi.network',
  fees: {
    register: AssetAmount.fromAsset(snap, {
      amount: 100_000_000_000_000n,
      decimals: 12,
    }),
    costPerBlock: AssetAmount.fromAsset(snap, {
      amount: 1_000_000n,
      decimals: 12,
    }),
    costPerSession: AssetAmount.fromAsset(snap, {
      amount: 100_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(snap, {
      amount: amount || 0n,
      decimals: flashbox.decimals,
    }),
  getAppChainUrls: (paraId, isEvm) => {
    const host = `fraa-flashbox-${paraId}-rpc.a.stagenet.tanssi.network`;

    return getAppChainUrls(host, isEvm);
  },
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${flashbox.ws}#/explorer/query/${blockHash}`,
};

export const demo: BaseChainConfig = {
  asset: tango,
  decimals: 18,
  genesisHash:
    '0x4a2ba81d5554a2e2935823a8f1a40e4fa339398b78a77bc5a6acb214084f7de3',
  name: 'Tanssi Demo',
  parachainId: 3001,
  ss58Format: 42,
  ws: 'wss://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network',
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(unit, {
      amount: amount || 0n,
      decimals: demo.decimals,
    }),
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${demo.ws}#/explorer/query/${blockHash}`,
};

// local
// ###############################################################
export const localRelay: RelayChainConfig = {
  asset: unit,
  decimals: 12,
  genesisHash:
    '0xe1ea3ab1d46ba8f4898b6b4b9c54ffc05282d299f89e84bd0fd08067758c9443',
  name: 'Local Relay',
  parachainId: 0,
  ss58Format: 42,
  ws: 'ws://127.0.0.1:9947',
  fees: {
    reserveParaId: AssetAmount.fromAsset(unit, {
      amount: 40_000_000_000_000n,
      decimals: 12,
    }),
    register: AssetAmount.fromAsset(unit, {
      amount: 130_000_000_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(unit, {
      amount: amount || 0n,
      decimals: localRelay.decimals,
    }),
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${localRelay.ws}#/explorer/query/${blockHash}`,
};

export const local: ChainConfig = {
  asset: dance,
  decimals: 12,
  blockTime: 6,
  blocksPerSession: 600,
  genesisHash:
    '0x27aafd88e5921f5d5c6aebcd728dacbbf5c2a37f63e2eda301f8e0def01c43ea',
  key: ChainKey.Local,
  name: 'Local',
  displayName: 'Local',
  parachainId: 1000,
  ss58Format: 42,
  relay: localRelay,
  ws: 'ws://127.0.0.1:9948',
  http: 'http://127.0.0.1:9948',
  fees: {
    register: AssetAmount.fromAsset(dance, {
      amount: 100_000_000_000_000n,
      decimals: 12,
    }),
    costPerBlock: AssetAmount.fromAsset(dance, {
      amount: 1_000_000n,
      decimals: 12,
    }),
    costPerSession: AssetAmount.fromAsset(dance, {
      amount: 100_000_000n,
      decimals: 12,
    }),
  },
  getAssetAmount: (amount?: bigint) =>
    AssetAmount.fromAsset(dance, {
      amount: amount || 0n,
      decimals: local.decimals,
    }),
  getAppChainUrls: (paraId, isEvm) => {
    const host = `fraa-dancebox-${paraId}-rpc.a.dancebox.tanssi.network`;

    return getAppChainUrls(host, isEvm);
  },
  getTransactionUrl: (blockHash: string) =>
    `${EXPLORERS.polkadotJs.url}?rpc=${local.ws}#/explorer/query/${blockHash}`,
};

// tests
// ###############################################################

export const danceboxForkConfig: ChainConfig = {
  ...dancebox,
  ws: 'ws://127.0.0.1:9949',
  http: 'http://127.0.0.1:9949',
} as const;

export const danceboxStakingFork: ChopsticksFork = {
  endpoint: dancebox.ws,
  port: 9949,
  blockNumber: 1584300, // necessary state for testing staking,
} as const;

export const danceboxProxyStakingFork: ChopsticksFork = {
  endpoint: dancebox.ws,
  port: 9949,
  blockNumber: 1681080, // necessary state for testing proxy in staking,
} as const;

// ###############################################################

export const chains = new Map<ChainKey, ChainConfig>([
  [dancebox.key, dancebox],
  [flashbox.key, flashbox],
  [stagebox.key, stagebox],
]);

export const relayChains = new Map<ChainKey, RelayChainConfig>([
  [dancebox.key, moonbaseRelay],
  [flashbox.key, flashboxRelay],
  [stagebox.key, moonbaseRelayStagenet],
]);

if (isLocal) {
  chains.set(local.key, local);
  relayChains.set(local.key, localRelay);
}

export const chainKeys = Object.values(ChainKey) as ChainKey[];
export const defaultChainKey = isLocal ? local.key : flashbox.key;

function getAppChainUrls(
  host: string,
  isEvm?: boolean | undefined,
): AppChainUrls {
  const ws = `wss://${host}`;
  const rpc = `https://${host}`;
  const explorers = [
    isEvm && {
      name: EXPLORERS.evm.name,
      url: `${EXPLORERS.evm.url}?rpcUrl=${rpc}`,
    },
    {
      name: EXPLORERS.polkadotJs.name,
      url: `${EXPLORERS.polkadotJs.url}?rpc=${ws}`,
    },
  ].filter(Boolean) as Explorer[];

  return {
    host,
    ws,
    rpc,
    explorers,
  };
}
