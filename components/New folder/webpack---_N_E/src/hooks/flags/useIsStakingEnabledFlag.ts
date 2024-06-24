import { useFlag } from '@/hooks/flags/useFlag';

export function useIsStakingEnabledFlag(): {
  isEnabled: boolean;
  isLoading: boolean;
} {
  const flag = useFlag('is-staking-enabled');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
  };
}
