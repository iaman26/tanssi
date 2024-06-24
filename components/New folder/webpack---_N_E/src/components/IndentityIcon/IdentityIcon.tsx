import { Box, Center, CenterProps } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { minidenticon } from 'minidenticons';
import Image from 'next/image';
import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IdentityIconProps extends CenterProps {
  value: string;
  size?: number;
  iconImage?: {
    type: string;
    content: string;
  };
  saturation?: string | number;
  lightness?: string | number;
  withUpload?: boolean;
}

export function IdentityIcon({
  iconImage,
  value,
  size = 65,
  saturation,
  lightness,
  withUpload = false,
  ...wrapperProps
}: IdentityIconProps) {
  const svgText = useMemo(
    () => minidenticon(value || uuidv4(), saturation, lightness),
    [value, saturation, lightness],
  );

  let src: string = `data:image/svg+xml;utf8,${encodeURIComponent(svgText)}`;

  if (iconImage) {
    src = `data:${iconImage.type};base64,${iconImage.content}`;
  }

  return (
    <Center w={size} h={size} {...wrapperProps}>
      <Image
        src={src}
        alt={value}
        width={size}
        height={size}
        style={{ borderRadius: 'inherit' }}
      />
      {withUpload && (
        <Box
          pos={'absolute'}
          right={-8}
          bottom={-10}
          bg={'dark.6'}
          w={25}
          h={25}
          style={{
            border: '3px solid var(--mantine-color-dark-8)',
            borderRadius: '50%',
          }}
        >
          <IconUpload
            size={15}
            stroke={2}
            color={'rgba(255, 255, 255, 0.3)'}
            style={{ marginLeft: 2, marginBottom: 2 }}
          />
        </Box>
      )}
    </Center>
  );
}
