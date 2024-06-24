import { ProxyType } from '@/components/Proxy/state/proxy.interfaces';
import { ChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import type { Vec, u128 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { PalletProxyProxyDefinition } from '@polkadot/types/lookup';

export type Proxy = {
  delegate: string;
  proxyType: ProxyType;
  delay: number;
};

export function useProxies(
  address: string | undefined,
  paraId: number | undefined,
  config: ChainConfig | undefined,
): Proxy[] | undefined {
  const api = useAppchainApi(paraId, config);

  return useApiCall(api?.query.proxy.proxies, [address], transform);
}

function transform(
  proxies: ITuple<[Vec<PalletProxyProxyDefinition>, u128]>,
): Proxy[] {
  return proxies[0].map(({ delegate, proxyType, delay }) => ({
    delegate: delegate.toString(),
    proxyType: proxyType.type,
    delay: delay.toNumber(),
  }));
}
