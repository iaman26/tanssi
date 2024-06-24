import { ChainKey, defaultChainKey } from '@/config';
import { useIsStagenetEnabledFlag } from '@/hooks/flags/useIsStagenetEnabledFlag';
import { useGoHome } from '@/hooks/useGoHome';
import { useChainKey, useSetChainKey } from '@/state/chain';
import { useEffect } from 'react';

export function useBlockStageboxInProd(): void {
  const key = useChainKey();
  const setChainKey = useSetChainKey();
  const { replaceHome } = useGoHome();
  const { isEnabled: isStagenetEnabled, isLoading } =
    useIsStagenetEnabledFlag();

  useEffect(() => {
    if (key === ChainKey.Stagebox && !isLoading && !isStagenetEnabled) {
      setChainKey(defaultChainKey);
      replaceHome();
    }
  }, [isLoading, key, isStagenetEnabled, replaceHome, setChainKey]);
}
