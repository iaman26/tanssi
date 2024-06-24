import { MyCollatorRow } from '@/components/pages/Staking/Collators/MyCollatorRow';
import { ChainConfigProps } from '@/config';
import { useMyCollators } from '@/hooks/polkadot/staking';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box, Grid, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import { memo } from 'react';

interface Props extends ChainConfigProps {}

export const MyCollators = memo(function MyCollators({ config }: Props) {
  const theme = useMantineTheme();
  const myCollators = useMyCollators(config);
  const { md } = useMediaQuery();

  if (!myCollators?.length) return null;

  return (
    <Box mb={35} data-testid={'my-collators'}>
      <Box h={27} mx={'md'} mb={'lg'}>
        <Text
          h={27}
          px={'md'}
          display={'inline-block'}
          style={{ borderBottom: '1px solid white' }}
        >
          {'My Block Producers'}
        </Text>
      </Box>

      <Box style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>
        <Box miw={md ? 1008 : undefined}>
          {md && (
            <Grid px={'md'} columns={20}>
              <Grid.Col span={3.8}>
                <Text c={'gray.6'}>{'Block Producers'}</Text>
              </Grid.Col>

              <Grid.Col span={'auto'}>
                <Group justify={'space-between'}>
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
                    <Box
                      w={10}
                      h={10}
                      bg={theme.other.colors.amber}
                      style={{ borderRadius: '50%' }}
                    />
                    <Text c={'gray.6'}>{'Auto Stake'}</Text>
                  </Group>
                </Group>
              </Grid.Col>

              <Grid.Col span={4.1} miw={260}>
                <Text c={'gray.6'} ta={'right'}>
                  {'My share of the total stake'}
                </Text>
              </Grid.Col>

              <Grid.Col span={4.8} miw={300} pl={'3.5%'}>
                <Text c={'gray.6'} w={'65%'} ta={'center'}>
                  {'Claim rewards'}
                </Text>
              </Grid.Col>
            </Grid>
          )}

          <Stack mt={5} gap={'xs'}>
            {myCollators.map((myCollator, index) => (
              <MyCollatorRow
                key={myCollator.address}
                position={index + 1}
                config={config}
                {...myCollator}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
});
