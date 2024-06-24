import { BlockProductionInfo } from '@/components/AppchainCard/BlockProductionInfo';
import { TokenAmount } from '@/components/TokenAmount';
import { ChainConfig } from '@/config';
import {
  useAppchainTank,
  useBlockProductionBalanceTime,
  useBlockProductionFreeTime,
} from '@/hooks/polkadot/appchain';
import { formatDuration } from '@/utils/date';
import { Box, Group, PaperProps, Text, Title } from '@mantine/core';
import { InnerCard } from './InnerCard';

interface Props extends PaperProps {
  paraId: number;
  config: ChainConfig;
}

export function BlockProduction({ paraId, config, ...cardProps }: Props) {
  const { balance } = useAppchainTank(paraId, config);
  const freeTime = useBlockProductionFreeTime(paraId, config);
  const balanceTime = useBlockProductionBalanceTime(paraId, config);

  const time = (freeTime || 0) + (balanceTime || 0);

  return (
    <InnerCard {...cardProps}>
      <Group gap={5}>
        <Title order={4} size={14} c={'white'}>
          {'Block Production'}
        </Title>

        <BlockProductionInfo />
      </Group>

      <Box mt={15}>
        <Group gap={5}>
          <Text c={'gray.5'} size={'sm'}>
            {'Balance: '}
          </Text>
          <TokenAmount amount={balance} />
        </Group>
        <Text c={'gray.5'} size={'sm'}>
          {'Days: '}
          <Text span size={'sm'}>
            {time ? formatDuration(time) : '0'}
          </Text>
        </Text>
        <Group gap={5}>
          <Text c={'gray.5'} size={'sm'}>
            {'Per Block: '}
          </Text>
          <TokenAmount amount={config.fees.costPerBlock} />
        </Group>
        <Group gap={5}>
          <Text c={'gray.5'} size={'sm'}>
            {'Per Session: '}
          </Text>
          <TokenAmount amount={config.fees.costPerSession} />
        </Group>
      </Box>
    </InnerCard>
  );
}
