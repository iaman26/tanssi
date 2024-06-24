import { rem, useMantineTheme } from '@mantine/core';

interface InfoIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function InfoIcon({
  size = 20,
  style,
  color,
  ...others
}: InfoIconProps) {
  const theme = useMantineTheme();

  const infoColor = color || theme.colors.dark[6];

  return (
    <svg
      viewBox={'0 0 20 20'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <circle cx={'10'} cy={'10'} r={'10'} fill={infoColor} />
      <path
        d={'M10 14L10 10'}
        stroke={'white'}
        strokeWidth={'1.5'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <circle cx={'10'} cy={'7'} r={'1'} fill={'white'} />
    </svg>
  );
}
