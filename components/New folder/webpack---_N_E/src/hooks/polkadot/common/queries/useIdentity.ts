import { type ChainConfig, RelayChainConfig } from '@/config';
import { useApi, useApiCall } from '@/hooks/polkadot';
import '@polkadot/api-base/types/storage';
import type { Bytes, Option } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { RegistrationJudgement } from '@polkadot/types/interfaces';
import type { PalletIdentityRegistration } from '@polkadot/types/lookup';
import { u8aToString } from '@polkadot/util';

export interface IdentityMetadata {
  display?: string;
  isVerified?: boolean;
  isLowQuality?: boolean;
  email?: string;
  twitter?: string;
}

export function useIdentity(
  address: string | undefined,
  config: ChainConfig | RelayChainConfig,
): IdentityMetadata | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.identity.identityOf,
    [address],
    transformIdentity,
  );
}

export function transformIdentity(
  identity: ITuple<[PalletIdentityRegistration, Option<Bytes>]>,
): IdentityMetadata | undefined {
  return {
    display: u8aToString(identity[0]?.info.display.asRaw.toU8a(true)),
    email: u8aToString(identity[0]?.info.email.asRaw.toU8a(true)) || undefined,
    twitter:
      u8aToString(identity[0]?.info.twitter.asRaw.toU8a(true)) || undefined,
    isVerified: isVerified(identity[0]?.judgements),
    isLowQuality: isLowQuality(identity[0]?.judgements),
  };
}

function isVerified(judgements: RegistrationJudgement[]): boolean {
  return judgements?.some(
    ([, judgement]) => judgement?.isKnownGood || judgement?.isReasonable,
  );
}

function isLowQuality(judgements: RegistrationJudgement[]): boolean {
  return judgements?.some(([, judgement]) => judgement?.isLowQuality);
}
