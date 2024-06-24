import { useUserEmail } from '@/hooks/useUserEmail';
import { useUser } from '@/state/user';
import { trpc } from '@/utils/trpc';
import { useSession } from 'next-auth/react';

export function useGetContact() {
  const { data: session } = useSession();
  const email = useUserEmail();
  const userWallet = useUser();

  const enabled = !!session && !!email && !!userWallet?.address;

  const { isLoading, data } = trpc.contacts.get.useQuery(
    { email: email || '' },
    { enabled },
  );

  return {
    isLoading,
    contact: data?.results[0],
  };
}
