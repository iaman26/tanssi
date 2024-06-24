import { ChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import type { u128 } from '@polkadot/types-codec';
import { useMemo } from 'react';

export type CollatorsPoolsValue = Record<string, bigint>;

interface CollatorsPools {
  collators: string[] | undefined;
  option: unknown;
  config: ChainConfig;
}

export function useCollatorsPoolsWithOption({
  collators,
  option,
  config,
}: CollatorsPools): CollatorsPoolsValue | undefined {
  const api = useApi(config.ws);

  const args = useMemo(
    () =>
      collators ? collators.map((collator) => [collator, option]) : undefined,
    [collators, option],
  );

  return useApiCall(
    api?.query.pooledStaking.pools.multi,
    [args],
    (values: u128[]) => transformCollatorsMulti(values, collators),
  );
}

export function transformCollatorsMulti(
  values: u128[],
  collators: string[] | undefined,
): CollatorsPoolsValue {
  const result: CollatorsPoolsValue = {};

  values.forEach((v, i) => {
    if (collators?.[i]) {
      result[collators?.[i]] = v.toBigInt();
    }
  });

  return result;
}
