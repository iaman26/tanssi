import { ActionButton } from '@/components/ActionButton';
import { CollapseIcon } from '@/components/CollapseIcon';
import { LayersIcon } from '@/components/icons/LayersIcon';
import { UnstakeIcon } from '@/components/icons/UnstakeIcon';
import { CopyAddressTooltip } from '@/components/pages/Staking/CopyAddressTooltip';
import { DateTimeDisplay } from '@/components/pages/Staking/PendingOperations/DateTimeDisplay';
import { MinutesToDisplay } from '@/components/pages/Staking/PendingOperations/MinutesToDisplay';
import { ChainConfig } from '@/config';
import {
  useIdentity,
  useSecondsUntilSessionStart,
} from '@/hooks/polkadot/common';
import {
  EXECUTION_DELAY_SESSIONS,
  PendingOperation,
  useExecutePendingOperations,
} from '@/hooks/polkadot/staking';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ellipsis } from '@/utils/address';
import {
  Center,
  Checkbox,
  Collapse,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './PendingOperations.module.css';

export interface Props {
  config: ChainConfig;
  operation: PendingOperation;
  isCheckable: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: () => void;
  onExecute: () => void;
}

export function PendingOperationsRow({
  config,
  operation,
  isCheckable,
  isSelected,
  isDisabled,
  onSelect,
  onExecute,
}: Readonly<Props>) {
  const [opened, { toggle }] = useDisclosure(false);
  const { md } = useMediaQuery();

  const display = useIdentity(operation.candidate, config);
  const { isLoading, send } = useExecutePendingOperations(config);
  const seconds = useSecondsUntilSessionStart(
    operation.at + EXECUTION_DELAY_SESSIONS,
    config,
  );

  const isReady = seconds === 0;
  const isUnstake = operation.type === 'Leaving';
  const operationTitle = getOperationTitle(
    operation,
    isReady,
    display?.display,
  );

  return (
    <Group wrap={'nowrap'} role={'row'}>
      {isCheckable && (
        <Checkbox
          role={'checkbox'}
          style={{ visibility: isReady ? undefined : 'hidden' }}
          aria-label={'Select row'}
          checked={isSelected}
          onChange={onSelect}
          disabled={isDisabled || isLoading}
        />
      )}

      <Paper className={classes.row_paper} data-selected={isSelected}>
        {md ? (
          <Grid align={'center'}>
            <Grid.Col span={8}>
              <Group align={'center'} wrap={'nowrap'}>
                <Center className={classes.icon_wrapper}>
                  {isUnstake ? <UnstakeIcon /> : <LayersIcon />}
                </Center>
                {operationTitle}
              </Group>
            </Grid.Col>
            <Grid.Col span={'auto'}>
              <MinutesToDisplay seconds={seconds} />
            </Grid.Col>
            <Grid.Col span={'content'}>
              <ActionButton
                miw={100}
                px={'sm'}
                withArrow={false}
                fw={600}
                variant={isUnstake ? 'light' : undefined}
                disabled={!isReady || isDisabled}
                loading={isLoading}
                onClick={() => {
                  onExecute();
                  send([operation]);
                }}
              >
                {isUnstake ? 'Unstake' : 'Stake'}
              </ActionButton>
            </Grid.Col>
          </Grid>
        ) : (
          <Stack>
            <Group justify="space-between">
              {getOperationMobileHeader(operation, isReady)}
              <UnstyledButton onMouseDown={toggle}>
                <CollapseIcon isOpen={opened} />
              </UnstyledButton>
            </Group>
            <Collapse in={opened} mt={25}>
              <Group mb={10} justify={'space-between'}>
                <DateTimeDisplay secondsTo={seconds} />
                <MinutesToDisplay seconds={seconds} />
              </Group>
              <Group wrap="nowrap" mb={10}>
                <Center className={classes.icon_wrapper}>
                  {isUnstake ? (
                    <UnstakeIcon width={50} />
                  ) : (
                    <LayersIcon width={50} />
                  )}
                </Center>
                <Text size={'sm'}>{operationTitle}</Text>
              </Group>
              <ActionButton
                miw={100}
                w="100%"
                px={'sm'}
                withArrow={false}
                fw={600}
                variant={isUnstake ? 'light' : undefined}
                disabled={!isReady || isDisabled}
                loading={isLoading}
                style={{ border: 0 }}
                onClick={() => {
                  onExecute();
                  send([operation]);
                }}
              >
                {isUnstake ? 'Unstake' : 'Stake'}
              </ActionButton>
            </Collapse>
          </Stack>
        )}
      </Paper>
    </Group>
  );
}

function getOperationTitle(
  operation: PendingOperation,
  isReady: boolean,
  display: string | undefined,
) {
  const isLeaving = operation.type === 'Leaving';
  const prefix = isReady ? 'You can' : 'Requested to';
  const action = isLeaving ? 'unstake' : 'stake';
  const action2 = isLeaving ? 'from' : 'on';
  const amount = operation.amount.toDecimal(2);
  const symbol = operation.amount.originSymbol;

  return (
    <Text>
      {`${prefix} ${action} ${amount} ${symbol} tokens ${action2} Block Producer `}
      <CopyAddressTooltip address={operation.candidate}>
        <Text span>{display || ellipsis(operation.candidate, 4, 4)}</Text>
      </CopyAddressTooltip>
    </Text>
  );
}

function getOperationMobileHeader(
  operation: PendingOperation,
  isReady: boolean,
) {
  const isLeaving = operation.type === 'Leaving';
  const action = isLeaving ? 'Unstake' : 'Stake';
  const amount = operation.amount.toDecimal(2);
  const symbol = operation.amount.originSymbol;

  if (!isReady) {
    return <Text>{`${action} request`}</Text>;
  }

  return <Text>{`${action} ${amount} ${symbol}`}</Text>;
}
