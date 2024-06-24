import { Slider, SliderProps, rem, useMantineTheme } from '@mantine/core';
import classes from './SliderStaking.module.css';

interface Props extends SliderProps {
  leftColor?: string;
  rightColor?: string;
  percentage: number;
}

export function SliderStaking({
  percentage,
  leftColor,
  rightColor,
  ...others
}: Props) {
  const theme = useMantineTheme();
  const leftSliderColor = leftColor || theme.colors.tanssiTeal[9];
  const rightSliderColor = rightColor || theme.other.colors.amber;

  return (
    <Slider
      label={(value) => `${value}%`}
      value={percentage}
      labelAlwaysOn
      size={10}
      thumbSize={16}
      marks={[
        { value: 20 },
        { value: 30 },
        { value: 40 },
        { value: 50 },
        { value: 60 },
        { value: 70 },
        { value: 80 },
      ]}
      classNames={{ track: classes.track, mark: classes.mark }}
      style={{
        '--slider-color': leftSliderColor,
        '--slider-right-color': rightSliderColor,
      }}
      styles={({ colors }) => ({
        markWrapper: { top: 2 },
        mark: { width: 6, height: 6 },
        label: {
          top: 15,
          padding: `${rem(1)} ${rem(7)}`,
          backgroundColor: colors.dark[6],
          fontSize: rem(10),
        },
        thumb: {
          backgroundColor: 'white',
          border: `5px solid ${colors.gray[6]}`,
        },
      })}
      {...others}
    />
  );
}
