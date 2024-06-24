import { proxyAtom } from '@/components/Proxy/state/proxy.atoms';
import { SelectedProxy } from '@/components/Proxy/state/proxy.interfaces';
import { useAtom } from 'jotai';

interface Proxy {
  proxy: SelectedProxy | undefined;
  setProxy: (account?: SelectedProxy) => void;
}

export function useProxy(): Proxy {
  const [proxy, setProxy] = useAtom(proxyAtom);

  return {
    proxy,
    setProxy,
  };
}
