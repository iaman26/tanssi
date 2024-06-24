import { useComputedColorScheme } from '@mantine/core';

export function useIsDark(): boolean {
  const scheme = useComputedColorScheme('dark');

  return scheme === 'dark';
}
