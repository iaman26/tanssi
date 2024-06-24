import { Box, Group, GroupProps } from '@mantine/core';

interface Props extends GroupProps {
  step: number;
  steps?: number;
}

export function ContactModalStepper({ step, steps = 3, ...other }: Props) {
  return (
    <Group grow wrap={'nowrap'} w={'100%'} gap={'xs'} {...other}>
      {Array.from({ length: steps }, (_, index) => (
        <Box
          key={index}
          bg={index <= step ? 'tanssiTeal.9' : 'dark.7'}
          h={4}
          style={{ borderRadius: 3 }}
        />
      ))}
    </Group>
  );
}
