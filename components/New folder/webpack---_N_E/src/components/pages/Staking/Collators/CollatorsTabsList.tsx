import { COLLATORS_TABS_DATA } from '@/components/pages/Staking/Collators/Collators.constants';
import { Tabs } from '@mantine/core';
import { memo } from 'react';
import classes from './CollatorsTabs.module.css';

export const CollatorsTabsList = memo(function CollatorsTabsList() {
  return (
    <Tabs.List ml={'md'} className={classes.tabList}>
      {COLLATORS_TABS_DATA.map((collatorTabConfig) => {
        return (
          <Tabs.Tab
            key={collatorTabConfig.value}
            value={collatorTabConfig.value}
          >
            {collatorTabConfig.icon}
            {collatorTabConfig.value}
          </Tabs.Tab>
        );
      })}
    </Tabs.List>
  );
});
