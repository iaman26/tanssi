import { ChainConfig, chains, dancebox } from '@/config';
import { useChainKey } from '@/state/chain';

export function useChainConfig(): ChainConfig {
  const key = useChainKey();

  return chains.get(key) || dancebox;
}
