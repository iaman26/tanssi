import { ChainConfig, RelayChainConfig } from '@/config';
import { useExistentialDeposit, useFreeBalance } from '@/hooks/polkadot/common';
import { useApi } from '@/hooks/polkadot/useApi';
import {
  UseApiTransactionOptions,
  useApiTransaction,
} from '@/hooks/polkadot/useApiTransaction';
import { AssetAmount } from '@moonbeam-network/xcm-types';

export function useTransferKeepAlive(
  address: string | undefined,
  config: ChainConfig | RelayChainConfig | undefined,
  options?: Omit<UseApiTransactionOptions, 'tx' | 'config'>,
) {
  const api = useApi(config?.ws);
  const balance = useFreeBalance(address, config);
  const existentialDeposit = useExistentialDeposit(config);

  const { isLoading, send, getFee } = useApiTransaction({
    tx: api?.tx.balances.transferKeepAlive,
    config,
    omitProxy: true,
    ...options,
  });

  async function getMax(): Promise<AssetAmount | undefined> {
    if (!address || !balance || !existentialDeposit) {
      return;
    }

    const netBalance = balance.amount - existentialDeposit.amount;
    const fee = await getFee(address, netBalance);
    const max = netBalance - (fee?.amount || 0n);

    if (max > 0n) {
      return config?.getAssetAmount(max);
    }
  }

  return {
    isLoading,
    send,
    getFee,
    getMax,
  };
}
