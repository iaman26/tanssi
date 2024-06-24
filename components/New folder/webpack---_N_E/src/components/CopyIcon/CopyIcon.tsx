import {
  ActionIcon,
  ActionIconProps,
  Box,
  CopyButton,
  FloatingPosition,
} from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

export interface Props extends ActionIconProps {
  value: string | undefined;
  size?: number;
  tooltipPosition?: FloatingPosition;
  children?: React.ReactNode;
}

export function CopyIcon({
  value = '',
  size = 18,
  color,
  children,
  ...other
}: Props) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <>
          {children ? (
            <Box onClick={copy}>{children}</Box>
          ) : (
            <ActionIcon
              color={copied ? 'teal' : color || 'gray'}
              variant={'subtle'}
              onClick={(e) => {
                e.stopPropagation();
                copy();
              }}
              disabled={!value}
              size={size}
              radius={'xl'}
              {...other}
            >
              {copied ? (
                <IconCheck size={size} stroke={1.5} />
              ) : (
                <IconCopy size={size} stroke={1.5} />
              )}
            </ActionIcon>
          )}
        </>
      )}
    </CopyButton>
  );
}
