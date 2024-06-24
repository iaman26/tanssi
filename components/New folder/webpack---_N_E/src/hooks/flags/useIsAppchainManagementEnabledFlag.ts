import { useFlag } from '@/hooks/flags/useFlag';

export function useIsAppchainManagementEnabledFlag(): {
  isEnabled: boolean;
  isLoading: boolean;
} {
  const flag = useFlag('is-appchain-management-enabled');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
  };
}
