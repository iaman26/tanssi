import { getSovereignAccountAddresses } from '@moonbeam-network/xcm-utils';
import { encodeAddress } from '@polkadot/util-crypto';
import { useMemo } from 'react';

export function useRelaySovereignAddress(
  paraId?: number,
  ss58Format?: number,
): string | undefined {
  return useMemo(
    () =>
      paraId
        ? encodeAddress(getSovereignAccountAddresses(paraId).relay, ss58Format)
        : undefined,
    [paraId, ss58Format],
  );
}
