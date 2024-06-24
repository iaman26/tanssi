import { ActionButton } from '@/components/ActionButton';
import { Box, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

interface Props {
  chainName: string;
  isMounted: boolean;
  isLoading: boolean;
  isRegistered: boolean;
  isDisabled: boolean;
  index: number;
  onClick: () => void;
}

export function RegisterChainCard({
  chainName,
  isMounted,
  isLoading,
  isRegistered,
  isDisabled,
  index,
  onClick,
}: Props) {
  const theme = useMantineTheme();

  return (
    <Paper
      p={'xl'}
      w={230}
      h={270}
      bg={'dark.7'}
      shadow={'md'}
      radius={'sm'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box>
        <Text size={'sm'} tt={'uppercase'} fw={700}>
          {index + 1}
          {'. '}
          {chainName}
        </Text>
        <Title
          mt={'xs'}
          lh={1.2}
          fw={900}
          size={32}
          order={3}
          style={{ color: theme.white }}
        >
          {`Register Appchain in ${chainName}`}
        </Title>
      </Box>
      <ActionButton
        w={'100%'}
        isMounted={isMounted}
        isLoading={isLoading}
        disabled={isDisabled}
        rightSection={
          isRegistered && (
            <IconCheck size={20} stroke={2} color={theme.colors.green[9]} />
          )
        }
        onClick={onClick}
      >
        {isLoading ? 'Registering' : isRegistered ? 'Registered' : 'Register'}
      </ActionButton>
    </Paper>
  );
}
