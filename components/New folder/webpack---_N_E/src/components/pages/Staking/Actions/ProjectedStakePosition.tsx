import { PercentageBar } from '@/components/PercentageBar';
import { TokenAmount } from '@/components/TokenAmount';
import { ChainConfig } from '@/config';
import { useCollatorsApy } from '@/hooks/polkadot/staking';
import { Box, Group, Text, useMantineTheme } from '@mantine/core';
import { AssetAmount } from '@moonbeam-network/xcm-types';

interface Props {
  collatorAddress: string;
  collatorTotalStake: AssetAmount;
  amount?: AssetAmount;
  manualAssetAmount: AssetAmount;
  autoAssetAmount: AssetAmount;
  autoPercentage?: number | string;
  config: ChainConfig;
  isExit?: boolean;
  isDecrease?: boolean;
}

export function ProjectedStakePosition({
  collatorAddress,
  collatorTotalStake,
  manualAssetAmount,
  autoAssetAmount,
  autoPercentage,
  amount,
  config,
  isExit = false,
  isDecrease = false,
}: Props) {
  const theme = useMantineTheme();
  const totalAmountBig = manualAssetAmount.toBig().add(autoAssetAmount.toBig());

  const amountBig = amount
    ? isDecrease
      ? amount.toBig().neg()
      : amount.toBig()
    : undefined;

  const apy = useCollatorsApy([collatorAddress], config, amountBig);

  const shareInPoolBig =
    collatorTotalStake.toBig().gt(0) && amountBig
      ? totalAmountBig.div(collatorTotalStake.toBig().add(amountBig)).times(100)
      : undefined;

  const shareInPool =
    shareInPoolBig && shareInPoolBig.gt(0)
      ? shareInPoolBig.gt(100)
        ? 100
        : shareInPoolBig?.toNumber()
      : 0;

  return (
    <>
      <Text
        size={'xl'}
        py={'md'}
        px={'md'}
        ta={'center'}
        style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
      >
        {'Projected Stake Position'}
      </Text>
      <Box py={'lg'} px={'md'}>
        <Group
          py={6}
          justify={'space-between'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          <Text c={'gray.6'}>{'Auto:'}</Text>
          <TokenAmount
            amount={autoAssetAmount}
            size={'md'}
            symbolColor={'gray.6'}
            data-testid={'projected-auto-stake'}
          />
        </Group>
        <Group
          py={'xs'}
          justify={'space-between'}
          style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
        >
          <Text c={'gray.6'}>{'Manual:'}</Text>
          <TokenAmount
            amount={manualAssetAmount}
            size={'md'}
            symbolColor={'gray.6'}
            data-testid={'projected-manual-stake'}
          />
        </Group>

        {!isExit && (
          <>
            <Group
              py={6}
              justify={'space-between'}
              style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
            >
              <Text c={'gray.6'}>{'Share of the pool:'}</Text>
              <Text>
                {shareInPool.toFixed(2)}
                {'%'}
              </Text>
            </Group>
            <Group
              py={6}
              justify={'space-between'}
              style={{ borderBottom: '1px solid var(--mantine-color-gray-9)' }}
            >
              <Text c={'gray.6'}>{'Estimated APY:'}</Text>
              <Text>
                {apy?.[collatorAddress] && apy[collatorAddress] > 9999
                  ? '>9000.00'
                  : apy?.[collatorAddress]?.toFixed(2)}
                {'%'}
              </Text>
            </Group>
          </>
        )}

        <Group py={6} justify={'space-between'}>
          <Group gap={5}>
            <Box
              w={10}
              h={10}
              bg={theme.colors.tanssiTeal[9]}
              style={{ borderRadius: '50%' }}
            />
            <Text c={'gray.6'}>{'Manual Stake'}</Text>
          </Group>
          <Group gap={5}>
            <Text c={'gray.6'}>{'Auto Stake'}</Text>
            <Box
              w={10}
              h={10}
              bg={theme.other.colors.amber}
              style={{ borderRadius: '50%' }}
            />
          </Group>
        </Group>
        <PercentageBar value={100 - Number(autoPercentage)} h={6} />
        <Group py={6} justify={'space-between'} gap={0}>
          <Text w={48} size={'sm'} c={theme.colors.tanssiTeal[9]}>
            {(100 - Number(autoPercentage)).toFixed(2)}
            {'%'}
          </Text>
          <Text w={48} size={'sm'} c={theme.other.colors.amber} ta={'right'}>
            {Number(autoPercentage).toFixed(2)}
            {'%'}
          </Text>
        </Group>
      </Box>
    </>
  );
}
