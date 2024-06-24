import { INavLink, NavLink } from '@/components/Nav/NavLink';
import { Stack } from '@mantine/core';
import {
  IconChartPie4,
  IconEdit,
  IconFileDescription,
  IconLayoutDashboard,
  IconSchool,
  IconStack2,
} from '@tabler/icons-react';
import { BlockChainIcon } from '../icons/BlockChainIcon';

const iconProps = {
  size: 22,
  stroke: '1.5',
  color: 'var(--mantine-color-tanssiTeal-9)',
};

const NAV_LINKS = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <IconLayoutDashboard {...iconProps} />,
  },
  {
    label: 'Deploy Appchain',
    path: 'create',
    icon: <IconEdit {...iconProps} />,
  },
  {
    label: 'Demo Appchain',
    path: 'demo',
    icon: <BlockChainIcon {...iconProps} />,
  },
  {
    label: 'Staking',
    path: 'staking',
    icon: <IconStack2 {...iconProps} />,
  },
  {
    label: 'Tutorials',
    path: 'https://youtube.com/watch?v=Ovasc7uAXpk&list=PLEgIGlavjXIjiFacNWXn2Bmk4R1F_B8LB/',
    icon: <IconSchool {...iconProps} />,
  },
  {
    label: 'Docs',
    path: 'https://docs.tanssi.network/',
    icon: <IconFileDescription {...iconProps} />,
  },
  {
    label: 'Ecosystem',
    path: 'https://dashboard.tanssi-chains.network/',
    icon: <IconChartPie4 {...iconProps} />,
  },
] satisfies INavLink[];

interface Props {
  onClick?: () => void;
}

export function NavLinks({ onClick }: Props) {
  return (
    <Stack gap={5} w={'100%'}>
      {NAV_LINKS.map((link) => (
        <NavLink key={link.label} onClick={onClick} {...link} />
      ))}
    </Stack>
  );
}
