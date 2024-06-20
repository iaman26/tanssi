import { Text, TextProps, useMantineTheme } from '@mantine/core';

export interface Props extends TextProps {
  text: string;
}

export function Badge({ text, ...others }: Props) {
  const theme = useMantineTheme();

  return (
    <Text
      fz={10}
      lh={1.2}
      p={4}
      bg={theme.other.colors.midnightBlue}
      c={theme.colors.tanssiTeal[9]}
      style={{ borderRadius: 4 }}
      {...others}
    >
      {text}
    </Text>
  );
}
