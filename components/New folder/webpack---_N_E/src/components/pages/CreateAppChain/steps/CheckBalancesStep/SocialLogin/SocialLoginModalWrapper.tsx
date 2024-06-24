import { useChainConfig } from '@/hooks/useChainConfig';
import { Modal, Stack, UnstyledButton } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';

interface Props {
  children?: React.ReactNode;
  goBack?: () => void;
}

export function SocialLoginModalWrapper({ children, goBack }: Props) {
  const router = useRouter();
  const { key } = useChainConfig();

  return (
    <Modal
      opened={router.query.auth === 'true'}
      onClose={() =>
        router.replace(`/${key}/create`, undefined, {
          scroll: false,
        })
      }
      size={'sm'}
      styles={{
        header: {
          minHeight: 0,
          padding: 0,
        },
        close: { position: 'absolute', right: 32, top: 23 },
        body: { padding: 32 },
      }}
    >
      {goBack && (
        <UnstyledButton
          pos={'absolute'}
          left={32}
          top={30}
          w={20}
          onClick={goBack}
        >
          <IconArrowLeft color={'white'} size={25} stroke={2} />
        </UnstyledButton>
      )}
      <Stack align={'center'}>{children}</Stack>
    </Modal>
  );
}
