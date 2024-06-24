import { useAtom } from 'jotai';
import { isCampaignBannerVisibleAtom } from './campaign.atoms';

export function useCampaignState() {
  const [isCampaignBannerVisible, setIsCampaignBannerVisible] = useAtom(
    isCampaignBannerVisibleAtom,
  );

  return {
    isCampaignBannerVisible,
    setIsCampaignBannerVisible,
  };
}
