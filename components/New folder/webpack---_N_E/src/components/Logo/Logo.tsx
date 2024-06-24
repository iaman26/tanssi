import { useIsDark } from '@/hooks/useIsDark';
import dark from '@/images/logo_dark.webp';
import white from '@/images/logo_white.webp';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

export interface Props {
  width?: number;
  height?: number;
  withLink?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Logo({
  width = 140,
  height,
  withLink = true,
  style,
  onClick,
}: Props) {
  const isDark = useIsDark();
  const img = (
    <Image
      src={isDark ? white : dark}
      alt={'Tanssi'}
      width={width}
      height={height}
      style={style}
      priority
    />
  );

  if (!withLink) {
    return img;
  }

  return (
    <Link href={'/'} onClick={onClick}>
      {img}
    </Link>
  );
}
