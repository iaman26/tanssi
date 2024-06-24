import { CopyIcon } from '@/components/CopyIcon';
import { Jdenticon } from '@/components/Jdenticon';
import { ellipsis } from '@/utils/address';
import { Box, Group, Loader, Stack, Text, Title } from '@mantine/core';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { FaArrowRight } from 'react-icons/fa';
import classes from './AccountButton.module.css';

export interface Props {
  account: InjectedAccountWithMeta;
  index: number;
  isSelected: boolean;
  isLoading: boolean;
  onClick: (account: InjectedAccountWithMeta) => void;
}

export function AccountButton({
  account,
  index,
  isSelected,
  isLoading,
  onClick,
}: Props) {
  return (
    <Box
      className={classes.button}
      role={'button'}
      tabIndex={0}
      onClick={() => {
        if (isSelected) return;

        onClick(account);
      }}
      data-selected={isSelected}
    >
      <Group gap={'xs'} align={'center'} mr={'xs'}>
        <Jdenticon address={account.address} size={30} />
        <Stack gap={0} justify={'flex-start'} mr={'auto'}>
          <Title order={3} size={16} lh={'16px'} fw={500} c={'white'}>
            {account.meta.name || `Account ${index}`}
          </Title>
          <Group gap={5} align={'center'}>
            <Text fz={12} fw={400} c={'gray.6'}>
              {ellipsis(account.address, 5, 5)}
            </Text>
            <CopyIcon size={12} value={account.address} />
          </Group>
        </Stack>
        {isLoading ? (
          <Loader size={16} type={'oval'} color={'white'} />
        ) : (
          <FaArrowRight size={10} />
        )}
      </Group>
    </Box>
  );
}
