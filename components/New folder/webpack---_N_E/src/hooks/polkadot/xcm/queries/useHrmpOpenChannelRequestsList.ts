import { RelayChainConfig } from '@/config';
import type { Vec } from '@polkadot/types';
import type { PolkadotParachainPrimitivesPrimitivesHrmpChannelId } from '@polkadot/types/lookup';
import { useMemo } from 'react';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';

export interface ChannelRequest {
  sender: number;
  recipient: number;
}

export function useHrmpOpenChannelRequestsList(
  config?: RelayChainConfig,
): ChannelRequest[] | undefined {
  const api = useApi(config?.ws);

  return useApiCall(api?.query.hrmp.hrmpOpenChannelRequestsList, [], transform);
}

function transform(
  requests: Vec<PolkadotParachainPrimitivesPrimitivesHrmpChannelId>,
): ChannelRequest[] {
  return requests.map((request) => ({
    sender: request.sender.toNumber(),
    recipient: request.recipient.toNumber(),
  }));
}

export function useHrmpOutgoingChannels(
  paraId?: number,
  config?: RelayChainConfig,
): ChannelRequest[] | undefined {
  const channels = useHrmpOpenChannelRequestsList(config);

  return useMemo(
    () => channels?.filter(({ sender }) => sender === paraId),
    [channels, paraId],
  );
}

export function useHrmpIncomingChannels(
  paraId?: number,
  config?: RelayChainConfig,
): ChannelRequest[] | undefined {
  const channels = useHrmpOpenChannelRequestsList(config);

  return useMemo(
    () => channels?.filter(({ recipient }) => recipient === paraId),
    [channels, paraId],
  );
}
