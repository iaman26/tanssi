import { atomWithStorage } from 'jotai/utils';

export const termsAtom = atomWithStorage<boolean>('terms-accepted', false);
