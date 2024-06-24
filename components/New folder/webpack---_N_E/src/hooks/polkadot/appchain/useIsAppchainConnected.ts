import { ChainConfig } from '@/config';
import { useAppchainEvmId } from '@/hooks/polkadot/appchain';
import { useCallback, useEffect, useState } from 'react';

export function useIsAppchainConnected(
  paraId: number | undefined,
  config: ChainConfig,
): boolean | undefined {
  const [isConnected, setIsConnected] = useState<boolean>();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const chainId = useAppchainEvmId(paraId, config);

  const checkConnection = useCallback(() => {
    window.ethereum
      ?.request({ method: 'eth_chainId' })
      .then((id) => {
        if (id === `0x${chainId?.toString(16)}`) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      })
      .catch((error) => {
        console.error('Error checking network:', error);
      });
  }, [chainId]);

  useEffect(() => {
    if (isSubscribed || !chainId) return;

    checkConnection();

    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        checkConnection();
      });

      setIsSubscribed(true);
    } else {
      console.error(
        'MetaMask or a compatible Ethereum provider is not detected.',
      );
    }
  }, [chainId, isSubscribed, checkConnection]);

  return isConnected;
}
