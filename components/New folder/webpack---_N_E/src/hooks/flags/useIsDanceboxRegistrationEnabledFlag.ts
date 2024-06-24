import { useFlag } from '@/hooks/flags/useFlag';

export interface DanceboxRegistrationFlag {
  isEnabled: boolean;
  isLoading: boolean;
  text?: string;
}

export function useIsDanceboxRegistrationEnabledFlag(): DanceboxRegistrationFlag {
  const flag = useFlag('is-dancebox-registration-enabled');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
    text: !!flag && typeof flag.value === 'string' ? flag.value : undefined,
  };
}
