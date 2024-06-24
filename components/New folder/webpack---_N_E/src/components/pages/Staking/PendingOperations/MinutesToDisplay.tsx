import { TimeIcon } from '@/components/icons/TimerIcon';
import { Center, Text } from '@mantine/core';

interface Props {
  seconds?: number;
}

export function MinutesToDisplay({ seconds }: Readonly<Props>) {
  return (
    <Center>
      {!!seconds && (
        <>
          <TimeIcon />
          <Text ml={'xs'} size={'sm'} display={'inline-block'}>
            {'~'}
            {Math.ceil(seconds / 60)}
            {' mins left'}
          </Text>
        </>
      )}
    </Center>
  );
}
