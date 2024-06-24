import { useFlag } from '@/hooks/flags/useFlag';

export function useIsRegisterAssetsEnabledFlag(): {
  isEnabled: boolean;
  isLoading: boolean;
} {
  const flag = useFlag('is-register-assets-enabled');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
  };
}
