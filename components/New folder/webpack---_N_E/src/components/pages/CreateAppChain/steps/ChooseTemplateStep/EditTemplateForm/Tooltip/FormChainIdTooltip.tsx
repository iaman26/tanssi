import { InfoTooltip } from '@/components/InfoTooltip/InfoTooltip';
import { OffsiteLink } from '@/components/OffsiteLink';
import { Text } from '@mantine/core';

export function FormChainIdTooltip() {
  return (
    <InfoTooltip>
      <Text size={'sm'}>
        {'EVM chain ID that you register here: '}
        <OffsiteLink url={'https://github.com/ethereum-lists/chains'} />
      </Text>
      <Text size={'sm'}>
        {'For test deployments you can pick any 6 digit random number.'}
      </Text>
    </InfoTooltip>
  );
}
