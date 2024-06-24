import {
  SidebarButton,
  SidebarHeader,
  SidebarStack,
} from '@/components/Sidebar';

interface ActionItem<T> {
  title: T;
  description: string;
}

export enum Action {
  Increase = 'Increase Staking Position',
  Decrease = 'Decrease Staking Position',
  Change = 'Change Staking Ratio',
  Exit = 'Exit Staking Position',
}

type Actions = [
  ActionItem<Action.Increase>,
  ActionItem<Action.Decrease>,
  ActionItem<Action.Change>,
  ActionItem<Action.Exit>,
];

const actions: Actions = [
  {
    title: Action.Increase,
    description:
      'Add more DANCE tokens to your to your position. You can increase you manual staking or auto-compounding position. ',
  },
  {
    title: Action.Decrease,
    description:
      'Decrease your staking position by removing DANCE tokens from auto-compounding or manual staking.',
  },
  {
    title: Action.Change,
    description:
      'Change your staking ratio between manual and auto-compounding positions.',
  },
  {
    title: Action.Exit,
    description: 'Remove your staking position entirely from Block Producer.',
  },
];

interface Props {
  onClick: (action: Action) => void;
}

export function ManageStakingActions({ onClick }: Props) {
  return (
    <>
      <SidebarHeader title={'Manage Staking'} />

      <SidebarStack>
        {actions.map(({ title, description }) => (
          <SidebarButton
            key={title}
            title={title}
            description={description}
            onClick={() => onClick(title)}
          />
        ))}
      </SidebarStack>
    </>
  );
}
