import { CollatorsTabsEnum } from '@/components/pages/Staking/Collators/Collators.constants';
import { CollatorsRows } from '@/components/pages/Staking/Collators/CollatorsRows';
import { ChainConfig } from '@/config';
import { Collator } from '@/hooks/polkadot/staking';
import { Tabs } from '@mantine/core';
import { memo } from 'react';

interface Props {
  config: ChainConfig;
  collators: Collator[];
  active?: Collator[];
  upcoming?: Collator[];
  waiting?: Collator[];
}

export const CollatorsTabsPanels = memo(function CollatorsTabsPanels({
  config,
  collators,
  active,
  upcoming,
  waiting,
}: Readonly<Props>) {
  return (
    <>
      <Tabs.Panel value={CollatorsTabsEnum.All}>
        <CollatorsRows collators={collators} config={config} />
      </Tabs.Panel>
      <Tabs.Panel value={CollatorsTabsEnum.Active}>
        <CollatorsRows collators={active} config={config} />
      </Tabs.Panel>
      <Tabs.Panel value={CollatorsTabsEnum.Upcoming}>
        <CollatorsRows collators={upcoming} config={config} />
      </Tabs.Panel>
      <Tabs.Panel value={CollatorsTabsEnum.Waiting}>
        <CollatorsRows collators={waiting} config={config} />
      </Tabs.Panel>
    </>
  );
});
