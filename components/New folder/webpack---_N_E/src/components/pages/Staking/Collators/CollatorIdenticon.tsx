import { IdentityIcon } from '@/components/IndentityIcon';
import { ActiveCollatorIcon } from '@/components/icons/ActiveCollatorIcon';
import { UpcomingCollatorIcon } from '@/components/icons/UpcomingCollatorIcon';
import { CopyAddressTooltip } from '@/components/pages/Staking/CopyAddressTooltip';
import { Center, Tooltip, rgba, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props {
  address: string;
  size?: number;
  isActive?: boolean;
  isUpcoming?: boolean;
  outerBg?: string;
}

export const CollatorIdenticon = memo(function CollatorIdenticon({
  address,
  size = 30,
  isActive,
  isUpcoming,
  outerBg = 'dark.6',
}: Props) {
  const theme = useMantineTheme();

  return (
    <Center p={4} bg={outerBg} pos={'relative'} style={{ borderRadius: '50%' }}>
      <CopyAddressTooltip address={address}>
        <IdentityIcon value={address} size={size} />
      </CopyAddressTooltip>

      {isUpcoming && (
        <Tooltip
          label={
            'Block Producers who are selected to produce blocks in the upcoming session.'
          }
        >
          <Center
            w={18}
            h={18}
            bg={theme.other.colors.blue}
            pos={'absolute'}
            top={26}
            right={-8}
            style={{
              border: `1px solid ${rgba(theme.other.colors.white, 0.1)}`,
              borderRadius: '50%',
            }}
          >
            <UpcomingCollatorIcon size={11} color={'white'} />
          </Center>
        </Tooltip>
      )}
      {isActive && (
        <Tooltip
          label={
            'Block Producers who are actively producing block this session.'
          }
        >
          <Center
            w={18}
            h={18}
            bg={theme.primaryColor}
            pos={'absolute'}
            top={-8}
            right={-8}
            style={{
              border: `1px solid ${rgba(theme.other.colors.white, 0.1)}`,
              borderRadius: '50%',
            }}
          >
            <ActiveCollatorIcon size={13} color={'white'} />
          </Center>
        </Tooltip>
      )}
    </Center>
  );
});
