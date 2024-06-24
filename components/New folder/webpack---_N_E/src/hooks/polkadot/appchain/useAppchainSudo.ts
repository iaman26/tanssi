import { useManageAppchainState } from '@/components/pages/Dashboard/ManageAppchain/state';
import { useAppchainSudoKey } from '@/hooks/polkadot/appchain';
import { useProxies } from '@/hooks/polkadot/proxy';
import { useExtensions } from '@/state/polkadot-extension';
import { isUndefined } from '@polkadot/util';
import { useMemo } from 'react';

export function useAppchainSudo() {
  const { paraId, config } = useManageAppchainState();
  const sudoKey = useAppchainSudoKey(paraId, config);
  const allProxies = useProxies(sudoKey, paraId, config);
  const { checkAccountAvailability, isLoading } = useExtensions();

  const isSudoAvailable = useMemo(
    () => checkAccountAvailability(sudoKey),
    [checkAccountAvailability, sudoKey],
  );

  const proxies = useMemo(
    () =>
      allProxies?.filter(
        (proxy) =>
          proxy.proxyType === 'Any' && checkAccountAvailability(proxy.delegate),
      ),
    [checkAccountAvailability, allProxies],
  );

  return {
    isSudoAvailable,
    sudoKey,
    isLoading: isUndefined(allProxies) || isLoading,
    isProxyAvailable: !!proxies?.length,
    proxies,
  };
}
