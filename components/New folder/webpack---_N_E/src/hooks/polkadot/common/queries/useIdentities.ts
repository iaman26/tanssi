import { type ChainConfig, RelayChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import { IdentityMetadata, transformIdentity } from '@/hooks/polkadot/common';
import '@polkadot/api-base/types/storage';
import type { Bytes, Option, Vec } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { PalletIdentityRegistration } from '@polkadot/types/lookup';

export function useIdentities(
  addresses: string[] | undefined,
  config: ChainConfig | RelayChainConfig,
): Record<string, IdentityMetadata | undefined> | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.identity.identityOf.multi,
    [addresses],
    (values: Vec<ITuple<[PalletIdentityRegistration, Option<Bytes>]>>) =>
      transform(values, addresses),
  );
}

function transform(
  identities: Vec<ITuple<[PalletIdentityRegistration, Option<Bytes>]>>,
  addresses: string[] | undefined,
): Record<string, IdentityMetadata | undefined> {
  const result: Record<string, IdentityMetadata | undefined> = {};

  identities?.forEach((identity, i) => {
    if (addresses?.[i]) {
      result[addresses?.[i]] = transformIdentity(identity);
    }
  });

  return result;
}
