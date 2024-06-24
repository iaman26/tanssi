import { rem } from '@mantine/core';
import { memo } from 'react';

interface ActiveCollatorsProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ActiveCollatorIcon = memo(function ActiveCollatorIcon({
  size,
  style,
  color,
  ...others
}: ActiveCollatorsProps) {
  return (
    <svg
      width={'14'}
      height={'13'}
      viewBox={'0 0 14 13'}
      fill={'none'}
      stroke={'currentColor'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        d={
          'M1 9.31324V5.0731C1 4.33257 1.77687 3.84893 2.44138 4.17578L6.67106 6.25628C7.01305 6.42449 7.22968 6.77248 7.22968 7.1536V11.3937C7.22968 12.1343 6.45281 12.6179 5.78831 12.2911L1.55862 10.2106C1.21664 10.0423 1 9.69436 1 9.31324Z'
        }
        stroke={color}
        strokeLinejoin={'round'}
      />
      <path
        d={
          'M7.23169 9.95241L8.46018 10.5567C9.12468 10.8835 9.90156 10.3999 9.90156 9.65936V5.41923C9.90156 5.0381 9.68492 4.69012 9.34293 4.5219L5.11325 2.44141C4.44875 2.11455 3.67188 2.59819 3.67188 3.33873V4.76573'
        }
        stroke={color}
        strokeLinejoin={'round'}
      />
      <path
        d={
          'M6.34375 3.0333V1.60631C6.34375 0.865769 7.12062 0.382129 7.78513 0.708984L12.0148 2.78948C12.3568 2.9577 12.5734 3.30568 12.5734 3.6868V7.92694C12.5734 8.66747 11.7966 9.15111 11.1321 8.82426L9.90357 8.21999'
        }
        stroke={color}
        strokeLinejoin={'round'}
      />
    </svg>
  );
});
