import { CollatorsTabsEnum } from '@/components/pages/Staking/Collators/Collators.constants';
import { CollatorsMobileMenu } from '@/components/pages/Staking/Collators/CollatorsMobileMenu';
import { CollatorsSortingRow } from '@/components/pages/Staking/Collators/CollatorsSortingRow';
import { CollatorsTabsList } from '@/components/pages/Staking/Collators/CollatorsTabsList';
import { CollatorsTabsMenu } from '@/components/pages/Staking/Collators/CollatorsTabsMenu';
import { CollatorsTabsPanels } from '@/components/pages/Staking/Collators/CollatorsTabsPanels';
import { ChainConfigProps } from '@/config';
import { Collator, useAllCollatorsTable } from '@/hooks/polkadot/staking';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Group, Tabs } from '@mantine/core';
import { useMemo, useState } from 'react';
import classes from './CollatorsTabs.module.css';

interface Props extends ChainConfigProps {}

export function Collators({ config }: Props) {
  const { md } = useMediaQuery();
  const [activeTab, setActiveTab] = useState<string | null>(
    CollatorsTabsEnum.All,
  );
  const { collators, sortedBy, sortBy } = useAllCollatorsTable(config);

  const filteredCollators = useMemo(() => {
    if (!collators) {
      return { active: [], upcoming: [], waiting: [] };
    }
    const active: Collator[] = [];
    const upcoming: Collator[] = [];
    const waiting: Collator[] = [];

    collators.forEach((collator) => {
      if (collator.isActive) {
        active.push(collator);
      }

      if (collator.isUpcoming) {
        upcoming.push(collator);
      }

      if (!collator.isActive && !collator.isUpcoming) {
        waiting.push(collator);
      }
    });

    return { active, upcoming, waiting };
  }, [collators]);

  return (
    <>
      {!md && (
        <CollatorsMobileMenu
          sortedBy={sortedBy}
          activeTab={activeTab}
          sortBy={sortBy}
          setActiveTab={setActiveTab}
        />
      )}
      <Tabs
        value={activeTab}
        defaultValue={CollatorsTabsEnum.All}
        onChange={setActiveTab}
        classNames={{
          tab: classes.tab,
          list: classes.list,
          tabLabel: classes.tabLabel,
        }}
      >
        {md && (
          <Group justify={'space-between'} align={'center'} mb={'lg'} mih={50}>
            <CollatorsTabsList />
            <CollatorsTabsMenu activeTab={activeTab!} />
          </Group>
        )}
        {md && <CollatorsSortingRow sortedBy={sortedBy} sortBy={sortBy} />}
        {collators && (
          <CollatorsTabsPanels
            config={config}
            collators={collators}
            active={filteredCollators.active}
            upcoming={filteredCollators.upcoming}
            waiting={filteredCollators.waiting}
          />
        )}
      </Tabs>
    </>
  );
}
