import { RegisterChainCard } from '@/components/pages/CreateAppChain/steps/RegisterChainStep/RegisterChainCard';
import { StepWrapper } from '@/components/pages/CreateAppChain/steps/StepWrapper';
import {
  useIsRegisteredInRelay,
  useIsRegisteredInTanssi,
  useRegisterInRelay,
  useRegisterInTanssi,
} from '@/hooks/polkadot/common';
import { useChainConfig } from '@/hooks/useChainConfig';
import { isDefined } from '@/utils/validate';
import { Group, Text } from '@mantine/core';
import { useEffect } from 'react';

function beforeUnload(event: BeforeUnloadEvent) {
  event.preventDefault();
}

export function RegisterChainStep() {
  const config = useChainConfig();
  const isRegisteredInTanssiBlock = useIsRegisteredInTanssi(config);
  const isRegisteredInRelayBlock = useIsRegisteredInRelay(config.relay);
  const { isLoadingTanssi, isReadyToRegisterInTanssi, onRegisterInTanssi } =
    useRegisterInTanssi(config);
  const { isLoadingRelay, isReadyToRegister, onRegisterInRelay } =
    useRegisterInRelay(config);

  const isRegisteredInRelay = isRegisteredInRelayBlock && !isLoadingRelay;
  const isRegisteredInTanssi = isRegisteredInTanssiBlock && !isLoadingTanssi;

  const cards = [
    {
      chainName: 'Relay',
      isMounted: isReadyToRegister && isDefined(isRegisteredInRelay),
      isLoading: isLoadingRelay,
      isDisabled: !!isRegisteredInRelay,
      isRegistered: !!isRegisteredInRelay,
      onClick: onRegisterInRelay,
    },
    {
      chainName: 'Tanssi',
      isMounted: isReadyToRegisterInTanssi && isDefined(isRegisteredInTanssi),
      isLoading: isLoadingTanssi,
      isDisabled: !isRegisteredInRelay || !!isRegisteredInTanssi,
      isRegistered: isRegisteredInTanssi,
      onClick: onRegisterInTanssi,
    },
  ];

  useEffect(() => {
    if (!isRegisteredInRelay || !isRegisteredInTanssi) {
      window.addEventListener('beforeunload', beforeUnload, {
        capture: true,
      });
    }

    return () => window.removeEventListener('beforeunload', beforeUnload);
  }, [isRegisteredInRelay, isRegisteredInTanssi]);

  return (
    <StepWrapper>
      <StepWrapper.Title>
        {isRegisteredInTanssi
          ? 'You Have Registered Your Appchain Successfully'
          : 'Register Your Appchain'}
      </StepWrapper.Title>
      <StepWrapper.Card>
        <Text size={'lg'} ta={'center'}>
          {
            'Register your appchain with Tanssi to become an appchain. Each transaction may take up to several minutes.'
          }
        </Text>
        <Group
          mih={270}
          mt={'xl'}
          justify={'center'}
          align={'center'}
          gap={'xl'}
        >
          {cards.map((card, index) => (
            <RegisterChainCard
              key={card.chainName}
              index={index}
              chainName={card.chainName}
              isMounted={card.isMounted}
              isLoading={card.isLoading}
              isDisabled={card.isDisabled}
              isRegistered={!!card.isRegistered}
              onClick={card.onClick}
            />
          ))}
        </Group>
      </StepWrapper.Card>
    </StepWrapper>
  );
}
