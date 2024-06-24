import { Text, useMantineTheme } from '@mantine/core';
import { useRouter } from 'next/router';

interface Props {
  secondsTo?: number;
}

export function DateTimeDisplay({ secondsTo }: Readonly<Props>) {
  const { locale = 'en' } = useRouter();
  const theme = useMantineTheme();
  const millisecondsTo = (secondsTo ?? 0) * 1000;

  const formattedDate = new Date(Date.now() + millisecondsTo).toLocaleString(
    locale,
  );

  return <Text size={'sm'} c={theme.colors.dark[3]}>{`${formattedDate}`}</Text>;
}
