import { ChainConfig } from '@/config';
import { useApiHttp } from '@/hooks/polkadot/useApiHttp';
import { useAddress } from '@/state/user';
import type { StorageKey } from '@polkadot/types';
import type { Option } from '@polkadot/types-codec';
import type { PalletRegistrarDepositInfo } from '@polkadot/types/lookup';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useRegisteredParaIds } from '../../common';
import { useApi } from '../../useApi';
import { useApiCall } from '../../useApiCall';

interface AppchainInfo {
  paraId: number;
  creator: string;
}

type DepositInfoEntries = Array<
  [StorageKey, Option<PalletRegistrarDepositInfo>]
>;

export function transformRegistrar(
  entries: DepositInfoEntries,
): AppchainInfo[] {
  return entries.map(([key, info]) => {
    const paraId = Number((key.toHuman() as string[]).at(0)?.replace(',', ''));

    return {
      paraId,
      creator: info.unwrapOrDefault().creator.toString(),
    };
  });
}

export function useAllAppchains(
  config: ChainConfig,
): UseQueryResult<AppchainInfo[] | undefined, unknown> {
  const api = useApiHttp(config.http);

  return useQuery({
    queryKey: ['userAppchains', config.key],
    queryFn: async () => {
      const res = await api?.query.registrar.registrarDeposit.entries();

      return res ? transformRegistrar(res) : undefined;
    },
    enabled: !!api,
  });
}

export function useActiveAppchains(
  config: ChainConfig,
): AppchainInfo[] | undefined {
  const active = useRegisteredParaIds(config);
  const { data: all } = useAllAppchains(config);

  return useMemo(
    () => all?.filter((appchain) => active?.includes(appchain.paraId)),
    [active, all],
  );
}

export function useUserAppchains(config: ChainConfig): {
  isPending: boolean;
  appchains: AppchainInfo[] | undefined;
  hasAppchains: boolean | undefined;
} {
  const address = useAddress();
  const { data: ids, isPending } = useAllAppchains(config);

  const appchains = useMemo(
    () =>
      ids
        ?.filter((id) => id.creator === address)
        .sort((a, b) => b.paraId - a.paraId),
    [address, ids],
  );

  return {
    isPending,
    appchains,
    hasAppchains: !!appchains?.length,
  };
}

export function useAppchainManager(paraId: number, config: ChainConfig) {
  const api = useApi(config.ws);

  return useApiCall(
    api?.query.registrar.registrarDeposit,
    [paraId],
    transformRegistrarDeposit,
  );
}

export function transformRegistrarDeposit(data: PalletRegistrarDepositInfo) {
  return data.creator.toHuman();
}
