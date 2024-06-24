import { useMediaQuery } from '@/hooks/useMediaQuery';
import { ellipsis } from '@/utils/address';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectEvmButton } from './ConnectEvmButton';

export const ConnectEvmWallet = () => {
  const { xs } = useMediaQuery();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const address = account?.address;
        const isConnected = mounted && account && chain;

        if (!isConnected) {
          return (
            <ConnectEvmButton onClick={openConnectModal}>
              {'Connect Wallet'}
            </ConnectEvmButton>
          );
        }

        if (chain.unsupported) {
          return (
            <ConnectEvmButton onClick={openChainModal}>
              {'Switch chain'}
            </ConnectEvmButton>
          );
        }

        return (
          <ConnectEvmButton onClick={openAccountModal}>
            {ellipsis(address, xs ? 5 : 3, xs ? 5 : 0)}
          </ConnectEvmButton>
        );
      }}
    </ConnectButton.Custom>
  );
};
