import { ActionButton } from '@/components/ActionButton';
import { ConnectWallet } from '@/components/ConnectWallet';
import { TokenAmount } from '@/components/TokenAmount';
import { NextStepButton } from '@/components/pages/CreateAppChain/NextStepButton';
import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { SocialLoginModal } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/SocialLoginModal';
import { useIsContactCreated } from '@/components/pages/CreateAppChain/steps/CheckBalancesStep/SocialLogin/state/socialLogin.hooks';
import { StepWrapper } from '@/components/pages/CreateAppChain/steps/StepWrapper';
import { ChainKey } from '@/config';
import { useFaucet } from '@/hooks/api/useFaucet';
import {
  useFreeUserParaIds,
  useHasEnoughBalances,
  useIsRegisteredInRelay,
  useIsRegisteredInTanssi,
  useRelayFreeBalance,
  useTanssiFreeBalance,
} from '@/hooks/polkadot/common';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useIsAuthenticated } from '@/state/user';
import { isDefined } from '@/utils/validate';
import {
  Box,
  Center,
  Checkbox,
  Group,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export function CheckBalanceStep() {
  const router = useRouter();
  const config = useChainConfig();
  const { data: session } = useSession();
  const paraIds = useFreeUserParaIds(config);
  const balance = useTanssiFreeBalance(config);
  const { send, isLoading } = useFaucet();
  const relayBalance = useRelayFreeBalance();
  const isAuthenticated = useIsAuthenticated();
  const { isContactCreated } = useIsContactCreated();
  const isRegisteredInRelay = useIsRegisteredInRelay(config.relay);
  const isRegisteredInTanssi = useIsRegisteredInTanssi(config);
  const { hasOwnParaId, setHasOwnParaId } = useCreateAppChainInfo();
  const {
    hasEnoughBalance,
    hasEnoughTanssiBalance,
    hasEnoughRelayBalance,
    minRelayBalance,
    minTanssiBalance,
  } = useHasEnoughBalances();
  const theme = useMantineTheme();

  const assetsToCheckBalance = [
    {
      name: config.name,
      balance: balance,
      hasEnoughBalance: hasEnoughTanssiBalance,
      testid: 'tanssi-balance',
    },
    {
      name: config.relay.name,
      balance: relayBalance,
      hasEnoughBalance: hasEnoughRelayBalance,
      testid: 'relay-balance',
    },
  ];

  const onRequestFunds = () => {
    if (!session || !isContactCreated || config.key !== ChainKey.Flashbox) {
      router.replace({ query: { ...router.query, auth: true } }, undefined, {
        scroll: false,
      });

      return;
    }

    send();
  };

  const shouldShowNextStepButton = hasEnoughBalance && !isLoading;

  return (
    <>
      <SocialLoginModal />
      <StepWrapper>
        <StepWrapper.Title>{'Got Tokens?'}</StepWrapper.Title>
        <StepWrapper.Card>
          {isRegisteredInTanssi ? (
            <Text size={'lg'}>
              {`You've successfully used your ${config.asset.originSymbol} and ${config.relay.asset.originSymbol} balance to register your appchain!`}
            </Text>
          ) : (
            <Text size={'lg'}>
              {'You must have a minimum balance of'}{' '}
              <Text
                size={'lg'}
                c={'tanssiTeal.9'}
                span
                data-testid={'required-tanssi-amount'}
              >
                {`${minTanssiBalance} ${config.asset.originSymbol}`}{' '}
              </Text>
              {'and'}{' '}
              <Text
                size={'lg'}
                c={'tanssiTeal.9'}
                span
                data-testid={'required-relay-amount'}
              >
                {`${minRelayBalance} ${config.relay.asset.originSymbol}`}{' '}
              </Text>
              {'tokens to successfully launch a new appchain on Tanssi.'}
            </Text>
          )}

          {isAuthenticated && (
            <>
              <Stack mt={30} align={'start'} gap={'sm'}>
                {assetsToCheckBalance.map((asset) => (
                  <Group key={asset.name} gap={'sm'} wrap={'nowrap'}>
                    {!isRegisteredInTanssi && (
                      <>
                        {isDefined(asset.hasEnoughBalance) ? (
                          <Center
                            bg={'dark.6'}
                            w={28}
                            h={28}
                            style={{ borderRadius: '100%' }}
                          >
                            {asset.hasEnoughBalance ? (
                              <IconCheck
                                size={15}
                                stroke={1.5}
                                color={theme.colors.tanssiTeal[9]}
                              />
                            ) : (
                              <IconX
                                size={15}
                                stroke={1.5}
                                color={theme.colors.tanssiTeal[9]}
                              />
                            )}
                          </Center>
                        ) : (
                          <Skeleton circle width={20} height={20} />
                        )}
                      </>
                    )}
                    <Box>
                      <Group gap={0}>
                        <Text size={'lg'} mr={'xs'}>
                          {asset.name}
                          {' balance: '}
                        </Text>
                        {asset.balance ? (
                          <TokenAmount
                            size={'md'}
                            amount={asset.balance}
                            data-testid={asset.testid}
                          />
                        ) : (
                          <Skeleton width={60} height={25} />
                        )}
                      </Group>
                    </Box>
                  </Group>
                ))}
              </Stack>

              <Tooltip
                label={'No free Appchain ID is available for this account.'}
                disabled={!!paraIds?.length}
              >
                <Checkbox
                  mt={'xl'}
                  size={'sm'}
                  label={
                    'I already have a reserved Appchain ID for my appchain.'
                  }
                  checked={hasOwnParaId}
                  onChange={(e) => {
                    setHasOwnParaId(e.currentTarget.checked);
                  }}
                  styles={{
                    body: { alignItems: 'center' },
                    label: { fontSize: 18, color: 'white' },
                  }}
                  disabled={!paraIds?.length || isRegisteredInRelay}
                />
              </Tooltip>
            </>
          )}

          <StepWrapper.Buttons>
            {isAuthenticated ? (
              shouldShowNextStepButton ? (
                <NextStepButton disabled={!hasEnoughBalance} />
              ) : (
                <ActionButton
                  onClick={() => onRequestFunds()}
                  isLoading={isLoading}
                >
                  {'Request Tokens'}
                </ActionButton>
              )
            ) : (
              <ConnectWallet />
            )}
          </StepWrapper.Buttons>
        </StepWrapper.Card>
      </StepWrapper>
    </>
  );
}
