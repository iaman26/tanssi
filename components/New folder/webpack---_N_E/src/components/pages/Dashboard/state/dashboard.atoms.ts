import { atomWithReset } from 'jotai/utils';

export const hasLiveAppchainAtom = atomWithReset<boolean | undefined>(
  undefined,
);
