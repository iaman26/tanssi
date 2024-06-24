import { ChainConfig } from '@/config';
import type { StagingXcmV3MultiLocation } from '@polkadot/types/lookup';
import { useMemo } from 'react';
import { useAppchainApi } from '../../appchain';
import { useApiCall } from '../../useApiCall';

export function useForeignAssetsMultilocation(
  ids: bigint[] | undefined,
  paraId: number | undefined,
  config: ChainConfig | undefined,
): StagingXcmV3MultiLocation[] | undefined {
  const api = useAppchainApi(paraId, config);
  const args = useMemo(() => ids?.map((id) => [id]), [ids]);
  const multilocations = useApiCall(
    api?.query.foreignAssetsCreator.assetIdToForeignAsset.multi,
    [args],
    transformAssetsMultilocations,
  );

  return multilocations;
}

function transformAssetsMultilocations(
  multilocations: StagingXcmV3MultiLocation[],
): StagingXcmV3MultiLocation[] {
  return multilocations;
}
