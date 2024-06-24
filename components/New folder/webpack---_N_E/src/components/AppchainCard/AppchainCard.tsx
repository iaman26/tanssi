import { Alert } from '@/components/Alert';
import { BlockProduction } from '@/components/AppchainCard/BlockProduction';
import { Feed } from '@/components/AppchainCard/Feed';
import { FreeCreditsAlert } from '@/components/AppchainCard/FreeCreditsAlert';
import { Properties } from '@/components/AppchainCard/Properties';
import { Status } from '@/components/AppchainCard/Status';
import { Tooling } from '@/components/AppchainCard/Tooling';
import { IdentityIcon } from '@/components/IndentityIcon';
import { useManageAppchain } from '@/components/pages/Dashboard/ManageAppchain/state';
import { BlockProductionManagement } from '@/components/pages/Dashboard/ManageAppchain/tabs/BlockProductionManagement';
import { ChainConfig, Explorer } from '@/config';
import { useIsAppchainManagementEnabledFlag } from '@/hooks/flags/useIsAppchainManagementEnabledFlag';
import { useIsCampaignEnabledFlag } from '@/hooks/flags/useIsCampaignEnabledFlag';
import {
  AppChainStatus,
  useAppchainConfig,
  useAppchainEvmId,
  useAppchainManager,
  useAppchainStatus,
  useAppchainUrls,
  useIsAppchainEvm,
} from '@/hooks/polkadot/appchain';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useAddress } from '@/state/user';
import {
  Button,
  Center,
  Group,
  Paper,
  PaperProps,
  Skeleton,
  Title,
  rgba,
  useMantineTheme,
} from '@mantine/core';
import { AddToMetamask } from './AddToMetamask';

export interface Props extends PaperProps {
  paraId: number;
  config: ChainConfig;
  name?: string;
  explorers?: Explorer[];
}

export function AppchainCard({
  name,
  paraId,
  config,
  explorers,
  ...others
}: Props) {
  const { sm } = useMediaQuery();
  const address = useAddress();
  const urls = useAppchainUrls(paraId, config);
  const isEvm = useIsAppchainEvm(paraId, config);
  const chainId = useAppchainEvmId(paraId, config);
  const appchainConfig = useAppchainConfig(paraId, config);
  const theme = useMantineTheme();
  const manager = useAppchainManager(paraId, config);

  const { status, isLoading: isLoadingStatus } = useAppchainStatus(
    paraId,
    config,
  );
  const { openManageAppchain } = useManageAppchain();

  const { isEnabled: isAppchainManagementEnabled } =
    useIsAppchainManagementEnabledFlag();
  const { isEnabled: isCampaignActive } = useIsCampaignEnabledFlag();

  const appchainName =
    name ||
    (appchainConfig?.name.includes('Frontier Container') ||
    appchainConfig?.name.includes('Simple Container') ||
    !appchainConfig?.name
      ? paraId.toString()
      : appchainConfig?.name);

  const isAppchainManager = manager === address;

  if (isLoadingStatus) {
    return <Skeleton mb={15} width={'100%'} height={330} />;
  }

  return (
    <Paper
      mb={15}
      p={'md'}
      bg={'dark.9'}
      style={{ border: `2px solid var(--mantine-color-dark-6)` }}
      {...others}
    >
      <Group mb={20} justify={'space-between'} gap={'xs'}>
        <Group gap={'xs'} w={{ base: '100%', xs: '40%' }}>
          {appchainName && (
            <Center>
              <IdentityIcon
                value={appchainName}
                w={32}
                h={32}
                size={20}
                p={'xs'}
                bg={'dark.7'}
                style={{ borderRadius: '50%' }}
              />
            </Center>
          )}

          <Title order={2} size={20} c={theme.other.colors.orange}>
            {appchainName?.toUpperCase()}
          </Title>
        </Group>

        <Status paraId={paraId} config={config} />

        <Group
          gap={'xs'}
          justify={'end'}
          align={'center'}
          w={{ base: '80%', xs: '40%' }}
        >
          {status === AppChainStatus.Online && (
            <>
              {isEvm && (
                <AddToMetamask
                  isIconOnly
                  name={appchainName}
                  chainId={chainId}
                  explorer={explorers?.[0].url}
                  paraId={paraId}
                  config={config}
                  rpc={urls?.rpc}
                />
              )}
              {address && (
                <Button
                  variant={'light'}
                  size={'sm'}
                  bg={rgba('var(--mantine-color-dark-7)', 0.9)}
                  onClick={() => {
                    openManageAppchain({
                      paraId,
                      config,
                      component: <BlockProductionManagement closeOnBack />,
                    });
                  }}
                >
                  {'Top Up'}
                </Button>
              )}
              {isAppchainManagementEnabled && isAppchainManager && (
                <Button
                  variant={'light'}
                  size={'sm'}
                  bg={rgba('var(--mantine-color-dark-7)', 0.9)}
                  onClick={() =>
                    openManageAppchain({
                      paraId,
                      config,
                    })
                  }
                >
                  {'Manage'}
                </Button>
              )}
            </>
          )}
        </Group>
      </Group>

      {status === AppChainStatus.Online && isAppchainManager && (
        <FreeCreditsAlert />
      )}

      {status !== AppChainStatus.Online && isCampaignActive && (
        <Alert>
          {
            "You have successfully completed an Appchain deployment intent, your chain will not be deployed to be used while the Let's Forkin Dance incentive campaign is still active."
          }
        </Alert>
      )}

      <Group
        mt={15}
        align={'auto'}
        style={{ flexDirection: sm ? 'row' : 'column' }}
      >
        {status === AppChainStatus.Online && (
          <BlockProduction
            w={{ base: 'auto', sm: '35%' }}
            paraId={paraId}
            config={config}
          />
        )}

        <Properties
          paraId={paraId}
          isEvm={isEvm}
          chainId={chainId}
          tokenSymbol={appchainConfig?.asset.originSymbol}
          config={config}
        />
      </Group>

      {status === AppChainStatus.Online && (
        <Group
          mt={15}
          align={'auto'}
          style={{ flexDirection: sm ? 'row' : 'column' }}
        >
          <Tooling urls={urls} explorers={explorers} />

          <Feed paraId={paraId} config={config} />
        </Group>
      )}
    </Paper>
  );
}
