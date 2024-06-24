import { rem } from '@mantine/core';

interface UpcomingCollatorProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function UpcomingCollatorIcon({
  size,
  style,
  color,
  ...others
}: UpcomingCollatorProps) {
  return (
    <svg
      width={'13'}
      height={'12'}
      viewBox={'0 0 13 12'}
      fill={'none'}
      stroke={'currentColor'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        d={
          'M5.80078 3.59968V2.13472C5.80078 1.28689 6.78964 0.82373 7.44097 1.3665L12.0789 5.23146C12.5587 5.63126 12.5587 6.36811 12.0789 6.7679L7.44096 10.6329C6.78964 11.1756 5.80078 10.7125 5.80078 9.86464V8.39968M2.64018 1.3665L7.27814 5.23146C7.75789 5.63126 7.75789 6.36811 7.27813 6.7679L2.64018 10.6329C1.98886 11.1756 1 10.7125 1 9.86464V2.13472C1 1.28689 1.98886 0.82373 2.64018 1.3665Z'
        }
        stroke={color}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </svg>
  );
}
