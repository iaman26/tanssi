import { useAtom } from 'jotai';
import { useCallback } from 'react';
import { termsAtom } from './terms.atoms';

export interface Terms {
  areTermsAccepted: boolean;
  accept: () => void;
}

export function useTerms(): Terms {
  const [areTermsAccepted, setIsOpen] = useAtom(termsAtom);

  return {
    areTermsAccepted,
    accept: useCallback(() => setIsOpen(true), [setIsOpen]),
  };
}
