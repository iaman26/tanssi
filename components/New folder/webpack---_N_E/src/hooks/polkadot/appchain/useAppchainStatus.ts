import { useHasLiveAppchain } from '@/components/pages/Dashboard/state/dashboard.hooks';
import { ChainConfig } from '@/config';
import { useAppchainApi } from '@/hooks/polkadot/appchain';
import {
  useLatestAuthor,
  usePendingParaIds,
  usePendingVerification,
  useRegisteredParaIds,
} from '@/hooks/polkadot/common';
import { isDefined } from '@/utils/validate';
import { useEffect, useMemo, useState } from 'react';

export enum AppChainStatus {
  NotFound = 'not registered',
  PendingVerification = 'pending',
  Deploying = 'deploying',
  Online = 'live',
  NotOnline = 'not online',
}

export function useAppchainStatus(
  paraId: number | undefined,
  config: ChainConfig,
): {
  status: AppChainStatus | undefined;
  isLoading: boolean;
} {
  const [status, setStatus] = useState<AppChainStatus>();

  const appchainApi = useAppchainApi(paraId, config);
  const pendingParaIds = usePendingParaIds(config);
  const isPendingVerification = usePendingVerification(paraId, config);
  const registeredParaIds = useRegisteredParaIds(config);
  const latestAuthor = useLatestAuthor(paraId, config);
  const [, setHasLiveAppchain] = useHasLiveAppchain();

  const isPending = useMemo(
    () => pendingParaIds?.some((v) => v === paraId),
    [paraId, pendingParaIds],
  );
  const isRegistered = useMemo(
    () => registeredParaIds?.some((v) => v === paraId),
    [paraId, registeredParaIds],
  );

  const online = isRegistered && appchainApi?.isConnected;
  const pending = isPendingVerification && !isRegistered && !isPending;
  const deploying = isPending && !isRegistered;
  const notOnline = isRegistered && latestAuthor?.blockNumber && !online;

  useEffect(() => {
    if (
      !isDefined(pending) ||
      !isDefined(deploying) ||
      !isDefined(notOnline) ||
      !isDefined(online)
    )
      return;

    if (pending) {
      setStatus(AppChainStatus.PendingVerification);
    }

    if (deploying) {
      setStatus(AppChainStatus.Deploying);
    }

    if (notOnline) {
      setStatus(AppChainStatus.NotOnline);
    }

    if (online) {
      setStatus(AppChainStatus.Online);
      setHasLiveAppchain?.(true);
    }

    if (!pending && !deploying && !notOnline && !online) {
      setStatus(AppChainStatus.NotFound);
    }
  }, [deploying, notOnline, online, pending, setHasLiveAppchain]);

  return { status, isLoading: !isDefined(status) };
}
