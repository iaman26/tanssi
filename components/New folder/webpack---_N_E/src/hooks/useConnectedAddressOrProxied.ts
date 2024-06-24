import { useProxiedOrAddress } from '@/hooks/useProxiedOrAddress';
import { useAddress } from '@/state/user';

export function useConnectedAddressOrProxied(): string | undefined {
  const address = useAddress();

  return useProxiedOrAddress(address);
}
