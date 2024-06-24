import { Button, Text } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';

export function IdleModal({
  innerProps: { description },
}: ContextModalProps<{ description: string }>) {
  return (
    <>
      <Text size="sm">{description}</Text>
      <Button
        fullWidth
        mt="xl"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </Button>
    </>
  );
}
