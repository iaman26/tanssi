import { ChainConfig, XCM_ASSETS_BY_CHAIN } from '@/config';
import type { StagingXcmV3MultiLocation } from '@polkadot/types/lookup';
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useAppchainApi } from '../../appchain';
import {
  ForeignAssetDetails,
  useForeignAssetsDetails,
} from './useForeignAssetsDetails';
import {
  ForeignAssetMetadata,
  useForeignAssetsMetadata,
} from './useForeignAssetsMetadata';
import { useForeignAssetsMultilocation } from './useForeignAssetsMultilocation';

const PARA_ID_REGEX = /{"parachain":(?<paraId>\d+)}/i;

export interface ForeignAsset
  extends ForeignAssetDetails,
    ForeignAssetMetadata {
  id: bigint;
  location: StagingXcmV3MultiLocation;
  paraId?: number;
}

export function useForeignAssets(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): ForeignAsset[] | undefined {
  const { data: ids } = useForeignAssetsIds(paraId, config);
  const details = useForeignAssetsDetails(ids, paraId, config);
  const metadatas = useForeignAssetsMetadata(ids, paraId, config);
  const multilocations = useForeignAssetsMultilocation(ids, paraId, config);

  const assets = useMemo(() => {
    if (!ids || !details || !metadatas || !multilocations) {
      return;
    }

    return ids
      .map((id, index) => {
        const detail = details[index];
        const metadata = metadatas[index];
        const location = multilocations[index];
        const paraId = location?.toString().match(PARA_ID_REGEX)
          ?.groups?.paraId;

        if (!detail || !metadata || !location) {
          return;
        }

        return {
          id,
          ...detail,
          ...metadata,
          location,
          paraId: paraId ? +paraId : undefined,
        };
      })
      .filter(Boolean) as ForeignAsset[];
  }, [ids, details, metadatas, multilocations]);

  return assets;
}

export function useNotRegisteredForeignAssets(
  paraId: number | undefined,
  config: ChainConfig | undefined,
) {
  const api = useAppchainApi(paraId, config);
  const assets = config && XCM_ASSETS_BY_CHAIN[config.key];
  const registeredAssets = useForeignAssets(paraId, config);

  return useMemo(() => {
    if (!registeredAssets || !assets || !api) {
      return;
    }

    return assets.filter((asset) => {
      const location = api.createType(
        'StagingXcmV3MultiLocation',
        asset.location,
      );

      return !registeredAssets.find((registered) =>
        location.eq(registered.location),
      );
    });
  }, [api, assets, registeredAssets]);
}

export function useForeignAssetsIds(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): UseQueryResult<bigint[] | undefined> {
  const api = useAppchainApi(paraId, config);

  return useQuery({
    queryKey: ['foreignAssetsIds'],
    queryFn: async () => {
      const res = await api?.query.foreignAssets.asset.keys();

      return res
        ?.map((key) => {
          const [id] = key.toHuman() as [string];

          return BigInt(id.replace(',', ''));
        })
        .sort();
    },
    enabled: !!api && !!paraId,
  });
}

export function useLastRegisteredAssetId(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): bigint | undefined {
  const { data: ids } = useForeignAssetsIds(paraId, config);

  return useMemo(() => {
    if (!ids) {
      return;
    }

    if (ids.length === 0) {
      return 0n;
    }

    return ids.at(-1);
  }, [ids]);
}

export function useInvalidateForeignAssetsIdsQuery() {
  const queryClient = useQueryClient();

  return useCallback(() => {
    queryClient.invalidateQueries({
      queryKey: ['foreignAssetsIds'],
    });
  }, [queryClient]);
}
