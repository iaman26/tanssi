import { hasLiveAppchainAtom } from '@/components/pages/Dashboard/state/dashboard.atoms';
import { useAtom } from 'jotai';

export function useHasLiveAppchain(): [
  boolean | undefined,
  (has: boolean) => void,
] {
  const [hasLiveAppchain, setHasLiveAppchain] = useAtom(hasLiveAppchainAtom);

  return [hasLiveAppchain, setHasLiveAppchain];
}
