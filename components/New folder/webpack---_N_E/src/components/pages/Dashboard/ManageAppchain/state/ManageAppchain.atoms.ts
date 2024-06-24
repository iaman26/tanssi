import { ChainConfig } from '@/config';
import { atom } from 'jotai';
import { ManageAppchainTab } from './ManageAppchain.constants';

export const activeTabAtom = atom<ManageAppchainTab>(
  ManageAppchainTab.Management,
);
export const paraIdAtom = atom<number | undefined>(undefined);
export const configAtom = atom<ChainConfig | undefined>(undefined);
