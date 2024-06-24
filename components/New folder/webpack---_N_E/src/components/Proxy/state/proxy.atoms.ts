import { SelectedProxy } from '@/components/Proxy/state/proxy.interfaces';
import { atom } from 'jotai';

export const proxyAtom = atom<SelectedProxy | undefined>(undefined);
