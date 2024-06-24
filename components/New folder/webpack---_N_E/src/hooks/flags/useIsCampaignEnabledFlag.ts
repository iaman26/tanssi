import { useFlag } from '@/hooks/flags/useFlag';

export function useIsCampaignEnabledFlag(): {
  isEnabled: boolean;
  isLoading: boolean;
} {
  const flag = useFlag('is-campaign-active');

  return {
    isEnabled: !!flag?.enabled,
    isLoading: !flag,
  };
}
