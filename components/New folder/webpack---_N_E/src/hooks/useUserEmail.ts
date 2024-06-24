import { useSession } from 'next-auth/react';

export function useUserEmail(): string | undefined {
  const { data: session } = useSession();

  return session?.user?.email || undefined;
}
