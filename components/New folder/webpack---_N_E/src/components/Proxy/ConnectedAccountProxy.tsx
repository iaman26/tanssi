// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { Proxy } from '@/components/Proxy/Proxy';
import { ProxyType } from '@/components/Proxy/state/proxy.interfaces';
import { ChainConfig } from '@/config';
import { useAddress } from '@/state/user';

interface Props {
  proxyType: ProxyType;
  config: ChainConfig;
}

export function ConnectedAccountProxy({ proxyType, config }: Props) {
  const address = useAddress();

  if (!address) return null;

  return <Proxy address={address} proxyType={proxyType} config={config} />;
}
