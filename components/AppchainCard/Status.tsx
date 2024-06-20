import { APPCHAIN_STATUS } from '@/components/pages/Dashboard/state/dashboard.constants';
import { ChainConfig } from '@/config';
import { useAppchainStatus } from '@/hooks/polkadot/appchain';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box, Group, Text } from '@mantine/core';

interface Props {
  paraId: number;
  config: ChainConfig;
}

export function Status({ paraId, config }: Props) {
  const { xs } = useMediaQuery();
  const { status, isLoading: isLoadingStatus } = useAppchainStatus(
    paraId,
    config,
  );

  if (isLoadingStatus) {
    return null;
  }

  return (
    status && (
      <Group
        gap={7}
        justify={xs ? 'center' : 'start'}
        align={'center'}
        w={'15%'}
        wrap={'nowrap'}
      >
        <Box
          w={12}
          h={12}
          bg={`${APPCHAIN_STATUS[status].color}`}
          style={{ borderRadius: '50%' }}
        />
        <Text size={'sm'}>{APPCHAIN_STATUS[status].status}</Text>
      </Group>
    )
  );
}
