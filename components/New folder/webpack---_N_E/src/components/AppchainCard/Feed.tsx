import { ChainConfig } from '@/config';
import {
  useAppchainBlockExtrinsicCount,
  useAppchainBlockNumber,
  useAppchainBlockTimestamp,
} from '@/hooks/polkadot/appchain';
import { Box, Text, Title } from '@mantine/core';
import { InnerCard } from './InnerCard';

interface Props {
  paraId: number;
  config: ChainConfig;
}

export function Feed({ paraId, config }: Props) {
  const blockNumber = useAppchainBlockNumber(paraId, config);
  const blockTimestamp = useAppchainBlockTimestamp(paraId, config);
  const blockExtrinsicCount = useAppchainBlockExtrinsicCount(paraId, config);

  return (
    <InnerCard w={{ base: '100%', sm: '35%' }}>
      <Title order={4} size={14} c={'white'}>
        {'Appchain Feed'}
      </Title>

      <Box mt={15}>
        <Text c={'gray.5'} size={'sm'}>
          {'Latest Block Number: '}
          <Text span size={'sm'}>
            {blockNumber ?? 'N/A'}
          </Text>
        </Text>
        <Text c={'gray.5'} size={'sm'}>
          {'Latest Block Timestamp: '}
          <Text span size={'sm'}>
            {blockTimestamp ?? 'N/A'}
          </Text>
        </Text>
        <Text c={'gray.5'} size={'sm'}>
          {'Latest Block Transactions: '}
          <Text span size={'sm'}>
            {blockExtrinsicCount ?? 'N/A'}
          </Text>
        </Text>
      </Box>
    </InnerCard>
  );
}
