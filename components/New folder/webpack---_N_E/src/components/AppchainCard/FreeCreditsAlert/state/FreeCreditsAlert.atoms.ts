import { atomWithStorage } from 'jotai/utils';

export const isFreeCreditsAlertShownStorageAtom = atomWithStorage(
  'free-credits-alert-shown',
  false,
);
