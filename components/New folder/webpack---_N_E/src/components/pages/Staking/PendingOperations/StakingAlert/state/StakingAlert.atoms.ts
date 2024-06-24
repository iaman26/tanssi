import { atomWithStorage } from 'jotai/utils';

export const isStakingAlertShownStorageAtom = atomWithStorage(
  'staking-alert-shown',
  false,
);
