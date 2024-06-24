import { atomWithStorage } from 'jotai/utils';

export const isCampaignBannerVisibleAtom = atomWithStorage(
  'is-campaign-banner-visible',
  true,
);
