import { useIsMounted } from '@/hooks/useIsMounted';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery as useMantineMediaQuery } from '@mantine/hooks';

export function useMediaQuery(): {
  base: boolean | undefined;
  xs: boolean | undefined;
  sm: boolean | undefined;
  md: boolean | undefined;
  lg: boolean | undefined;
  xl: boolean | undefined;
  xxl: boolean | undefined;
  isLoading: boolean;
} {
  const isMounted = useIsMounted();
  const { breakpoints } = useMantineTheme();

  const base = useMantineMediaQuery(`(max-width: ${breakpoints.xs})`);
  const xs = useMantineMediaQuery(`(min-width: ${breakpoints.xs})`);
  const sm = useMantineMediaQuery(`(min-width: ${breakpoints.sm})`);
  const md = useMantineMediaQuery(`(min-width: ${breakpoints.md})`);
  const lg = useMantineMediaQuery(`(min-width: ${breakpoints.lg})`);
  const xl = useMantineMediaQuery(`(min-width: ${breakpoints.xl})`);
  const xxl = useMantineMediaQuery(`(min-width: 1800px)`);

  return { base, xs, sm, md, lg, xl, xxl, isLoading: !isMounted };
}
