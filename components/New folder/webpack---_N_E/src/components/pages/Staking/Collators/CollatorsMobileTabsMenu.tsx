import {
  COLLATORS_TABS_DATA,
  CollatorsTabsEnum,
} from '@/components/pages/Staking/Collators/Collators.constants';
import { Button, Collapse, Stack, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props {
  setActiveTab: (value: CollatorsTabsEnum) => void;
  activeTab: string;
  opened: boolean;
}

export const CollatorsMobileTabsMenu = memo(function CollatorsMobileTabsMenu({
  setActiveTab,
  activeTab,
  opened,
}: Readonly<Props>) {
  const theme = useMantineTheme();

  return (
    <Collapse in={opened} mt={25}>
      <Stack bg={theme.colors.dark[8]} style={{ borderRadius: '12px' }} p={5}>
        {COLLATORS_TABS_DATA.map((collatorTabConfig) => {
          return (
            <Button
              fullWidth
              p={10}
              key={collatorTabConfig.value}
              onClick={() => setActiveTab(collatorTabConfig.value)}
              bg={
                activeTab === collatorTabConfig.value
                  ? theme.colors.dark[6]
                  : theme.colors.dark[8]
              }
              style={{ border: 0, textAlign: 'left', paddingLeft: '10px' }}
              c={
                activeTab === collatorTabConfig.value
                  ? theme.other.colors.white
                  : theme.colors.dark[4]
              }
              leftSection={collatorTabConfig.icon}
              justify="left"
            >
              {collatorTabConfig.value}
            </Button>
          );
        })}
      </Stack>
    </Collapse>
  );
});
