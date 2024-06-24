import { ActionButton } from '@/components/ActionButton';
import { InnerCard } from '@/components/AppchainCard/InnerCard';
import { CopyIcon } from '@/components/CopyIcon';
import { DEMO_CHAIN_ID, demo } from '@/config';
import {
  useCaptureFlag,
  useCapturePrice,
  useCurrentHolder,
  useLastCaptureTimestamp,
  useLeaderboard,
} from '@/hooks/contracts/CaptureTheFlag';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ellipsis, responsiveAddress } from '@/utils/address';
import { formatDuration } from '@/utils/date';
import {
  Box,
  Group,
  Skeleton,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { hexToBigInt } from '@polkadot/util';
import { IconFlag } from '@tabler/icons-react';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';

export function CaptureFlag() {
  const { xs, sm } = useMediaQuery();
  const { chainId, address } = useAccount();
  const theme = useMantineTheme();
  const { isPending, capture } = useCaptureFlag();
  const { isSuccess: isSuccessPrice, data: price } = useCapturePrice();
  const { isSuccess: isSuccessHolder, data: holder } = useCurrentHolder();
  const { isSuccess: isSuccessTimestamp, data: timestamp } =
    useLastCaptureTimestamp();
  const { players } = useLeaderboard();

  const duration = useMemo(() => {
    if (!timestamp) return undefined;

    const ms = BigInt(Date.now()) - timestamp * 1000n;

    return formatDuration(Number(ms));
  }, [timestamp]);

  const isClaimDisabled =
    chainId !== DEMO_CHAIN_ID || !address || address === holder;

  return (
    <>
      <Title order={2} size={24} c={'white'}>
        {'Capture the Flag'}
      </Title>

      <InnerCard style={{ flex: 1 }}>
        <Text>
          {`Connect to Tanssi EVM AppChain and play Capture The Flag to test the network. Claim ${demo.asset.originSymbol} tokens and click on Claim Flag to become the current leader.`}
        </Text>
        <Group mt={'md'} gap={5} align={'center'}>
          <Text>{'Cost to capture: '}</Text>
          {isSuccessPrice ? (
            <Text span c={'tanssiTeal.9'}>
              {demo.getAssetAmount(price).toDecimal()} {demo.asset.originSymbol}
            </Text>
          ) : (
            <Skeleton w={80} h={16} />
          )}
        </Group>
        <Group justify={'space-between'} align={'center'} mt={'xs'}>
          {isSuccessHolder ? (
            hexToBigInt(holder) ? (
              <Group gap={0}>
                <Text span mr={5}>
                  {'Current Holder:'}
                </Text>
                <Box>
                  {isSuccessHolder && isSuccessTimestamp && duration ? (
                    <>
                      <Text span c={'tanssiTeal.9'}>
                        {ellipsis(holder, 5, 5)}
                      </Text>
                      <Text span>{' holding for '}</Text>
                      <Text span>
                        {duration}
                        {'.'}
                      </Text>
                    </>
                  ) : (
                    <Skeleton w={200} h={16} />
                  )}
                </Box>
              </Group>
            ) : (
              <Text>{'Be the first to claim the flag!'}</Text>
            )
          ) : (
            <Skeleton w={'50%'} h={16} />
          )}

          <ActionButton
            miw={{ base: '100%', xs: 'auto' }}
            size={'lg'}
            leftSection={<IconFlag />}
            withArrow={false}
            loading={isPending}
            isTooltipDisabled={!isClaimDisabled}
            tooltipLabel={
              !address
                ? 'Connect your wallet to claim the flag.'
                : chainId !== DEMO_CHAIN_ID
                  ? 'Switch to Tanssi Demo network.'
                  : 'You are the current holder.'
            }
            onClick={capture}
            disabled={isClaimDisabled}
          >
            {'Claim Flag'}
          </ActionButton>
        </Group>

        <Title order={2} size={24} c={'white'} mt={'xl'}>
          {'Leaderboard'}
        </Title>
        <Group justify={'space-between'} mt={'lg'}>
          <Text c={'gray.6'}>{'Address'}</Text>
          <Text c={'gray.6'}>{'Total Time Held'}</Text>
        </Group>
        <Box mt={'sm'}>
          {players
            ? players.map(({ address, duration }, position) => (
                <Group
                  key={position}
                  justify={'space-between'}
                  py={'xs'}
                  style={{
                    borderTop: '1px solid var(--mantine-color-dark-6)',
                  }}
                >
                  <Group gap={'xs'} align={'center'}>
                    <Text>
                      {position + 1}
                      {'. '}
                      {sm
                        ? address
                        : responsiveAddress(address, xs ? 'lg' : 'sm')}
                    </Text>
                    <CopyIcon
                      value={address}
                      size={20}
                      color={theme.other.colors.orange}
                    />
                  </Group>
                  <Text>{duration}</Text>
                </Group>
              ))
            : Array.from({ length: 10 }).map((_, index) => (
                <Group
                  key={index}
                  justify={'space-between'}
                  py={'xs'}
                  h={46}
                  style={{
                    borderTop: '1px solid var(--mantine-color-dark-6)',
                  }}
                >
                  <Skeleton w={'50%'} h={18} />
                  <Skeleton w={100} h={18} />
                </Group>
              ))}
        </Box>
      </InnerCard>
    </>
  );
}
