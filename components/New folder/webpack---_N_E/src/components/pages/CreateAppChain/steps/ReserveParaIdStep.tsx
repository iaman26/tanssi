import { Select, Text } from '@mantine/core';

import { ActionButton } from '@/components/ActionButton';
import { NextStepButton } from '@/components/pages/CreateAppChain/NextStepButton';
import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { StepWrapper } from '@/components/pages/CreateAppChain/steps/StepWrapper';
import { useFreeUserParaIds, useReserveParaId } from '@/hooks/polkadot/common';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useAddress } from '@/state/user';
import { IconCheck } from '@tabler/icons-react';

export function ReserveParaIdStep() {
  const config = useChainConfig();
  const address = useAddress();
  const paraIds = useFreeUserParaIds(config);
  const { isReady, isLoading, onReserve } = useReserveParaId(config.relay);

  const { paraId, reservedParaId, hasOwnParaId, setParaId } =
    useCreateAppChainInfo();

  const hasFreeParaId = !!paraIds?.length;
  const hasSelectedParaId = hasOwnParaId && !!paraId;
  const hasReservedParaId = !hasOwnParaId && !!reservedParaId;
  const selected = `You've Selected Appchain ID ${paraId}`;
  const reserved = `You've Reserved Appchain ID ${reservedParaId}`;
  const notReservedOrSelected = `${
    hasOwnParaId ? 'Select' : 'Reserve'
  } Appchain ID`;

  return (
    <StepWrapper>
      <StepWrapper.Title>
        {hasReservedParaId
          ? reserved
          : hasSelectedParaId
            ? selected
            : notReservedOrSelected}
      </StepWrapper.Title>

      <StepWrapper.Card>
        <Text size={'lg'} ta={'center'}>
          {
            'To function within the Polkadot environment, your appchain requires a Appchain ID, which can be secured through the execution of a transaction.'
          }
        </Text>
        <Text mt={'md'} size={'lg'} ta={'center'}>
          {
            "This ID is essential for registering your chain on Polkadot's Relay Chain later on."
          }
        </Text>
        <Text mt={'md'} size={'lg'} ta={'center'}>
          {
            'Please make sure to reserve the ID from the account you plan to use for launching your appchain.'
          }
        </Text>

        <StepWrapper.Buttons>
          {hasOwnParaId ? (
            <Select
              h={42}
              w={180}
              size={'md'}
              variant={'default'}
              placeholder={'Select Appchain ID'}
              checkIconPosition={'right'}
              allowDeselect={false}
              disabled={!hasFreeParaId}
              data={paraIds?.map((id) => id.paraId.toString())}
              value={paraId?.toString()}
              onChange={(value) => value && setParaId(+value)}
              styles={{
                input: {
                  backgroundColor: 'var(--mantine-color-dark-9)',
                  height: 45,
                  paddingLeft: 20,
                },
                dropdown: {
                  padding: 5,
                },
                option: {
                  padding: '5px 20px',
                },
              }}
            />
          ) : (
            <ActionButton
              isLoading={isLoading}
              disabled={!address || !!reservedParaId || !isReady}
              rightSection={
                reservedParaId && (
                  <IconCheck
                    size={20}
                    stroke={2}
                    color={'var(--mantine-color-tanssi-9)'}
                  />
                )
              }
              onClick={onReserve}
            >
              {isLoading
                ? 'Reserving'
                : reservedParaId
                  ? 'Reserved'
                  : 'Reserve'}
            </ActionButton>
          )}
          {(hasSelectedParaId || hasReservedParaId) && <NextStepButton />}
        </StepWrapper.Buttons>
      </StepWrapper.Card>
    </StepWrapper>
  );
}
