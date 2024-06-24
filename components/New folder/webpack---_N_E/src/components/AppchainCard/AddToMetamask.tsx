import { ChainConfig } from '@/config';
import {
  useAppchainConfig,
  useIsAppchainConnected,
} from '@/hooks/polkadot/appchain';
import {
  Button,
  ButtonProps,
  Center,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import * as Sentry from '@sentry/nextjs';
import Image from 'next/image';
import { useState } from 'react';

interface Props extends ButtonProps {
  chainId?: number;
  config: ChainConfig;
  explorer?: string;
  name?: string;
  paraId?: number;
  rpc?: string;
  isIconOnly?: boolean;
}

export function AddToMetamask({
  chainId,
  config,
  explorer,
  name,
  paraId,
  rpc,
  isIconOnly = false,
  ...others
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const isConnected = useIsAppchainConnected(paraId, config);
  const appchainConfig = useAppchainConfig(paraId, config);
  const isDisabled = isConnected || isLoading;

  const handleAddToMetamask = async () => {
    setIsLoading(true);

    try {
      await window.ethereum?.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: chainId ? `0x${chainId.toString(16)}` : undefined,
            chainName: name ?? appchainConfig?.name,
            nativeCurrency: {
              name: appchainConfig?.asset.originSymbol,
              symbol: appchainConfig?.asset.originSymbol,
              decimals: 18,
            },
            rpcUrls: [rpc],
            blockExplorerUrls: explorer ? [explorer] : null,
          },
        ],
      });
    } catch (error) {
      console.error(error);
      Sentry.captureException(error, { extra: { chainId, paraId } });
    } finally {
      setIsLoading(false);
    }
  };

  if (!name || !paraId || !chainId || !rpc || !appchainConfig) return null;

  return isIconOnly ? (
    <Tooltip label={`${isConnected ? 'Added' : 'Add'} to MetaMask`}>
      <UnstyledButton
        disabled={isDisabled}
        opacity={isDisabled ? 0.6 : 1}
        onClick={handleAddToMetamask}
      >
        <Center>
          <Image
            src={'/images/logo_metamask.svg'}
            alt={'Metamask logo'}
            height={26}
            width={26}
            priority
          />
        </Center>
      </UnstyledButton>
    </Tooltip>
  ) : (
    <Button
      disabled={isDisabled}
      opacity={isDisabled ? 0.7 : 1}
      loading={isLoading}
      leftSection={
        <Image
          src={'/images/logo_metamask.svg'}
          alt={'Metamask logo'}
          height={26}
          width={26}
          priority
        />
      }
      onClick={handleAddToMetamask}
      {...others}
    >
      {`${isConnected ? 'Added' : 'Add'} to MetaMask`}
    </Button>
  );
}
