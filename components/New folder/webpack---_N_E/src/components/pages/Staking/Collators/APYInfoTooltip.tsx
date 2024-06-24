import { InfoTooltip } from '@/components/InfoTooltip';
import { Text } from '@mantine/core';
import { memo } from 'react';

export const APYInfoTooltip = memo(function APYInfoTooltip() {
  return (
    <InfoTooltip>
      <Text size={'sm'} c={'gray.4'}>
        {
          "This is an estimated APY based on the current total staking amount. Please note that this value will be influenced by the amount you stake and could be affected by pending amounts waiting to enter. Therefore, it's not guaranteed that the reflected APY will be accurate at the time of entering the pool."
        }
      </Text>
    </InfoTooltip>
  );
});
