import { ChainConfig } from '@/config';
import { useApi } from '@/hooks/polkadot';
import { ProxiesEntriesIndexed } from '@/hooks/useProxiedAccounts';
import type { StorageKey } from '@polkadot/types';
import type { Vec, u128 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32 } from '@polkadot/types/interfaces/runtime';
import type {
  DanceboxRuntimeProxyType,
  PalletProxyProxyDefinition,
} from '@polkadot/types/lookup';
import { useQuery } from '@tanstack/react-query';

export function useAllProxies(config: ChainConfig) {
  const api = useApi(config.ws);

  return useQuery<ProxiesEntriesIndexed | undefined>({
    queryKey: ['proxies', config.name],
    queryFn: async () => {
      const res = await api?.query.proxy.proxies.entries();

      return res ? transform(res) : undefined;
    },
    enabled: !!api,
  });
}

function transform(
  entries:
    | [
        StorageKey<[AccountId32]>,
        ITuple<[Vec<PalletProxyProxyDefinition>, u128]>,
      ][]
    | [][] = [],
): ProxiesEntriesIndexed {
  const result: ProxiesEntriesIndexed = {};

  entries.forEach((entry = []) => {
    if (!entry.length) return;

    entry[1]?.[0]?.forEach(({ delegate, delay, proxyType: type }) => {
      const address = entry[0]?.args[0].toString();
      const proxyType = type.toString() as DanceboxRuntimeProxyType['type'];
      const delayed = delay.toNumber();
      const delegated = delegate.toString();

      if (!result[delegated]) {
        result[delegated] = [];
      }

      if (!delayed && address) {
        result[delegated].push({ address, proxyType });
      }
    });
  });

  return result;
}
