import { AlertIcon } from '@/components/icons/AlertIcon';
import {
  Box,
  Center,
  Group,
  GroupProps,
  Text,
  rgba,
  useMantineTheme,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './SidebarAlert.module.css';

export interface Props extends GroupProps {
  title: string;
  description?: string;
  variant?: 'info' | 'error';
  onClick?: () => void;
}

export function SidebarAlert({
  title,
  description,
  variant = 'info',
  onClick,
  ...other
}: Props) {
  const theme = useMantineTheme();

  return (
    <Group
      className={classes.alert}
      bg={rgba(theme.other.colors.navyBlue, 0.7)}
      gap={0}
      py={'xs'}
      pr={onClick ? 20 : 5}
      pos={'relative'}
      wrap={'nowrap'}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ flexGrow: 1, cursor: onClick ? 'pointer' : 'default' }}
      {...other}
    >
      <Center w={36}>
        <AlertIcon
          color={variant === 'info' ? undefined : theme.other.colors.rosyRed}
        />
      </Center>
      <Box>
        <Text fw={500} size={'xs'}>
          {title}
        </Text>
        {description && (
          <Text size={'xs'} c={'gray.6'}>
            {description}
          </Text>
        )}
      </Box>
      {onClick && (
        <IconArrowRight
          size={14}
          stroke={1.5}
          style={{ position: 'absolute', right: 5, bottom: 5 }}
        />
      )}
    </Group>
  );
}
