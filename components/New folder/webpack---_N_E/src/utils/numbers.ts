import Big from 'big.js';

export function splitByPercentage(
  value: bigint | Big | string | number,
  percentage: number,
): [bigint, bigint] {
  if (!Number.isInteger(percentage) || percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be an integer between 0 and 100');
  }

  const bigValue = new Big(value.toString());
  const firstPart = bigValue.times(percentage / 100).toFixed(0);
  const secondPart = bigValue.minus(firstPart);

  return [BigInt(firstPart), BigInt(secondPart.toFixed(0))];
}

export function getPercentage(
  value: bigint,
  total: bigint,
  maxDecimals: number = 2,
): number {
  const totalBig = new Big(total.toString());
  const valueBig = new Big(value.toString());

  return totalBig.gt(0)
    ? Number(valueBig.div(totalBig).times(100).toFixed(maxDecimals))
    : 0;
}
