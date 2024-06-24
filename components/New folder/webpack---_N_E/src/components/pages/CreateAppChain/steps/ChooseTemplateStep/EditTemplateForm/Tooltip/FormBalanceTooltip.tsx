import { InfoTooltip } from '@/components/InfoTooltip/InfoTooltip';
import { Text } from '@mantine/core';

export function FormBalanceTooltip() {
  return (
    <InfoTooltip>
      <Text size={'sm'}>
        {
          'Enter your desired value without decimal places. For a token balance of 99 with 12 decimal places e.g. 99000000000000, just enter 99.'
        }
      </Text>
    </InfoTooltip>
  );
}
