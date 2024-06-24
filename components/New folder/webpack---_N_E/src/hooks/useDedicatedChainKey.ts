import { ChainKey, isLocal } from '@/config';
import { useIsStagenetEnabledFlag } from '@/hooks/flags/useIsStagenetEnabledFlag';
import { useChainKey } from '@/state/chain';
import { useMemo } from 'react';

export function useDedicatedChainKey():
  | ChainKey.Local
  | ChainKey.Stagebox
  | ChainKey.Dancebox {
  const key = useChainKey();
  const { isEnabled: isStagenetEnabled } = useIsStagenetEnabledFlag();

  return useMemo(() => {
    if (key !== ChainKey.Flashbox) return key;
    if (isLocal) return ChainKey.Local;
    if (isStagenetEnabled) return ChainKey.Stagebox;

    return ChainKey.Dancebox;
  }, [key, isStagenetEnabled]);
}
