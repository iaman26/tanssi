import { ChainConfig } from '@/config';
import {
  useUserSharesAuto,
  useUserSharesManual,
} from '@/hooks/polkadot/staking';

interface DelegationShares {
  auto: bigint | undefined;
  manual: bigint | undefined;
}

export function useDelegationShares(
  collator: string | undefined,
  config: ChainConfig,
): DelegationShares {
  const auto = useUserSharesAuto(collator, config);
  const manual = useUserSharesManual(collator, config);

  return { auto, manual };
}
