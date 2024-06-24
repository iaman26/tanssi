import { OffsiteLink } from '@/components/OffsiteLink';
import { useIsStakingEnabledFlag } from '@/hooks/flags/useIsStakingEnabledFlag';
import { NavLink as NavLinkNext } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import classes from './Nav.module.css';

export interface INavLink {
  label: string;
  path: string;
  icon: ReactNode;
  onClick?: () => void;
}

interface Props extends INavLink {}

export function NavLink({ path, label, icon, onClick }: Props) {
  const router = useRouter();
  const { isEnabled: isStakingEnabled } = useIsStakingEnabledFlag();

  const isOffsiteLink = path.startsWith('https://');
  const isActive =
    router.pathname === path ||
    (path !== '/' && router.pathname.includes(path));

  if (path === 'staking' && !isStakingEnabled) {
    return null;
  }

  return isOffsiteLink ? (
    <OffsiteLink
      className={classes.offsiteLink}
      url={path}
      withIcon={false}
      tabIndex={-1}
      isWrapper
    >
      <NavLinkNext
        component={'button'}
        className={classes.navLink}
        classNames={{ label: classes.navLinkLabel }}
        label={label}
        active={isActive}
        leftSection={icon}
        onClick={onClick}
      />
    </OffsiteLink>
  ) : (
    <NavLinkNext
      href={path || ''}
      component={Link}
      className={classes.navLink}
      classNames={{ label: classes.navLinkLabel }}
      label={label}
      active={isActive}
      leftSection={icon}
      onClick={onClick}
    />
  );
}
