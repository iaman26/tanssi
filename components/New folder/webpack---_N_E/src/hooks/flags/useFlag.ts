import { useIsMounted } from '@/hooks/useIsMounted';
import { useFlags } from 'flagsmith/react';
import type { IFlagsmithFeature } from 'flagsmith/types';

export function useFlag(flagKey: string): IFlagsmithFeature | undefined {
  const isMounted = useIsMounted();
  const flag = useFlags([flagKey])[flagKey];

  if (!isMounted) {
    return undefined;
  }

  return flag;
}
