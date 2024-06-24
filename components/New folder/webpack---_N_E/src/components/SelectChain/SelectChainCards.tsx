import { flashbox } from '@/config';
import { useIsDanceboxRegistrationEnabledFlag } from '@/hooks/flags/useIsDanceboxRegistrationEnabledFlag';
import { useIsFlashboxRegistrationEnabledFlag } from '@/hooks/flags/useIsFlashboxRegistrationEnabledFlag';
import { useDedicatedChainKey } from '@/hooks/useDedicatedChainKey';
import { useSetChainKey } from '@/state/chain';
import { Box, Grid, Group, Stack, Text, Title } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { Alert } from '../Alert';
import classes from './SelectChain.module.css';

export function SelectChainCards() {
  const setChainKey = useSetChainKey();
  const dedicatedChainKey = useDedicatedChainKey();

  const flashboxFlag = useIsFlashboxRegistrationEnabledFlag();
  const isFlashboxDisabled = !flashboxFlag.isLoading && !flashboxFlag.isEnabled;

  const danceboxFlag = useIsDanceboxRegistrationEnabledFlag();
  const isDanceboxDisabled = !danceboxFlag.isLoading && !danceboxFlag.isEnabled;

  return (
    <Stack gap={'md'} mt={30}>
      {isFlashboxDisabled && flashboxFlag.text && (
        <Alert>{flashboxFlag.text}</Alert>
      )}
      {isDanceboxDisabled && danceboxFlag.text && (
        <Alert>{danceboxFlag.text}</Alert>
      )}
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Link
            href={isFlashboxDisabled ? '#' : `${flashbox.key}/create`}
            className={`${classes.card} ${classes.snap}`}
            onClick={
              isFlashboxDisabled ? undefined : () => setChainKey(flashbox.key)
            }
            data-testid={'snap-chain'}
            style={{
              flex: 1,
              minWidth: 300,
              height: '100%',
              opacity: isFlashboxDisabled ? 0.5 : 1,
            }}
          >
            <Stack w={'100%'} h={'100%'} justify={'space-between'}>
              <Title order={2} size={35} c={'white'} fw={700}>
                {'Deploy a Snap'}
                <br />
                {'Appchain'}
              </Title>
              <Group
                justify={'space-between'}
                align={'end'}
                wrap={'nowrap'}
                gap={20}
              >
                <Text>
                  {`Perfect for quick, trial-based deployments, Snap Appchains are auto-deprecated after 48 hours - ideal for brief testing phases.`}
                </Text>
                <Box>
                  <IconArrowNarrowRight
                    size={40}
                    stroke={1.5}
                    style={{ alignSelf: 'end' }}
                  />
                </Box>
              </Group>
            </Stack>
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Link
            href={isDanceboxDisabled ? '#' : `${dedicatedChainKey}/create`}
            className={`${classes.card} ${classes.dedicated}`}
            onClick={
              isDanceboxDisabled
                ? undefined
                : () => setChainKey(dedicatedChainKey)
            }
            data-testid={'dedicated-chain'}
            style={{
              flex: 1,
              minWidth: 300,
              opacity: isDanceboxDisabled ? 0.5 : 1,
            }}
          >
            <Stack w={'100%'} h={'100%'}>
              <Title order={2} size={35} c={'white'} fw={700}>
                {'Deploy a Dedicated'}
                <br />
                {'Appchain'}
              </Title>
              <Group
                justify={'space-between'}
                align={'end'}
                wrap={'nowrap'}
                gap={20}
              >
                <Text>
                  {
                    'Ideal for teams needing a long-term test environment, this option provides a stable and enduring platform for your appchain development.'
                  }
                </Text>
                <Box>
                  <IconArrowNarrowRight
                    size={40}
                    stroke={1.5}
                    style={{ alignSelf: 'end' }}
                  />
                </Box>
              </Group>
            </Stack>
          </Link>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
