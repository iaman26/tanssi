import { rem, useMantineTheme } from '@mantine/core';

interface LayersIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export function LayersIcon({
  width = 17,
  height = 17,
  style,
  stroke,
  color,
  strokeWidth = 1.5,
  ...others
}: LayersIconProps) {
  const theme = useMantineTheme();

  const layersColor = color || theme.colors.tanssiTeal[9];

  return (
    <svg
      width={'17'}
      height={'17'}
      viewBox={'0 0 17 17'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{ width: rem(width), height: rem(height), ...style }}
      color={layersColor}
      stroke={stroke}
      {...others}
    >
      <path
        d={
          'M1.52938 5.84715C1.02937 5.63269 0.751152 5.14147 0.750003 4.59242C0.748855 4.04336 1.02505 3.55055 1.52446 3.33359L6.54329 1.15326C7.72419 0.640239 9.03903 0.61603 10.235 1.08453L15.4369 3.12226C15.9437 3.32078 16.2353 3.8043 16.2495 4.35559C16.2637 4.90698 15.997 5.41021 15.4977 5.63974L10.4782 7.94703C9.22492 8.52312 7.8114 8.54148 6.54599 7.99875L1.52938 5.84715Z'
        }
        stroke={layersColor}
        strokeWidth={strokeWidth}
        strokeLinejoin={'round'}
      />
      <path
        d={
          'M1 9.14062L6.00544 11.4288C7.58964 12.153 9.41036 12.153 10.9946 11.4288L16 9.14062'
        }
        stroke={layersColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <path
        d={
          'M1 12.5703L6.00544 14.8585C7.58964 15.5827 9.41036 15.5827 10.9946 14.8585L16 12.5703'
        }
        stroke={layersColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </svg>
  );
}
