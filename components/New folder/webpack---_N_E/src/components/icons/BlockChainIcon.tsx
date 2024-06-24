import { rem } from '@mantine/core';

interface BlockChainIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function BlockChainIcon({
  size,
  style,
  color,
  stroke,
  ...others
}: BlockChainIconProps) {
  return (
    <svg
      width={'20'}
      height={'19'}
      viewBox={'0 0 20 19'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{ width: rem(size), height: rem(size), ...style }}
      color={color}
      stroke={stroke}
      {...others}
    >
      <path
        d={
          'M5.5 18L10 15.5V10.5L5.5 8L1 10.5V15.5L5.5 18ZM5.5 18V13.3125M5.5 13.3125L1.27813 10.8125M5.5 13.3125L9.72187 10.8125'
        }
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <path
        d={
          'M14.5 18L19 15.5V10.5L14.5 8L10 10.5V15.5L14.5 18ZM14.5 18V13.3125M14.5 13.3125L10.2781 10.8125M14.5 13.3125L18.7219 10.8125'
        }
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <path
        d={
          'M10 10L14 7.75V3.25L10 1L6 3.25V7.75L10 10ZM10 10V5.78125M10 5.78125L6.24722 3.53125M10 5.78125L13.7528 3.53125'
        }
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </svg>
  );
}
