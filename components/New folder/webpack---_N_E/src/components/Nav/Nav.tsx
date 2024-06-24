import { Logo } from '@/components/Logo';
import { NavCreateAppchain } from '@/components/Nav/NavCreateAppchain';
import { NavLinks } from '@/components/Nav/NavLinks';
import { OffsiteLink } from '@/components/OffsiteLink';
import { AppShell, Burger, Group, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import classes from './Nav.module.css';
import { Socials } from './Socials';

interface Props {
  opened: boolean;
  toggle: () => void;
}

export function Nav({ opened, toggle }: Props) {
  const router = useRouter();

  const isCreateAppchainRoute =
    router.pathname.startsWith('/[chainKey]/create');

  return (
    <AppShell.Navbar className={classes.nav}>
      <Burger
        pos={'absolute'}
        top={30}
        left={20}
        size={'md'}
        hiddenFrom={'md'}
        opened={opened}
        onClick={toggle}
      />
      <Logo onClick={toggle} />
      <Stack w={'100%'} justify={'space-between'} style={{ flex: 1 }}>
        {isCreateAppchainRoute ? (
          <NavCreateAppchain />
        ) : (
          <>
            <NavLinks onClick={toggle} />
            <Stack gap={5}>
              <Socials onClick={toggle} />
              <Group justify={'space-evenly'}>
                <OffsiteLink
                  label={'Privacy Policy'}
                  url={'https://www.tanssi.network/privacy-policy'}
                  withIcon={false}
                  c={'gray.6'}
                />
                <Text c={'gray.6'} span>
                  {'-'}
                </Text>
                <OffsiteLink
                  label={'Terms of Use'}
                  url={'https://www.tanssi.network/terms-of-use'}
                  withIcon={false}
                  c={'gray.6'}
                />
              </Group>
            </Stack>
          </>
        )}
      </Stack>
    </AppShell.Navbar>
  );
}
