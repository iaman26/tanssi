import { Asset, AssetAmount } from '@moonbeam-network/xcm-types';

export enum ChainKey {
  Stagebox = 'stagebox',
  Dancebox = 'dancebox',
  Flashbox = 'flashbox',
  Local = 'local',
}

export interface BaseChainConfig {
  asset: Asset;
  decimals: number;
  genesisHash: string;
  name: string;
  parachainId: number;
  ss58Format: number;
  ws: string;
  getTransactionUrl: (blockHash: string, txHash: string) => string;
  getAssetAmount: (amount?: bigint) => AssetAmount;
}

export interface RelayChainConfig extends BaseChainConfig {
  fees: {
    reserveParaId: AssetAmount;
    register: AssetAmount;
  };
}

export interface ChainConfig extends BaseChainConfig {
  key: ChainKey;
  displayName: string;
  relay: RelayChainConfig;
  blockTime: number;
  blocksPerSession: number;
  http: string;
  runtime?: {
    block: number;
    session: number;
    version: 601;
  };
  fees: {
    register: AssetAmount;
    costPerBlock: AssetAmount;
    costPerSession: AssetAmount;
  };
  getAppChainUrls: (paraId: number, isEvm?: boolean) => AppChainUrls;
}

export interface ChainConfigProps {
  config: ChainConfig;
}

export interface ChopsticksFork {
  endpoint: string;
  port: number;
  blockNumber: number;
}

export interface AppChainUrls {
  host: string;
  ws: string;
  rpc: string;
  explorers: Explorer[];
}

export interface Explorer {
  name: string;
  url: string;
}

export interface Explorers {
  polkadotJs: Explorer;
  evm: Explorer;
  subscan: Explorer;
}
