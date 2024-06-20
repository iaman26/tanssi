import {
    dev,
    dot,
    ftmwh,
    unit,
    usdc,
    usdcwh,
    usdt,
    usdtwh,
  } from '@moonbeam-network/xcm-config';
  import { StaticImageData } from 'next/image';
  
  import dotLogo from '@/images/dot.webp';
  import ftmLogo from '@/images/fantom-ftm-logo.webp';
  import moonbaseLogo from '@/images/moonbase-icon.webp';
  import usdcLogo from '@/images/usdc.webp';
  import usdtLogo from '@/images/usdt.webp';
  
  export const logos: Record<string, StaticImageData> = {
    [dev.key]: moonbaseLogo,
    [dot.key]: dotLogo,
    [unit.key]: dotLogo,
    [usdc.key]: usdcLogo,
    [usdt.key]: usdtLogo,
    [usdcwh.key]: usdcLogo,
    [usdtwh.key]: usdtLogo,
    [ftmwh.key]: ftmLogo,
  };
  