import { Group, Text, UnstyledButton } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { Badge } from '../Badge';
import classes from './SidebarButton.module.css';

export interface Props {
  title: string;
  description: string;
  isDisabled?: boolean;
  badgeText?: string;
  onClick: () => void;
}

export function SidebarButton({
  title,
  description,
  isDisabled,
  badgeText,
  onClick,
}: Props) {
  return (
    <UnstyledButton
      py={10}
      px={'md'}
      className={classes.button}
      disabled={isDisabled}
      onClick={onClick}
    >
      {badgeText && (
        <Badge
          text={badgeText}
          pos={'absolute'}
          top={'var(--mantine-spacing-sm)'}
          right={'var(--mantine-spacing-sm)'}
        />
      )}
      <Text size={'lg'} opacity={isDisabled ? 0.5 : 1}>
        {title}
      </Text>
      <Group
        mt={3}
        justify={'space-between'}
        align={'end'}
        wrap={'nowrap'}
        opacity={isDisabled ? 0.5 : 1}
      >
        <Text size={'xs'} c={'gray.6'}>
          {description}
        </Text>
        <IconArrowRight
          size={15}
          stroke={1.5}
          color={'var(--mantine-color-gray-6)'}
          style={{ flexShrink: 0 }}
        />
      </Group>
    </UnstyledButton>
  );
}
