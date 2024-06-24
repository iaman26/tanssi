import { InfoTooltip } from '@/components/InfoTooltip';
import { Text } from '@mantine/core';

export function BlockProductionInfo() {
  return (
    <InfoTooltip position={'bottom'}>
      <>
        <Text size={'sm'} c={'gray.6'}>
          <Text span size={'sm'} c={'white'}>
            {'Balance: '}
          </Text>
          {'Shows the funds available for producing blocks on the blockchain.'}
        </Text>
        <Text size={'sm'} c={'gray.6'}>
          <Text span size={'sm'} c={'white'}>
            {'Days: '}
          </Text>
          {'Indicates remaining days you can produce blocks for.'}
        </Text>
        <Text size={'sm'} c={'gray.6'}>
          <Text span size={'sm'} c={'white'}>
            {'Cost Per Block: '}
          </Text>
          {
            'Represents the number of tokens required to produce each block, reflecting the operational cost of block creation.'
          }
        </Text>
        <Text size={'sm'} c={'gray.6'}>
          <Text span size={'sm'} c={'white'}>
            {'Cost Per Session: '}
          </Text>
          {
            'Details the expense for each assignment of a block producer to your chain, affecting overall maintenance costs. Each session is 1 hour.'
          }
        </Text>
      </>
    </InfoTooltip>
  );
}
