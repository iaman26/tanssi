import { useAccount } from 'wagmi';
import { useIsMounted } from './useIsMounted';

export function useEvmAddress(): string | undefined {
  const isMounted = useIsMounted();
  const { address } = useAccount();

  return isMounted ? address : undefined;
}
