import { ChainConfig } from '@/config';
import {
  useExistentialDeposit,
  useFreeBalance,
  useRelayActiveConfig,
} from '@/hooks/polkadot/common';
import { useRelaySovereignAddress } from '@/hooks/useRelaySovereignAddress';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { toBigInt } from '@moonbeam-network/xcm-utils';

export function useHrmpOpenChannelCosts(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): AssetAmount | undefined {
  const address = useRelaySovereignAddress(paraId);
  const balance = useFreeBalance(address, config?.relay);
  const activeConfig = useRelayActiveConfig(config?.relay);
  const existentialDeposit = useExistentialDeposit(config?.relay);

  if (!config || !activeConfig || !balance || !existentialDeposit) {
    return;
  }

  return config.getAssetAmount(
    activeConfig.hrmpSenderDeposit.amount +
      activeConfig.hrmpRecipientDeposit.amount +
      existentialDeposit.amount +
      // just adding some extra amount to cover the tx fee
      // it's very hard/impossible to calculate so we just add a fixed amount
      toBigInt(1, config.decimals),
  );
}

export function useHasEnoughHrmpOpenChannelBalance(
  paraId: number | undefined,
  config: ChainConfig | undefined,
): boolean | undefined {
  const address = useRelaySovereignAddress(paraId);
  const balance = useFreeBalance(address, config?.relay);
  const costs = useHrmpOpenChannelCosts(paraId, config);

  if (!config || !balance || !costs) {
    return;
  }

  return balance.amount >= costs.amount;
}
