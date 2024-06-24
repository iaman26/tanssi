import { useFlag } from '@/hooks/flags/useFlag';

export function useIsFlashboxEnabledFlag(): {
  isEnabled: boolean;
  isLoading: boolean;
} {
  const flag = useFlag('is-flashbox-available');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
  };
}
