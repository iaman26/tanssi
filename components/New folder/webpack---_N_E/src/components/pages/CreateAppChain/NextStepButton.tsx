import { ActionButton, ActionButtonProps } from '@/components/ActionButton';
import { useCreateAppChainSteps } from '@/components/pages/CreateAppChain/state/create.hooks';

export function NextStepButton(props: ActionButtonProps) {
  const { nextStep } = useCreateAppChainSteps();

  return (
    <ActionButton onClick={nextStep} {...props}>
      {'Continue'}
    </ActionButton>
  );
}
