import { useAtom } from 'jotai';
import { idleAtom } from './idle.atoms';

export function useIdleState() {
  const [isIdle, setIsIdle] = useAtom(idleAtom);

  return {
    isIdle,
    setIsIdle,
  };
}
