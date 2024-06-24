import { isUndefined } from '@polkadot/util';
import Big from 'big.js';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function useFormatValue(
  value: Big | string | number | undefined,
  maxDecimals?: number,
  raw = false,
): string | undefined {
  const { locale = 'en' } = useRouter();

  return useMemo(() => {
    if (isUndefined(value)) return;
    if (value === '') return '';

    const big = new Big(value);

    if (raw) {
      return big.toString();
    }

    const number = big.toNumber();
    const standardDecimalLogic = number
      ? number > 1
        ? 2
        : Math.ceil(Math.abs(Math.log10(number))) + 3
      : undefined;

    // *---- number > 1 ----*
    // 12.3456        12.35
    // 1.23456         1.23

    // *---- number < 1 ----*
    // 0.123456        0.1234
    // 0.0123456       0.01234
    // 0.00123456      0.001234
    // 0.000123456     0.0001234
    // 0.0000123456    0.00001234

    return number.toLocaleString(locale, {
      maximumFractionDigits: maxDecimals || standardDecimalLogic,
    });
  }, [value, raw, locale, maxDecimals]);
}
