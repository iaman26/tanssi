import { env } from '@/env.mjs';
import { useQuery } from '@tanstack/react-query';
import flagsmith from 'flagsmith/isomorphic';
import { IState } from 'flagsmith/types';

const flagsmithId = env.NEXT_PUBLIC_FLAGSMITH_ENV_ID;

export const useFlagsmithState = (): IState | undefined => {
  const { data: flagsmithState } = useQuery({
    queryKey: ['flagsmith'],
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
    queryFn: async () => {
      await flagsmith.init({
        environmentID: flagsmithId as string,
      });

      return flagsmith.getState();
    },
  });

  return flagsmithState;
};
