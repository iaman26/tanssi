import { AlertIcon } from '@/components/icons/AlertIcon';
import {
  ActionIcon,
  Group,
  GroupProps,
  MantineSize,
  Text,
  lighten,
  rgba,
  useMantineTheme,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';

interface Props extends GroupProps {
  textSize?: MantineSize;
  children: React.ReactNode;
  onClose?: () => void;
}

export function Alert({
  textSize = 'sm',
  children,
  onClose,
  ...others
}: Props) {
  const theme = useMantineTheme();

  return (
    <Group
      p={'sm'}
      bg={rgba(theme.other.colors.navyBlue, 0.7)}
      gap={5}
      wrap={'nowrap'}
      pos={'relative'}
      style={{
        borderRadius: 8,
        border: `1px solid ${lighten(theme.other.colors.navyBlue, 0.3)}`,
      }}
      {...others}
    >
      <AlertIcon mr={5} />
      <Text size={textSize} c={'white'}>
        {children}
      </Text>
      {onClose && (
        <ActionIcon
          pos={'absolute'}
          top={-7}
          right={-7}
          size={20}
          bg={'gray.9'}
          style={{ border: '1px solid var(--mantine-color-gray-7)' }}
          onClick={onClose}
        >
          <IconX size={13} stroke={3} />
        </ActionIcon>
      )}
    </Group>
  );
}
