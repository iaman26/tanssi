import { ChainConfig, XcmAsset } from '@/config';
import { delay } from '@/utils/delay';
import { useAppchainApi, useAppchainSudo } from '../../appchain';
import { useApiTransaction } from '../../useApiTransaction';
import {
  useInvalidateForeignAssetsIdsQuery,
  useLastRegisteredAssetId,
} from '../queries/useForeignAssets';

export function useRegisterForeignAssets(
  paraId: number | undefined,
  config: ChainConfig | undefined,
) {
  const api = useAppchainApi(paraId, config);
  const { sudoKey } = useAppchainSudo();
  const invalidate = useInvalidateForeignAssetsIdsQuery();
  const lastId = useLastRegisteredAssetId(paraId, config);

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.sudo.sudo,
    config,
    address: sudoKey,
    onSuccess: () => delay(6_000).then(invalidate),
  });

  return {
    isLoading,
    send: async (asset: XcmAsset | XcmAsset[]) => {
      const assets = Array.isArray(asset) ? asset : [asset];

      if (!api || !sudoKey || !assets.length || lastId === undefined) {
        return;
      }

      const calls = assets.map(({ asset, decimals, rate, location }, index) => {
        const id = lastId + BigInt(index + 1);

        return api.tx.utility.batch([
          api.tx.foreignAssetsCreator.createForeignAsset(
            location,
            id,
            sudoKey,
            true,
            1,
          ),
          api.tx.foreignAssets.forceSetMetadata(
            id,
            asset.originSymbol,
            asset.originSymbol,
            decimals,
            false,
          ),
          api.tx.assetRate.create(
            id,
            // https://github.com/moondance-labs/tanssi/blob/2d8fc70d5efb890a5b35e387f4e8cdb95cc48441/test/helpers/assets.ts#L45
            // this defines how much the asset costs with respect to the
            // new asset
            // in this case, asset*2=native
            // that means that we will charge 0.5 of the native balance
            rate,
          ),
        ]);
      });

      send(api.tx.utility.batch(calls));
    },
  };
}
