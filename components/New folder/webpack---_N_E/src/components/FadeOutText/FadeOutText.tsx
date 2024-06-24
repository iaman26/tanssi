import { Box, BoxProps, rgba, useMantineTheme } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { ReactNode } from 'react';

interface Props extends BoxProps {
  children: ReactNode;
  maxWidth: number;
  shadowColor?: string;
}

export function FadeOutText({
  children,
  maxWidth,
  shadowColor,
  ...other
}: Props) {
  const { ref, width } = useElementSize();

  const theme = useMantineTheme();
  const boxShadowColor = shadowColor || theme.colors.dark[8];

  return (
    <Box
      ref={ref}
      pos={'relative'}
      maw={maxWidth}
      style={{
        flexGrow: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      {...other}
    >
      {children}
      {width === maxWidth && (
        <Box
          component={'span'}
          pos={'absolute'}
          top={0}
          right={0}
          w={maxWidth * 0.1}
          h={'100%'}
          bg={`linear-gradient(90deg, ${rgba(boxShadowColor, 0.1)} 0%, ${rgba(
            boxShadowColor,
            1,
          )} 100%)`}
        />
      )}
    </Box>
  );
}
