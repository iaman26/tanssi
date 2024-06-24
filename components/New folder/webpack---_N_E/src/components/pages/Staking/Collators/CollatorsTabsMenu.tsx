import { ActiveCollatorIcon } from '@/components/icons/ActiveCollatorIcon';
import {
  COLLATORS_TABS_DATA,
  CollatorsTabsEnum,
} from '@/components/pages/Staking/Collators/Collators.constants';
import { Group, Text } from '@mantine/core';
import { memo } from 'react';

interface Props {
  activeTab: string;
}

export const CollatorsTabsMenu = memo(function CollatorsTabsMenu({
  activeTab,
}: Readonly<Props>) {
  return (
    <>
      {activeTab !== CollatorsTabsEnum.All && (
        <Group bg={'dark.8'} p={'xs'} gap={5} style={{ borderRadius: 15 }}>
          {COLLATORS_TABS_DATA.map((collatorTabConfig) => {
            return (
              activeTab === collatorTabConfig.value && (
                <Group key={collatorTabConfig.value}>
                  <ActiveCollatorIcon />
                  <Text c={'gray.6'} fw={300}>
                    {collatorTabConfig.description}
                  </Text>
                </Group>
              )
            );
          })}
        </Group>
      )}
    </>
  );
});
