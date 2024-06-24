import { StaticImageData } from 'next/image';

import encrypt from '@/images/extensions/enkrypt.png';
import polkadotLogo from '@/images/extensions/polkadot.svg';
import subWallet from '@/images/extensions/subwallet.png';
import talisman from '@/images/extensions/talisman.svg';

export interface ExtensionInfo {
  key: string;
  name: string;
  logo: StaticImageData;
  url: string;
  color: string;
}

export const EXTENSIONS: ExtensionInfo[] = [
  {
    key: 'talisman',
    name: 'Talisman',
    logo: talisman,
    url: 'https://www.talisman.xyz/',
    color: '253, 72, 72',
  },
  {
    key: 'subwallet-js',
    name: 'SubWallet',
    logo: subWallet,
    url: 'https://www.subwallet.app/',
    color: '3, 78, 255',
  },
  {
    key: 'enkrypt',
    name: 'Enkrypt',
    logo: encrypt,
    url: 'https://www.enkrypt.com/',
    color: '144, 75, 255',
  },
  {
    key: 'polkadot-js',
    name: 'Polkadot{.js}',
    logo: polkadotLogo,
    url: 'https://polkadot.js.org/extension/',
    color: '255, 140, 0',
  },
];
