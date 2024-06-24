import { ChainConfig } from '@/config';
import { useConnectedAddressOrProxied } from '@/hooks/useConnectedAddressOrProxied';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import type { StorageKey } from '@polkadot/types';
import type { AccountId32 } from '@polkadot/types/interfaces';
import type { PalletPooledStakingPendingOperationKey } from '@polkadot/types/lookup';
import type { Codec } from '@polkadot/types/types';
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useCallback } from 'react';
import { useApi } from '../../useApi';
import { PendingOperation, PendingOperationType } from '../staking.interfaces';

export function useUserStakingPendingOperations(
  config: ChainConfig,
): UseQueryResult<PendingOperation[] | undefined> {
  const api = useApi(config.ws);
  const address = useConnectedAddressOrProxied();

  return useQuery({
    queryKey: ['pendingOperations', address],
    queryFn: async () => {
      const res =
        await api?.query.pooledStaking.pendingOperations.entries(address);

      return res ? transform(config, res) : undefined;
    },
    enabled: !!api && !!address,
  });
}

export function useInvalidatePendingOperationsQuery() {
  const address = useConnectedAddressOrProxied();
  const queryClient = useQueryClient();

  return useCallback(() => {
    queryClient.invalidateQueries({
      queryKey: ['pendingOperations', address],
    });
  }, [address, queryClient]);
}

export function transform(
  config: ChainConfig,
  data: [
    StorageKey<[AccountId32, PalletPooledStakingPendingOperationKey]>,
    Codec,
  ][],
): PendingOperation[] {
  return data.map(([key, value]) => {
    const converted = key.toHuman() as [
      string,
      Record<PendingOperationType, { at: string; candidate: string }>,
    ];

    const [delegator, operation] = converted;
    const type = Object.keys(operation)[0] as PendingOperationType;
    const { candidate, at } = operation[type];

    return {
      id: key.toHex(),
      type,
      delegator,
      candidate,
      amount: AssetAmount.fromAsset(config.asset, {
        amount: BigInt(value.toString()),
        decimals: config.decimals,
      }),
      at: +at.replaceAll(',', ''),
    };
  });
}
