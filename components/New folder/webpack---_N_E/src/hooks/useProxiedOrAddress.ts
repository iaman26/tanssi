import { useProxy } from '@/components/Proxy/state/proxy.hooks';

export function useProxiedOrAddress(
  address: string | undefined,
): string | undefined {
  const { proxy } = useProxy();

  return proxy?.proxiedAddress || address;
}
