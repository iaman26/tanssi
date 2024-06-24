import { useFlag } from '@/hooks/flags/useFlag';

export interface FlashboxRegistrationFlag {
  isEnabled: boolean;
  isLoading: boolean;
  text?: string;
}

export function useIsFlashboxRegistrationEnabledFlag(): FlashboxRegistrationFlag {
  const flag = useFlag('is-flashbox-registration-enabled');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
    text: !!flag && typeof flag.value === 'string' ? flag.value : undefined,
  };
}
