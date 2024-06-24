import { CopyAddressTooltip } from '@/components/pages/Staking/CopyAddressTooltip';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { responsiveAddress } from '@/utils/address';
import { Box, Text, rgba, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props {
  address: string;
  display: string | undefined;
  isActive?: boolean;
  isUpcoming?: boolean;
  identiconBg?: string;
  maxLength?: number;
  shadowColor?: string;
  size?: string;
}

export const CollatorDisplay = memo(function CollatorDisplay({
  address,
  display,
  maxLength = 9,
  size = 'sm',
  shadowColor,
}: Props) {
  const theme = useMantineTheme();

  const boxShadowColor = shadowColor || theme.colors.dark[8];

  const { xxl } = useMediaQuery();
  const addressFormatted = responsiveAddress(address, xxl ? 'md' : 'sm');
  const isLongIdentityDisplay = display
    ? display.length >= maxLength
    : undefined;

  return (
    <Box
      ml={'xs'}
      style={{
        flexGrow: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <CopyAddressTooltip address={address}>
        <Text
          pos={'relative'}
          size={size}
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {display || addressFormatted}
          {isLongIdentityDisplay && (
            <Box
              component={'span'}
              pos={'absolute'}
              top={0}
              right={0}
              bottom={0}
              w={30}
              bg={`linear-gradient(90deg, ${rgba(
                boxShadowColor,
                0.1,
              )} 0%, ${rgba(boxShadowColor, 1)} 100%)`}
            />
          )}
        </Text>
      </CopyAddressTooltip>
    </Box>
  );
});
