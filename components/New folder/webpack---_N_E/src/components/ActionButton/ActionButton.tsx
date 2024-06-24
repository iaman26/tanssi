import { Button, ButtonProps, Loader, Skeleton, Tooltip } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { ReactNode, memo } from 'react';
import classes from './ActionButton.module.css';

export interface ActionButtonProps extends ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  isMounted?: boolean;
  isLoading?: boolean;
  tooltipLabel?: string;
  isTooltipDisabled?: boolean;
  withArrow?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export const ActionButton = memo(function ActionButton({
  type = 'button',
  isLoading,
  disabled,
  children,
  rightSection,
  tooltipLabel,
  withArrow = true,
  isMounted = true,
  isTooltipDisabled = true,
  onClick,
  ...others
}: ActionButtonProps) {
  if (!isMounted) {
    return <Skeleton h={42} w={180} />;
  }

  return (
    <Tooltip label={tooltipLabel} disabled={isTooltipDisabled}>
      <Button
        miw={140}
        variant={isLoading || disabled ? 'light' : 'filled'}
        type={type}
        className={classes.button}
        disabled={disabled || isLoading}
        rightSection={
          isLoading ? (
            <Loader color={'gray.1'} size={20} type={'oval'} />
          ) : (
            withArrow &&
            (rightSection || <IconArrowRight size={20} stroke={1.5} />)
          )
        }
        data-fetching={isLoading}
        onClick={onClick}
        {...others}
      >
        {children}
      </Button>
    </Tooltip>
  );
});
