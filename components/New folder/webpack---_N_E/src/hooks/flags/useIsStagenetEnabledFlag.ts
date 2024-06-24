import { useFlag } from '@/hooks/flags/useFlag';

export function useIsStagenetEnabledFlag(): {
  isEnabled: boolean;
  isLoading: boolean;
} {
  const flag = useFlag('is-stagenet-available');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
  };
}
