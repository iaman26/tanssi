import { PROXY_ALLOWED_TYPES } from '@/components/Proxy/state/proxy.constants';
import { ProxyType } from '@/components/Proxy/state/proxy.interfaces';
import { ChainConfig } from '@/config';
import { useAllProxies } from '@/hooks/polkadot/proxy';
import { useMemo } from 'react';

export type ProxiedAccount = { address: string; proxyType: ProxyType };
export type ProxiesEntriesIndexed = Record<string, ProxiedAccount[]>;

export function useProxiedAccounts(
  address: string,
  proxyType: ProxyType,
  config: ChainConfig,
): {
  accounts: ProxiedAccount[] | undefined;
  isLoading: boolean;
} {
  const { data: proxies, isLoading } = useAllProxies(config);

  const accounts = useMemo(() => {
    if (!proxies?.[address]) return;

    return proxies[address].filter((proxy) =>
      isProxyTypeAllowed(proxyType, proxy.proxyType),
    );
  }, [proxies, address, proxyType]);

  return {
    accounts,
    isLoading,
  };
}

export function isProxyTypeAllowed(
  proxyUsedIn: ProxyType,
  proxyType: ProxyType,
): boolean {
  return (
    proxyUsedIn === 'Any' ||
    PROXY_ALLOWED_TYPES[proxyUsedIn]?.includes(proxyType) ||
    proxyUsedIn === proxyType
  );
}
