import { ActionButton } from '@/components/ActionButton';
import { StakingAlert } from '@/components/pages/Staking/PendingOperations/StakingAlert/StakingAlert';
import { ChainConfigProps } from '@/config';
import { useCurrentSession } from '@/hooks/polkadot/common';
import {
  EXECUTION_DELAY_SESSIONS,
  PendingOperation,
  useExecutePendingOperations,
  useUserStakingPendingOperations,
} from '@/hooks/polkadot/staking';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box, Checkbox, Group, Stack, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { PendingOperationsRow } from './PendingOperationsRow';

interface Props extends ChainConfigProps {}

export function PendingOperations({ config }: Props) {
  const { md } = useMediaQuery();
  const [areSelectedAll, setAreSelectedAll] = useState(false);
  const [selected, { append, remove, setState }] = useListState<string>([]);
  const { data } = useUserStakingPendingOperations(config);
  const session = useCurrentSession(config);
  const { isLoading, send } = useExecutePendingOperations(config, {
    onSuccess: () => {
      setState([]);
      setAreSelectedAll(false);
    },
  });

  function onSelectRow(
    operation: PendingOperation,
    index: number,
    isSelected: boolean,
  ) {
    if (isSelected) {
      remove(index);
    } else {
      append(operation.id);
    }

    setAreSelectedAll(false);
  }

  function onSelectAll() {
    setAreSelectedAll((prev) => {
      const next = !prev;

      if (next && session && data) {
        setState(
          data
            .filter(({ at }) => at + EXECUTION_DELAY_SESSIONS <= session)
            .map(({ id }) => id),
        );
      } else {
        setState([]);
      }

      return next;
    });
  }

  if (!data?.length) return null;

  const isCheckable = !!data?.filter(
    ({ at }) => !!session && at + EXECUTION_DELAY_SESSIONS <= session,
  ).length;

  return (
    <>
      <StakingAlert mb={35} />

      <Stack mb={35} data-testid={'my-activity'}>
        <Box h={27} mx={'md'}>
          <Text
            h={27}
            px={'md'}
            display={'inline-block'}
            style={{ borderBottom: '1px solid white' }}
          >
            {'My Activity'}
          </Text>
        </Box>

        <Stack>
          {data?.map((operation) => {
            const indexInSelected = selected.indexOf(operation.id);
            const isSelected = indexInSelected !== -1;

            return (
              <PendingOperationsRow
                key={operation.id}
                config={config}
                operation={operation}
                isCheckable={isCheckable}
                isSelected={isSelected}
                isDisabled={isLoading}
                onSelect={() =>
                  onSelectRow(operation, indexInSelected, isSelected)
                }
                onExecute={() => isSelected && remove(indexInSelected)}
              />
            );
          })}
        </Stack>
        {md ? (
          <Group justify={isCheckable ? 'space-between' : 'end'}>
            {isCheckable && (
              <Checkbox
                role={'checkbox'}
                label={'Select all'}
                aria-label={'Select all'}
                checked={areSelectedAll}
                disabled={isLoading}
                onChange={() => onSelectAll()}
              />
            )}
            <Box mr={'md'}>
              <Text display={'inline-block'} opacity={0.5} mr={'sm'}>
                {`Executing ${selected.length} operations`}
              </Text>
              <ActionButton
                miw={'auto'}
                fw={600}
                rightSection={<FaArrowRight />}
                disabled={!selected.length}
                isTooltipDisabled={!!selected.length}
                tooltipLabel={'Please select at least one operation.'}
                loading={isLoading}
                onClick={() =>
                  data && send(data.filter(({ id }) => selected.includes(id)))
                }
              >
                {'Execute'}
              </ActionButton>
            </Box>
          </Group>
        ) : (
          <Stack>
            {isCheckable && (
              <Checkbox
                role={'checkbox'}
                label={'Select all'}
                aria-label={'Select all'}
                checked={areSelectedAll}
                disabled={isLoading}
                onChange={() => onSelectAll()}
              />
            )}
            <Text display={'inline-block'} opacity={0.5} mr={'sm'}>
              {`Executing ${selected.length} operations`}
            </Text>
            <ActionButton
              miw={'auto'}
              fw={600}
              rightSection={<FaArrowRight />}
              disabled={!selected.length}
              isTooltipDisabled={!!selected.length}
              tooltipLabel={'Please select at least one operation.'}
              loading={isLoading}
              onClick={() =>
                data && send(data.filter(({ id }) => selected.includes(id)))
              }
            >
              {'Execute'}
            </ActionButton>
          </Stack>
        )}
      </Stack>
    </>
  );
}
