import { ChainConfig } from '@/config';
import {
  CollatorsPoolsValue,
  useCollatorsPoolsWithOption,
} from '@/hooks/polkadot/staking';
import { useConnectedAddressOrProxied } from '@/hooks/useConnectedAddressOrProxied';

export function useManualRewardsCheckpoint(
  collators: string[] | undefined,
  config: ChainConfig,
): CollatorsPoolsValue | undefined {
  const address = useConnectedAddressOrProxied();

  return useCollatorsPoolsWithOption({
    option: { ManualRewardsCheckpoint: { delegator: address } },
    collators,
    config,
  });
}
