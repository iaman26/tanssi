import { TokenAmount } from '@/components/TokenAmount';
import { Dot } from '@/components/pages/Staking/Portfolio/Dot';
import { ChainConfigProps } from '@/config';
import { usePortfolio } from '@/hooks/polkadot/staking';
import { useConnectedAddressOrProxied } from '@/hooks/useConnectedAddressOrProxied';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DonutChart } from '@mantine/charts';
import {
  Box,
  Center,
  Group,
  List,
  Paper,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';

enum PortfolioBalance {
  Free = 'Free',
  ManualStake = 'Manual Stake',
  CompoundingStake = 'Compounding Stake',
  ManualRewards = 'Manual Rewards',
  CompoundingRewards = 'Compounding Rewards',
  Pending = 'Pending',
}

interface Props extends ChainConfigProps {}

export function Portfolio({ config }: Props) {
  const address = useConnectedAddressOrProxied();
  const { md, xl } = useMediaQuery();
  const theme = useMantineTheme();

  const {
    totalAssetAmount,
    freeAssetAmount,
    manualStakeAssetAmount,
    compoundingStakeAssetAmount,
    manualRewardsAssetAmount,
    compoundingRewardsAssetAmount,
    pendingAssetAmount,
  } = usePortfolio(config);

  const portfolioData = [
    {
      name: PortfolioBalance.Free,
      value: freeAssetAmount,
      color: theme.other.colors.white,
    },
    {
      name: PortfolioBalance.ManualStake,
      value: manualStakeAssetAmount,
      color: theme.primaryColor,
    },
    {
      name: PortfolioBalance.CompoundingStake,
      value: compoundingStakeAssetAmount,
      color: theme.other.colors.blue,
    },
    {
      name: PortfolioBalance.ManualRewards,
      value: manualRewardsAssetAmount,
      color: theme.other.colors.amber,
    },
    {
      name: PortfolioBalance.CompoundingRewards,
      value: compoundingRewardsAssetAmount,
      color: theme.other.colors.coral,
    },
    {
      name: PortfolioBalance.Pending,
      value: pendingAssetAmount,
      color: 'orange.5',
    },
  ];

  const chartData = portfolioData
    .filter((item) => item.value?.amount)
    .map((item) => ({
      ...item,
      value: Number(item.value?.toDecimal(2)),
    }));

  return (
    <Paper p={'xl'} mt={md ? undefined : 100} mb={35}>
      {md ? (
        <Title order={3} size={24} fw={500} c={'white'} mb={'sm'}>
          {'My Portfolio'}
        </Title>
      ) : null}

      <Group
        gap={'lg'}
        wrap={md ? 'nowrap' : 'wrap'}
        justify={md ? 'space-between' : 'center'}
      >
        <Center pos={'relative'}>
          <DonutChart
            size={md ? 160 : 240}
            strokeWidth={0}
            paddingAngle={0}
            thickness={md ? 16 : 24}
            withTooltip={!!chartData.length}
            tooltipDataSource={'segment'}
            tooltipProps={{
              wrapperStyle: { zIndex: 100 },
            }}
            data={
              chartData.length
                ? chartData
                : [{ name: 'No data', value: 1, color: 'dark.6' }]
            }
          />
          <TokenAmount
            pos={'absolute'}
            top={'50%'}
            ta={'center'}
            left={'50%'}
            style={{ transform: 'translate(-50%, -50%)', zIndex: 0 }}
            amount={totalAssetAmount}
            symbolColor={'gray.6'}
            size={'md'}
            lh={1}
          />
        </Center>

        <Box>
          <Group gap={5}>
            <Text c={'gray.6'}>{'Total:'}</Text>
            <TokenAmount
              amount={totalAssetAmount}
              symbolColor={'gray.6'}
              size={'md'}
            />
          </Group>

          <List>
            {portfolioData.map((item) => {
              if (
                [
                  PortfolioBalance.CompoundingRewards,
                  PortfolioBalance.ManualRewards,
                  PortfolioBalance.Pending,
                ].includes(item.name) &&
                !item.value?.amount
              )
                return;

              return (
                <List.Item
                  key={item.name}
                  icon={<Dot disabled={!address} color={item.color} />}
                >
                  <Group gap={5}>
                    <Text c={'gray.6'}>
                      {item.name}
                      {':'}
                    </Text>
                    <TokenAmount
                      amount={item.value}
                      symbolColor={'gray.6'}
                      size={'md'}
                    />
                  </Group>
                </List.Item>
              );
            })}
          </List>
        </Box>
        <Center pos={'relative'} w={'45%'}>
          <Text
            pos={'absolute'}
            top={'50%'}
            left={'50%'}
            style={{ transform: 'translate(-50%, -50%)', fontSize: 24 }}
          >
            {'Available soon'}
          </Text>
          <Image
            src={'/images/staking_graph.webp'}
            alt={'Available soon graph'}
            width={xl ? 500 : 350}
            height={xl ? 200 : 120}
          />
        </Center>
      </Group>
    </Paper>
  );
}
