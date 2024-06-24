import { ChainConfig } from '@/config';
import type { SubmittableExtrinsic } from '@polkadot/api/types';
import { useAppchainApi, useAppchainSudo } from '../../appchain';
import { useApiTransaction } from '../../useApiTransaction';
import { useInvalidateForeignAssetsIdsQuery } from '../queries/useForeignAssets';

/**
 * TODO: Hooks are not ready to destroy asset because we need multiple calls to do it.
 * Approximate flow should be like this:
 *
 * Transaction 1
 * 1. Freeze the asset to be destroy -> foreignAssets.freezeAsset(id) (NOT SUDO)
 *
 * Transaction 2 (Batch)
 * 1. Start destroy -> foreignAssetsCreator.destroyForeignAsset(assetId) (SUDO)
 * 2. Destroy Rate -> assetRate.remove(assetKind) (SUDO)
 *
 * Transaction 3
 * 1. Destroy Accounts -> foreignAssets.destroyAccounts(id) (NOT SUDO)
 *
 * Transaction 4 (Batch)
 * 1. Destroy Approvals -> foreignAssets.destroyApprovals(id)  (NOT SUDO)
 * 2. Finish Destroy ->  foreignAssets.finishDestroy(id) (NOT SUDO)
 *
 **/

export function useStartDestroyForeignAsset(
  paraId: number | undefined,
  config: ChainConfig | undefined,
) {
  throw new Error('Not implemented');

  const api = useAppchainApi(paraId, config);
  const { sudoKey } = useAppchainSudo();
  const invalidate = useInvalidateForeignAssetsIdsQuery();

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.sudo.sudo,
    config,
    address: sudoKey,
    onSuccess: () => invalidate(),
  });

  return {
    isLoading,
    send: async (id: bigint) => {
      if (!api || !sudoKey || !id) {
        return;
      }

      const calls: SubmittableExtrinsic<'promise'>[] = [
        api.tx.assetRate.remove(id),
        api.tx.foreignAssets.forceClearMetadata(id),
        api.tx.foreignAssets.startDestroy(id),
      ];

      send(api.tx.utility.batch(calls));
    },
  };
}

export function useFinishDestroyForeignAsset(
  paraId: number | undefined,
  config: ChainConfig | undefined,
) {
  throw new Error('Not implemented');

  const api = useAppchainApi(paraId, config);
  const { sudoKey } = useAppchainSudo();
  const invalidate = useInvalidateForeignAssetsIdsQuery();

  const { isLoading, send } = useApiTransaction({
    tx: api?.tx.sudo.sudo,
    config,
    address: sudoKey,
    onSuccess: () => invalidate(),
  });

  return {
    isLoading,
    send: async (id: bigint) => {
      if (!api || !sudoKey || !id) {
        return;
      }

      const calls: SubmittableExtrinsic<'promise'>[] = [
        api.tx.foreignAssets.finishDestroy(id),
        api.tx.foreignAssetsCreator.destroyForeignAsset(id),
        api.tx.foreignAssetsCreator.removeExistingAssetType(id),
        // api.tx.foreignAssets.forceClearMetadata(id),
        // api.tx.assetRate.remove(id),
      ];

      send(api.tx.utility.batch(calls));
    },
  };
}
