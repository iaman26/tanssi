import { ChainKey, defaultChainKey } from '@/config';
import { atomWithStorage } from 'jotai/utils';

export const selectedChainKeyAtom = atomWithStorage<ChainKey>(
  'selected-chain-key',
  defaultChainKey,
);
