import { atomWithReset } from 'jotai/utils';
import { ReactElement } from 'react';

export const sidebarAtom = atomWithReset<ReactElement | undefined>(undefined);
