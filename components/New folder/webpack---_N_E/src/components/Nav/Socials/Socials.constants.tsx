import { TelegramIcon } from '@/components/icons';
import { ReactNode } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { IoLogoGithub, IoLogoYoutube } from 'react-icons/io5';

export interface SocialLink {
  label: string;
  url: string;
  icon: ReactNode;
}

const size = 20;

export const SOCIALS: SocialLink[] = [
  {
    label: 'X',
    url: 'https://twitter.com/TanssiNetwork',
    icon: <BsTwitterX size={size} />,
  },
  {
    label: 'Telegram',
    url: 'https://t.me/tanssiofficial',
    icon: <TelegramIcon size={size} />,
  },
  {
    label: 'Discord',
    url: 'https://discord.gg/kuyPhew2KB',
    icon: <FaDiscord size={size} />,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/moondance-labs/tanssi',
    icon: <IoLogoGithub size={size} />,
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@TanssiNetwork?sub_confirmation=1',
    icon: <IoLogoYoutube size={size} />,
  },
];
