import { RelayChainConfig } from '@/config';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import type { PolkadotRuntimeParachainsConfigurationHostConfiguration } from '@polkadot/types/lookup';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';

export interface ChainActiveConfig {
  hrmpMaxParachainOutboundChannels: number;
  hrmpSenderDeposit: AssetAmount;
  hrmpRecipientDeposit: AssetAmount;
  hrmpChannelMaxCapacity: number;
  hrmpChannelMaxTotalSize: number;
  hrmpMaxParachainInboundChannels: number;
  hrmpChannelMaxMessageSize: number;
}

export function useRelayActiveConfig(
  config?: RelayChainConfig,
): ChainActiveConfig | undefined {
  const api = useApi(config?.ws);

  return useApiCall(api?.query.configuration.activeConfig, [], (data) =>
    transform(data, config!),
  );
}

export function transform(
  data: PolkadotRuntimeParachainsConfigurationHostConfiguration,
  config: RelayChainConfig,
): ChainActiveConfig {
  return {
    hrmpMaxParachainOutboundChannels:
      data.hrmpMaxParachainOutboundChannels.toNumber(),
    hrmpSenderDeposit: config.getAssetAmount(data.hrmpSenderDeposit.toBigInt()),
    hrmpRecipientDeposit: config.getAssetAmount(
      data.hrmpRecipientDeposit.toBigInt(),
    ),
    hrmpChannelMaxCapacity: data.hrmpChannelMaxCapacity.toNumber(),
    hrmpChannelMaxTotalSize: data.hrmpChannelMaxTotalSize.toNumber(),
    hrmpMaxParachainInboundChannels:
      data.hrmpMaxParachainInboundChannels.toNumber(),
    hrmpChannelMaxMessageSize: data.hrmpChannelMaxMessageSize.toNumber(),
  };
}
