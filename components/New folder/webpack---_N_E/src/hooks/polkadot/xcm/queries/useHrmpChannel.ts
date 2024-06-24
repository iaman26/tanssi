import { RelayChainConfig } from '@/config';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import type { PolkadotRuntimeParachainsHrmpHrmpChannel } from '@polkadot/types/lookup';
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useParachains } from '../../common';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';

export interface HrmpChannelId {
  sender: number;
  recipient: number;
}

export interface HrmpChannel {
  maxCapacity: number;
  maxTotalSize: number;
  maxMessageSize: number;
  msgCount: number;
  totalSize: number;
  mqcHead: string;
  senderDeposit: AssetAmount;
  recipientDeposit: AssetAmount;
}

export function useHrmpChannel(
  sender: number,
  recipient: number,
  config: RelayChainConfig,
): HrmpChannel | undefined {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.hrmp.hrmpChannels,
    [{ sender, recipient }],
    (channel) => transform(channel, config),
  );
}

function transform(
  channel: PolkadotRuntimeParachainsHrmpHrmpChannel,
  config: RelayChainConfig,
): HrmpChannel {
  return {
    maxCapacity: channel.maxCapacity.toNumber(),
    maxTotalSize: channel.maxTotalSize.toNumber(),
    maxMessageSize: channel.maxMessageSize.toNumber(),
    msgCount: channel.msgCount.toNumber(),
    totalSize: channel.totalSize.toNumber(),
    mqcHead: channel.mqcHead.toString(),
    senderDeposit: config.getAssetAmount(channel.senderDeposit.toBigInt()),
    recipientDeposit: config.getAssetAmount(
      channel.recipientDeposit.toBigInt(),
    ),
  };
}

export function useHrmpChannels(
  config: RelayChainConfig | undefined,
  paraId?: number,
): UseQueryResult<HrmpChannelId[] | undefined> {
  const api = useApi(config?.ws);

  return useQuery({
    queryKey: ['hrmpChannels'],
    queryFn: async () => {
      const res = await api?.query.hrmp.hrmpChannels.entries();

      if (!res) {
        return;
      }

      return res
        .map<HrmpChannelId>(([key]) => {
          const [converted] = key.toHuman() as [
            { sender: string; recipient: string },
          ];

          return {
            sender: +converted.sender.replace(',', ''),
            recipient: +converted.recipient.replace(',', ''),
          };
        })
        .filter(
          ({ sender, recipient }) =>
            !paraId || sender === paraId || recipient === paraId,
        );
    },
    enabled: !!api,
  });
}

export function useInvalidateHrmpChannels() {
  const queryClient = useQueryClient();

  return useCallback(() => {
    queryClient.invalidateQueries({
      queryKey: ['hrmpChannels'],
    });
  }, [queryClient]);
}

export function useOpenableChannels(
  paraId?: number,
  config?: RelayChainConfig | undefined,
): number[] | undefined {
  const paraIds = useParachains(config);
  const { data: existingChannels } = useHrmpChannels(config, paraId);

  return useMemo(() => {
    if (!paraId || !existingChannels || !paraIds) {
      return [];
    }

    const existingChannelsParaIds = existingChannels.map(
      ({ sender, recipient }) => (sender === paraId ? recipient : sender),
    );

    return paraIds.filter(
      (id) => id !== paraId && !existingChannelsParaIds.includes(id),
    );
  }, [existingChannels, paraId, paraIds]);
}
