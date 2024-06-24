import { ChainConfig } from '@/config';
import type {
  PalletAssetsAssetDetails,
  PalletAssetsAssetStatus,
} from '@polkadot/types/lookup';
import { useMemo } from 'react';
import { useAppchainApi } from '../../appchain';
import { useApiCall } from '../../useApiCall';

export interface ForeignAssetDetails {
  owner: string;
  issuer: string;
  admin: string;
  freezer: string;
  supply: bigint;
  deposit: bigint;
  minBalance: bigint;
  isSufficient: boolean;
  accounts: number;
  sufficients: number;
  approvals: number;
  status: PalletAssetsAssetStatus['type'];
}

export function useForeignAssetsDetails(
  ids: bigint[] | undefined,
  paraId: number | undefined,
  config: ChainConfig | undefined,
): ForeignAssetDetails[] | undefined {
  const api = useAppchainApi(paraId, config);
  const args = useMemo(() => ids?.map((id) => [id]), [ids]);
  const details = useApiCall(
    api?.query.foreignAssets.asset.multi,
    [args],
    transformAssetsDetails,
  );

  return details;
}

function transformAssetsDetails(
  details: PalletAssetsAssetDetails[],
): ForeignAssetDetails[] {
  return details.map((detail) => {
    return {
      owner: detail.owner.toString(),
      issuer: detail.issuer.toString(),
      admin: detail.admin.toString(),
      freezer: detail.freezer.toString(),
      supply: detail.supply.toBigInt(),
      deposit: detail.deposit.toBigInt(),
      minBalance: detail.minBalance.toBigInt(),
      isSufficient: detail.isSufficient.isTrue,
      accounts: detail.accounts.toNumber(),
      sufficients: detail.sufficients.toNumber(),
      approvals: detail.approvals.toNumber(),
      status: detail.status.type,
    };
  });
}
