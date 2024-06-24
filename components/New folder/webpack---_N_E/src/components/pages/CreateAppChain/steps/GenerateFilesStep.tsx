import { ActionButton } from '@/components/ActionButton';
import { NextStepButton } from '@/components/pages/CreateAppChain/NextStepButton';
import {
  useCreateAppChainInfo,
  usePracticeCreateAppchain,
} from '@/components/pages/CreateAppChain/state/create.hooks';
import { StepWrapper } from '@/components/pages/CreateAppChain/steps/StepWrapper';
import { useIsRegisteredInTanssi } from '@/hooks/polkadot/common';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useCreateAppchainFiles } from '@/hooks/useCreateAppchainFiles';
import { useGenerateFiles } from '@/hooks/useGenerateFiles';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Center, Group, Skeleton, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { ReactNode } from 'react';

export function GenerateFilesStep() {
  const config = useChainConfig();
  const { xs, isLoading: isLoadingMediaQuery } = useMediaQuery();
  const isRegistered = useIsRegisteredInTanssi(config);
  const { paraId } = useCreateAppChainInfo();
  const { generateFiles, isPending, isDisabled } = useGenerateFiles();
  const {
    specRaw,
    genesisState,
    genesisWasm,
    haveFiles,
    isFilesExistenceConfirmed,
  } = useCreateAppchainFiles(paraId, config);
  const { areFilesGenerated } = usePracticeCreateAppchain();

  const renderIcon = (file: unknown | undefined): ReactNode | undefined => {
    return isFilesExistenceConfirmed ? (
      <Center bg={'dark.6'} w={28} h={28} style={{ borderRadius: '100%' }}>
        {(!!file || areFilesGenerated) && (
          <IconCheck
            size={16}
            stroke={2}
            color={'var(--mantine-color-tanssiTeal-9)'}
          />
        )}
      </Center>
    ) : (
      <Skeleton circle width={28} height={28} />
    );
  };

  return (
    <StepWrapper>
      <StepWrapper.Title>{'Generate Your Appchain Data'}</StepWrapper.Title>

      <StepWrapper.Card>
        <Text px={'xl'} size={'lg'} ta={'center'}>
          {
            "You've secured your Appchain ID and customized your appchain template. Now, it's time to generate the essential data for your appchain on both the Relay Chain and the Tanssi chain."
          }
        </Text>

        {!isLoadingMediaQuery && (
          <Center mt={'xl'} mb={40}>
            <Group
              justify={'center'}
              align={'start'}
              gap={xs ? 50 : 20}
              style={{ flexDirection: xs ? 'row' : 'column' }}
            >
              <Group gap={'xs'} justify={'start'}>
                {renderIcon(specRaw)}
                <Text>{'Spec Raw'}</Text>
              </Group>
              <Group gap={'xs'} justify={'start'}>
                {renderIcon(genesisState)}
                <Text>{'Genesis header'}</Text>
              </Group>
              <Group gap={'xs'} justify={'start'}>
                {renderIcon(genesisWasm)}
                <Text>{'Genesis wasm'}</Text>
              </Group>
            </Group>
          </Center>
        )}

        <StepWrapper.Buttons>
          <ActionButton
            isMounted={isFilesExistenceConfirmed}
            disabled={isDisabled || isRegistered}
            isLoading={isPending}
            tooltipLabel={
              "You can't re-generate your appchain data if you already registered an appchain"
            }
            isTooltipDisabled={!isRegistered}
            data-testid={'generate-files'}
            onClick={generateFiles}
          >
            {isPending ? 'Generating' : haveFiles ? 'Re-Generate' : 'Generate'}
          </ActionButton>
          <NextStepButton
            isMounted={isFilesExistenceConfirmed}
            disabled={isPending || isDisabled || !haveFiles}
            tooltipLabel={'Please generate your appchain data first'}
            isTooltipDisabled={haveFiles}
          />
        </StepWrapper.Buttons>
      </StepWrapper.Card>
    </StepWrapper>
  );
}
