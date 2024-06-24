import { CollatorsTabsEnum } from '@/components/pages/Staking/Collators/Collators.constants';
import { CollatorsMobileSortingMenu } from '@/components/pages/Staking/Collators/CollatorsMobileSortingMenu';
import { CollatorsMobileTabsMenu } from '@/components/pages/Staking/Collators/CollatorsMobileTabsMenu';
import { CollatorSortingCriteria, sortingKeys } from '@/hooks/polkadot/staking';
import { Button, Grid, Group, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { memo } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { RiSortDesc } from 'react-icons/ri';

interface Props {
  sortedBy: CollatorSortingCriteria;
  activeTab: string | null;
  sortBy: (sortingKey: CollatorSortingCriteria['key']) => void;
  setActiveTab: (value: CollatorsTabsEnum) => void;
}

export const CollatorsMobileMenu = memo(function CollatorsMobileMenu({
  sortedBy,
  activeTab,
  sortBy,
  setActiveTab,
}: Readonly<Props>) {
  const theme = useMantineTheme();
  const [openedSortingMenu, { toggle: toggleSortingMenu }] =
    useDisclosure(false);
  const [openedTabsMenu, { toggle: toggleTabsMenu }] = useDisclosure(false);

  const tab = activeTab || CollatorsTabsEnum.All;

  const reset = () => {
    setActiveTab(CollatorsTabsEnum.All);
    sortBy(sortingKeys.total);
  };

  return (
    <Stack gap={0}>
      <Group justify="space-between" wrap={'nowrap'}>
        <Button
          onClick={toggleTabsMenu}
          bg={theme.colors.dark[7]}
          style={{ border: 0 }}
        >
          <IoOptionsOutline size={25} />
          Filter
        </Button>
        <Button
          onClick={toggleSortingMenu}
          bg={theme.colors.dark[7]}
          style={{ border: 0 }}
        >
          <RiSortDesc size={25} />
          Order
        </Button>
        <Button onClick={reset} bg={theme.colors.dark[7]} style={{ border: 0 }}>
          Clear
        </Button>
      </Group>
      <Grid mb={20}>
        <Grid.Col span={5} p={5}>
          <CollatorsMobileTabsMenu
            opened={openedTabsMenu}
            activeTab={tab}
            setActiveTab={setActiveTab}
          />
        </Grid.Col>
        <Grid.Col span={7} p={5}>
          <CollatorsMobileSortingMenu
            opened={openedSortingMenu}
            sortedBy={sortedBy}
            sortBy={sortBy}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
});
