import { Box, Button, Center, Stack, Text, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  description?: string;
}

export function FieldsetEditTemplateAdvanced({ children, description }: Props) {
  const [isOpen, { toggle }] = useDisclosure(false);

  return (
    <>
      <Button
        mt={'md'}
        fw={700}
        px={0}
        size={'md'}
        variant={'transparent'}
        c={'white'}
        rightSection={
          <Center p={2} bg={'dark.6'} style={{ borderRadius: 5 }}>
            {isOpen ? (
              <IconChevronUp size={15} />
            ) : (
              <IconChevronDown size={15} />
            )}
          </Center>
        }
        onClick={toggle}
      >
        {'Advanced'}
      </Button>

      <Transition
        mounted={isOpen}
        transition={'scale-y'}
        duration={100}
        exitDuration={100}
        timingFunction={'ease'}
        keepMounted
      >
        {(styles) => (
          <Box style={styles}>
            {description && (
              <Text mb={'lg'} fs={'italic'} size={'sm'} c={'gray.6'}>
                {description}
              </Text>
            )}

            <Stack>{children}</Stack>
          </Box>
        )}
      </Transition>
    </>
  );
}
