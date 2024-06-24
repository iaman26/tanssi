import { ActionButton, ActionButtonProps } from '@/components/ActionButton';
import classes from './ModalButton.module.css';

export interface ModalButtonProps extends ActionButtonProps {}

export function ModalButton({ ...other }: ModalButtonProps) {
  return (
    <ActionButton
      className={classes.button}
      styles={{ inner: { justifyContent: 'space-between' } }}
      {...other}
    />
  );
}
