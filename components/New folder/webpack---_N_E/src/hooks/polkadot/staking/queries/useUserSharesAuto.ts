import type { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import { useConnectedAddressOrProxied } from '@/hooks/useConnectedAddressOrProxied';
import type { u128 } from '@polkadot/types-codec';

export function useUserSharesAuto(
  collator: string | undefined,
  config: ChainConfig,
): bigint | undefined {
  const api = useApi(config.ws);
  const address = useConnectedAddressOrProxied();

  return useApiCall(
    api?.query.pooledStaking.pools,
    [collator, { AutoCompoundingShares: { delegator: address } }],
    transform,
  );
}

function transform(value: u128): bigint {
  return value.toBigInt();
}
