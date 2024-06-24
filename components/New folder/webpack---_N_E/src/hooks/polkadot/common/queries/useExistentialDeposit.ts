import { ChainConfig, RelayChainConfig } from '@/config';
import { useApi } from '@/hooks/polkadot';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { useMemo } from 'react';

export function useExistentialDeposit(
  config: ChainConfig | RelayChainConfig | undefined,
): AssetAmount | undefined {
  const api = useApi(config?.ws);

  return useMemo(
    () =>
      !!api && !!config
        ? config.getAssetAmount(
            api.consts.balances.existentialDeposit.toBigInt(),
          )
        : undefined,
    [api, config],
  );
}
