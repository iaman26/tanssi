import { useCreateAppChainInfo } from '@/components/pages/CreateAppChain/state/create.hooks';
import { ChainConfig, RelayChainConfig } from '@/config';
import { useApiCall } from '@/hooks/polkadot';
import { useAllAppchains } from '@/hooks/polkadot/appchain';
import { useIsAppchainProtected } from '@/hooks/useIsAppchainProtected';
import { useAddress } from '@/state/user';
import type { StorageKey } from '@polkadot/types';
import type { Option } from '@polkadot/types-codec';
import type { ParaInfo } from '@polkadot/types/interfaces';
import type { PolkadotRuntimeCommonParasRegistrarParaInfo } from '@polkadot/types/lookup';
import { useMemo } from 'react';
import { useApi } from '../../useApi';

export interface RegistrarParaId {
  deposit: number;
  manager: string;
  locked: boolean;
}
export interface ParaIdInfo {
  paraId: number;
  manager: string;
  locked: boolean;
}
export type ParaEntries = Array<[StorageKey, ParaInfo]>;

function transformRegistrarParaId(
  paraIdInfo: Option<PolkadotRuntimeCommonParasRegistrarParaInfo>,
): RegistrarParaId | undefined {
  if (paraIdInfo.isEmpty) {
    return undefined;
  }

  const unwrapped = paraIdInfo.unwrap();

  return {
    deposit: unwrapped.deposit.toNumber(),
    manager: unwrapped.manager.toHuman(),
    locked: Boolean(unwrapped.locked.toPrimitive()),
  };
}

function transform(entries: ParaEntries): ParaIdInfo[] {
  return entries.map(([key, info]) => {
    const paraId = Number((key.toHuman() as string[]).at(0)?.replace(',', ''));

    return {
      paraId,
      manager: info.manager.toString(),
      locked: info.locked.isTrue || false,
    };
  });
}

export function useReservedParaId(
  config: RelayChainConfig,
): RegistrarParaId | undefined {
  const api = useApi(config.ws);
  const { paraId } = useCreateAppChainInfo();

  return useApiCall(
    api?.query.registrar.paras,
    [paraId],
    transformRegistrarParaId,
    { shouldUnwrap: false },
  );
}

export function useReservedParaIds(
  config: RelayChainConfig,
): ParaIdInfo[] | undefined {
  const api = useApi(config.ws);

  return useApiCall(api?.query.registrar.paras.entries, [], transform);
}

export function useUserReservedParaIds(
  config: RelayChainConfig,
): ParaIdInfo[] | undefined {
  const address = useAddress();
  const ids = useReservedParaIds(config);

  return useMemo(
    () => ids?.filter((id) => id.manager === address),
    [address, ids],
  );
}

export function useFreeUserParaIds(
  config: ChainConfig,
): ParaIdInfo[] | undefined {
  const ids = useUserReservedParaIds(config.relay);
  const { data: appchains } = useAllAppchains(config);
  const { isProtected } = useIsAppchainProtected();
  const { paraId } = useCreateAppChainInfo();
  const address = useAddress();

  return useMemo(() => {
    if (!ids || !appchains) {
      return;
    }

    const freeUserParaIds = ids
      .filter(
        (id) =>
          !id.locked &&
          !appchains.find((appchain) => appchain.paraId === id.paraId),
      )
      .sort((a, b) => b.paraId - a.paraId);

    const isParaIdAlreadyReserved = freeUserParaIds.some(
      (result) => result.paraId === paraId,
    );

    const shouldFakeUserParaIds = paraId && !isProtected && address;

    if (shouldFakeUserParaIds && !isParaIdAlreadyReserved) {
      freeUserParaIds.push({
        paraId,
        manager: address,
        locked: false,
      });
    }

    return freeUserParaIds;
  }, [appchains, ids, paraId, isProtected, address]);
}
