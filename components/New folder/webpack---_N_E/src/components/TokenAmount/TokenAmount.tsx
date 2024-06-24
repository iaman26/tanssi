import { useFormatValue } from '@/hooks/useFormatValue';
import { useIsMounted } from '@/hooks/useIsMounted';
import { Text, TextProps } from '@mantine/core';
import { AssetAmount } from '@moonbeam-network/xcm-types';
import { memo } from 'react';

interface Props extends TextProps {
  amount: AssetAmount | undefined;
  maxDecimals?: number;
  symbolColor?: string;
}

export const TokenAmount = memo(function TokenAmount({
  amount,
  maxDecimals,
  symbolColor,
  size = 'sm',
  ...textProps
}: Props) {
  const isMounted = useIsMounted();
  const value = useFormatValue(amount?.toDecimal(), maxDecimals);

  if (!isMounted || !value || !amount) {
    return null;
  }

  return (
    <Text size={size} {...textProps}>
      {value}{' '}
      <Text c={symbolColor || textProps.c} size={size} span>
        {amount.originSymbol}
      </Text>
    </Text>
  );
});
