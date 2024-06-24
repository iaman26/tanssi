import { useFlag } from '@/hooks/flags/useFlag';

export function useIsProxyEnabledFlag(): {
  isEnabled: boolean;
  isLoading: boolean;
} {
  const flag = useFlag('is-proxy-enabled');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
  };
}
