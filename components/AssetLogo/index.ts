import { Center, CenterProps, Image } from '@mantine/core';
import NextImage from 'next/image';
import { TbCoin } from 'react-icons/tb';
import { logos } from './logos';

export interface Props extends CenterProps {
  assetKey?: string;
  size?: number;
}

export const AssetLogo = ({ assetKey, size = 24, ...others }: Props) => {
  const src = assetKey && logos[assetKey];

  return (
    <Center w={size} h={size} {...others}>
      {src ? (
        <Image
          component={NextImage}
          alt={assetKey || ''}
          src={src}
          fit={'scale-down'}
          style={{ with: size, height: size, borderRadius: '50%' }}
        />
      ) : (
        <TbCoin size={size} />
      )}
    </Center>
  );
};
