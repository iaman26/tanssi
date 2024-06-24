import { BaseChainConfig, ChainConfig, EXPLORERS } from '@/config';
import {
  useAppchainApi,
  useAppchainName,
  useAppchainUrls,
} from '@/hooks/polkadot/appchain';
import { Asset, AssetAmount } from '@moonbeam-network/xcm-types';
import { useMemo } from 'react';

export interface AppchainConfig {
  name: string;
  asset: Asset;
  isEthereum: boolean;
  decimals: number;
  ws: string | undefined;
}

export function useAppchainConfig(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): BaseChainConfig | undefined {
  const api = useAppchainApi(paraId, config);
  const name = useAppchainName(paraId, config);
  const urls = useAppchainUrls(paraId, config);

  return useMemo(() => {
    if (!api || !name || !paraId || !urls) return undefined;

    const asset = new Asset({
      key: api.registry.chainTokens[0].toLowerCase(),
      originSymbol: api.registry.chainTokens[0],
    });
    const decimals = api.registry.chainDecimals[0];

    return {
      name,
      asset,
      parachainId: paraId,
      ss58Format: api.registry.chainSS58 || 0,
      genesisHash: api.genesisHash.toHex(),
      isEthereum: api.registry.chainIsEthereum,
      decimals,
      ws: urls.ws,
      getTransactionUrl: (blockHash: string) =>
        `${EXPLORERS.polkadotJs.url}?rpc=${urls.ws}#/explorer/query/${blockHash}`,
      getAssetAmount: (amount) =>
        AssetAmount.fromAsset(asset, {
          amount: amount || 0n,
          decimals,
        }),
    };
  }, [api, name, paraId, urls]);
}
