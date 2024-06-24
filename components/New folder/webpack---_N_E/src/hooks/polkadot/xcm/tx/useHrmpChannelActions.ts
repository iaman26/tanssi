import { ChainConfig, dancebox, flashbox } from '@/config';
import type { ApiPromise } from '@polkadot/api';
import { useAppchainSudo } from '../../appchain';
import { useAppchainApi } from '../../appchain/useAppchainApi';
import { useRelayActiveConfig } from '../../common';
import { useApi } from '../../useApi';
import {
  UseApiTransactionOptions,
  useApiTransaction,
} from '../../useApiTransaction';
import { useHrmpOpenChannelRequestsList } from '../queries';

type Options = Omit<UseApiTransactionOptions, 'tx' | 'config'>;
type SendParams = Parameters<ApiPromise['tx']['polkadotXcm']['send']>;

export function useHrmpInitOpenChannel(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  options?: Options,
) {
  const relayApi = useApi(config?.relay.ws);
  const activeConfig = useRelayActiveConfig(config?.relay);

  function getCallHash(destinationParaId: number): string {
    if (!relayApi || !activeConfig) {
      throw new Error('Relay chain API or active config is not available');
    }

    return relayApi.tx.hrmp
      .hrmpInitOpenChannel(
        destinationParaId,
        activeConfig.hrmpChannelMaxCapacity,
        activeConfig.hrmpChannelMaxTotalSize,
      )
      .method.toHex();
  }

  return useHrmpChannelAction(paraId, config, getCallHash, options);
}

export function useHrmpAcceptChannel(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  options?: Options,
) {
  const relayApi = useApi(config?.relay.ws);

  function getCallHash(senderParaId: number): string {
    if (!relayApi) {
      throw new Error('Relay chain API not available');
    }

    return relayApi.tx.hrmp.hrmpAcceptOpenChannel(senderParaId).method.toHex();
  }

  return useHrmpChannelAction(paraId, config, getCallHash, options);
}

export function useHrmpCancelOpenChannelRequest(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  options?: Options,
) {
  const relayApi = useApi(config?.relay.ws);
  const list = useHrmpOpenChannelRequestsList(config?.relay);

  function getCallHash(
    sourceParaId: number,
    destinationParaId: number,
  ): string {
    if (!relayApi || !list) {
      throw new Error('Relay chain API or open channel list not available');
    }

    return relayApi.tx.hrmp
      .hrmpCancelOpenRequest(
        {
          sender: sourceParaId,
          recipient: destinationParaId,
        },
        list.length + 1,
      )
      .method.toHex();
  }

  return useHrmpChannelAction(paraId, config, getCallHash, options);
}

export function useHrmpCloseChannel(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  options?: Options,
) {
  const relayApi = useApi(config?.relay.ws);
  const list = useHrmpOpenChannelRequestsList(config?.relay);

  function getCallHash(
    sourceParaId: number,
    destinationParaId: number,
  ): string {
    if (!relayApi || !list) {
      throw new Error('Relay chain API or open channel list not available');
    }

    return relayApi.tx.hrmp
      .hrmpCloseChannel({
        sender: sourceParaId,
        recipient: destinationParaId,
      })
      .method.toHex();
  }

  return useHrmpChannelAction(paraId, config, getCallHash, options);
}

export function useHrmpChannelAction<Params extends unknown[]>(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  getCallHash: (...params: Params) => string,
  options?: Options,
) {
  const api = useAppchainApi(paraId, config);
  const { sudoKey } = useAppchainSudo();

  function getPolkadotXcmExtrinsic(
    ...params: Params
  ): Parameters<ApiPromise['tx']['sudo']['sudo']>[0] {
    const hash = getCallHash(...params);

    if (!api) {
      throw new Error('API is not available');
    }

    return api.tx.polkadotXcm.send(
      ...getPolkadotXcmSendParams(paraId, config, hash),
    );
  }

  const { isLoading, send, getFee } = useApiTransaction({
    tx: api?.tx.sudo.sudo,
    config,
    address: sudoKey,
    ...options,
  });

  return {
    isLoading,
    send: async (...params: Params) => send(getPolkadotXcmExtrinsic(...params)),
    getFee: async (...params: Params) =>
      getFee(getPolkadotXcmExtrinsic(...params)),
  };
}

function getPolkadotXcmSendParams(
  paraId: number | undefined,
  config: ChainConfig | undefined,
  callHash: string,
): SendParams {
  const feeAmount =
    config && [dancebox.key, flashbox.key].includes(config.key)
      ? 1_000_000_000_000n
      : 10_000_000_000n;

  return [
    { V3: { parents: 1, interior: 'Here' } },
    {
      V3: [
        {
          WithdrawAsset: [
            {
              id: { Concrete: { parents: 0n, interior: 'Here' } },
              fun: { Fungible: feeAmount },
            },
          ],
        },
        {
          BuyExecution: {
            fees: {
              id: { Concrete: { parents: 0n, interior: 'Here' } },
              fun: { Fungible: feeAmount },
            },
            weightLimit: 'Unlimited',
          },
        },
        {
          SetAppendix: [
            {
              RefundSurplus: {},
            },
            {
              DepositAsset: {
                assets: { Wild: { AllCounted: 1 } },
                beneficiary: {
                  parents: 0n,
                  interior: {
                    X1: {
                      Parachain: paraId,
                    },
                  },
                },
              },
            },
          ],
        },
        {
          Transact: {
            originType: 'Native',
            requireWeightAtMost: {
              refTime: 1000000000n,
              proofSize: 65536n,
            },
            call: {
              encoded: callHash,
            },
          },
        },
      ],
    },
  ];
}
