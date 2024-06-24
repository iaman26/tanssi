import { rem, useMantineTheme } from '@mantine/core';

interface UnstakeIconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export function UnstakeIcon({
  width = 25,
  height = 24,
  style,
  stroke,
  color,
  strokeWidth = 1.5,
  ...others
}: UnstakeIconProps) {
  const theme = useMantineTheme();

  const unstakeColor = color || theme.colors.tanssiTeal[9];

  return (
    <svg
      width={'25'}
      height={'24'}
      viewBox={'0 0 25 24'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{ width: rem(width), height: rem(height), ...style }}
      color={unstakeColor}
      stroke={stroke}
      {...others}
    >
      <g filter={'url(#filter0_d_1429_135)'}>
        <path
          d={
            'M9 8L6.08142 9.31999C4.63605 9.94267 4.64062 12.1085 6.08861 12.7244L10.515 14.607C11.8038 15.1552 13.2462 15.1364 14.5218 14.5549L18.9508 12.536C20.3919 11.8791 20.3353 9.69818 18.8622 9.12593L16 8'
          }
          stroke={unstakeColor}
          strokeWidth={strokeWidth}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
      </g>
      <path
        d={
          'M5 15.1455L10.0054 17.4337C11.5896 18.1579 13.4104 18.1579 14.9946 17.4337L20 15.1455'
        }
        stroke={unstakeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M7.21967 4.99264L11.9926 0.21967C12.2855 -0.0732231 12.7604 -0.0732231 13.0533 0.21967L17.8263 4.99264C18.1192 5.28553 18.1192 5.76041 17.8263 6.0533C17.5334 6.34619 17.0585 6.34619 16.7656 6.0533L13.273 2.56066L13.273 10.75C13.273 11.1642 12.9372 11.5 12.523 11.5C12.1088 11.5 11.773 11.1642 11.773 10.75L11.773 2.56066L8.28033 6.0533C7.98744 6.34619 7.51256 6.34619 7.21967 6.0533C6.92678 5.76041 6.92678 5.28553 7.21967 4.99264Z'
        }
        fill={unstakeColor}
      />
      <defs>
        <filter
          id={'filter0_d_1429_135'}
          x={'0.25'}
          y={'7.25'}
          width={'24.5'}
          height={'16.5049'}
          filterUnits={'userSpaceOnUse'}
          colorInterpolationFilters={'sRGB'}
        >
          <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
          <feColorMatrix
            in={'SourceAlpha'}
            type={'matrix'}
            values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
            result={'hardAlpha'}
          />
          <feOffset dy={'4'} />
          <feGaussianBlur stdDeviation={'2'} />
          <feComposite in2={'hardAlpha'} operator={'out'} />
          <feColorMatrix
            type={'matrix'}
            values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'}
          />
          <feBlend
            mode={'normal'}
            in2={'BackgroundImageFix'}
            result={'effect1_dropShadow_1429_135'}
          />
          <feBlend
            mode={'normal'}
            in={'SourceGraphic'}
            in2={'effect1_dropShadow_1429_135'}
            result={'shape'}
          />
        </filter>
      </defs>
    </svg>
  );
}
