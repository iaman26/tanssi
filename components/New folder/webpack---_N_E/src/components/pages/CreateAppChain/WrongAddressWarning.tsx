import { useReservedParaId } from '@/hooks/polkadot/common';
import { useChainConfig } from '@/hooks/useChainConfig';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useAddress } from '@/state/user';
import { ellipsis } from '@/utils/address';
import { Alert, AlertProps, Text } from '@mantine/core';

interface Props extends AlertProps {}

export function WrongAddressWarning({ ...props }: Props) {
  const config = useChainConfig();
  const address = useAddress();
  const paraIdInfo = useReservedParaId(config.relay);
  const { md } = useMediaQuery();
  const { isProtected } = useIsAppchainProtected();

  const isCorrectParaIdAddress =
    address && paraIdInfo ? paraIdInfo.manager === address : undefined;

  return (
    isCorrectParaIdAddress === false &&
    isProtected && (
      <Alert maw={690} pb={30} title={'Wrong address'} {...props}>
        {`You are connected with a wrong address. Please connect with the address `}
        <Text display={'inline-block'} fw={'bold'}>
          {md ? paraIdInfo?.manager : ellipsis(paraIdInfo?.manager, 5, 5)}
        </Text>
        {` you used to reserve the Appchain ID.`}
      </Alert>
    )
  );
}
