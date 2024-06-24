import { useMediaQuery } from '@/hooks/useMediaQuery';
import campaignBannerLong from '@/images/tanssi_campaign_long_banner.webp';
import campaignBannerMobile from '@/images/tanssi_campaign_mobile_banner.webp';
import campaignBannerRegular from '@/images/tanssi_campaign_regular_banner.webp';
import { useCampaignState } from '@/state/campaign/campaign.hooks';
import { ActionIcon, Anchor, Image, useMantineTheme } from '@mantine/core';
import NextImage from 'next/image';
import { IoArrowForwardSharp, IoCloseSharp } from 'react-icons/io5';
import { CAMPAIGN_BANNER_ALT, CAMPAIGN_URL } from './CampaignBanner.constants';

export interface Props {
  isLong?: boolean;
}

export function CampaignBanner({ isLong = false }: Readonly<Props>) {
  const { md } = useMediaQuery();
  const theme = useMantineTheme();

  const desktopBanner = isLong ? campaignBannerLong : campaignBannerRegular;
  const campaignBanner = md ? desktopBanner : campaignBannerMobile;

  const { isCampaignBannerVisible, setIsCampaignBannerVisible } =
    useCampaignState();

  const handleCloseClick = () => {
    setIsCampaignBannerVisible(!isCampaignBannerVisible);
  };

  if (!isCampaignBannerVisible) {
    return null;
  }

  return (
    <Anchor
      href={CAMPAIGN_URL}
      target="_blank"
      style={{
        position: 'relative',
        display: 'block',
        width: '100%',
      }}
    >
      <Image
        component={NextImage}
        alt={CAMPAIGN_BANNER_ALT}
        src={campaignBanner}
        style={{ width: '100%', height: 'auto' }}
        priority
        width={1536}
        height={1024}
      />
      <ActionIcon
        style={{
          position: 'absolute',
          top: '3%',
          right: '2%',
          backgroundColor: 'transparent',
        }}
        onClick={(e) => {
          e.preventDefault();
          handleCloseClick();
        }}
      >
        <IoCloseSharp size={20} />
      </ActionIcon>
      <div
        style={{
          position: 'absolute',
          bottom: '3%',
          right: '2%',
          backgroundColor: 'transparent',
          color: theme.other.colors.white,
        }}
      >
        <IoArrowForwardSharp size={20} />
      </div>
    </Anchor>
  );
}
