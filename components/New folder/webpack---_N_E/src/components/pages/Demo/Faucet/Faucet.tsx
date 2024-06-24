import { ActionButton } from '@/components/ActionButton';
import { InnerCard } from '@/components/AppchainCard/InnerCard';
import { ConnectEvmWallet } from '@/components/ConnectEvmWallet';
import { DEMO_CHAIN_ID, captchaSiteKey, demo } from '@/config';
import { useDemoFaucet } from '@/hooks/api/useFaucet';
import { useEvmAddress } from '@/hooks/useEvmAddress';
import { Container, Group, Text, Title } from '@mantine/core';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { PiCoinsBold } from 'react-icons/pi';
import { useAccount } from 'wagmi';

export function DemoFaucet() {
  const { isLoading, send } = useDemoFaucet();
  const address = useEvmAddress();
  const { chainId } = useAccount();
  const [isCaptchaEnabled, setIsCaptchaEnabled] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<string | null>(null);

  const handleCaptchaSolved = (captcha: string | null) => {
    setCaptcha(captcha);
    if (address && captcha) {
      send(address, captcha);
    }
  };

  const handleCaptchaExpired = () => {
    setCaptcha(null);
  };

  return (
    <>
      <Title order={2} size={24} c={'white'}>
        {'Faucet'}
      </Title>
      <InnerCard>
        <Group gap={'lg'} align={'center'} justify={'space-between'}>
          <Text maw={{ xs: '30%' }}>
            {`Ready to deploy contracts? You can request 1 ${demo.asset.originSymbol} tokens every 12 hours.`}
          </Text>
          {address && chainId === DEMO_CHAIN_ID ? (
            <>
              <Container miw={350} mih={80}>
                {isCaptchaEnabled && (
                  <ReCAPTCHA
                    sitekey={captchaSiteKey}
                    onChange={handleCaptchaSolved}
                    onExpired={handleCaptchaExpired}
                  />
                )}
              </Container>
              <ActionButton
                miw={{ base: '100%', xs: 'auto' }}
                size={'lg'}
                leftSection={<PiCoinsBold />}
                withArrow={false}
                loading={isLoading}
                disabled={isLoading}
                onClick={() =>
                  captcha ? send(address, captcha) : setIsCaptchaEnabled(true)
                }
              >
                {'Request Tokens'}
              </ActionButton>
            </>
          ) : (
            <ConnectEvmWallet />
          )}
        </Group>
      </InnerCard>
    </>
  );
}
