import { ActiveCollatorIcon } from '@/components/icons/ActiveCollatorIcon';
import { UpcomingCollatorIcon } from '@/components/icons/UpcomingCollatorIcon';
import { sortingKeys } from '@/hooks/polkadot/staking';
import { IconClock } from '@tabler/icons-react';

export enum CollatorsTabsEnum {
  All = 'All',
  Active = 'Active',
  Upcoming = 'Upcoming',
  Waiting = 'Waiting',
}

export const COLLATORS_TABS_DATA = [
  {
    value: CollatorsTabsEnum.All,
    icon: null,
    description: null,
  },
  {
    value: CollatorsTabsEnum.Active,
    icon: <ActiveCollatorIcon />,
    description:
      'Block Producers who are actively producing block this session.',
  },
  {
    value: CollatorsTabsEnum.Upcoming,
    icon: <UpcomingCollatorIcon />,
    description:
      'Block Producers who are selected to produce blocks in the upcoming session.',
  },
  {
    value: CollatorsTabsEnum.Waiting,
    icon: <IconClock size={18} />,
    description:
      'Block Producers waiting to be eligible to produce blocks in future sessions.',
  },
];

export const COLLATORS_SORTING_DATA = [
  {
    value: 'Delegated Stake',
    key: sortingKeys.delegated,
  },
  {
    value: 'Self-stake',
    key: sortingKeys.self,
  },
  {
    value: 'Total Stake',
    key: sortingKeys.total,
  },
  {
    value: 'Delegations',
    key: sortingKeys.delegations,
  },
  {
    value: 'APY',
    key: sortingKeys.apy,
  },
];
