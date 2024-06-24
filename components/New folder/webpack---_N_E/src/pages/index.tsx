import { Dashboard } from '@/components/pages/Dashboard';
import { Landing } from '@/components/pages/Landing';
import { useUserAppchains } from '@/hooks/polkadot/appchain';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useIsMounted } from '@/hooks/useIsMounted';
import { Center, Loader } from '@mantine/core';

export default function HomePage() {
  const isMounted = useIsMounted();
  const config = useChainConfig();
  const { hasAppchains, isPending } = useUserAppchains(config);

  return (
    <>
      {isPending || !isMounted ? (
        <Center
          pos={'absolute'}
          top={'50vh'}
          left={'50vw'}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <Loader size={50} />
        </Center>
      ) : hasAppchains ? (
        <Dashboard />
      ) : (
        <Landing />
      )}
    </>
  );
}
