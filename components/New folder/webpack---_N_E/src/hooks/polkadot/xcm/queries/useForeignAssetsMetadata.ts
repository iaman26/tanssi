import { ChainConfig } from '@/config';
import type { PalletAssetsAssetMetadata } from '@polkadot/types/lookup';
import { u8aToString } from '@polkadot/util';
import { useMemo } from 'react';
import { useAppchainApi } from '../../appchain';
import { useApiCall } from '../../useApiCall';

export interface ForeignAssetMetadata {
  deposit: bigint;
  name: string;
  symbol: string;
  decimals: number;
}

export function useForeignAssetsMetadata(
  ids: bigint[] | undefined,
  paraId: number | undefined,
  config: ChainConfig | undefined,
): ForeignAssetMetadata[] | undefined {
  const api = useAppchainApi(paraId, config);
  const args = useMemo(() => ids?.map((id) => [id]), [ids]);
  const metadatas = useApiCall(
    api?.query.foreignAssets.metadata.multi,
    [args],
    transformAssetsMetadata,
  );

  return metadatas;
}

function transformAssetsMetadata(
  metadatas: PalletAssetsAssetMetadata[],
): ForeignAssetMetadata[] {
  return metadatas.map((metadata) => {
    return {
      deposit: metadata.deposit.toBigInt(),
      name: u8aToString(metadata.name),
      symbol: u8aToString(metadata.symbol),
      decimals: metadata.decimals.toNumber(),
    };
  });
}
