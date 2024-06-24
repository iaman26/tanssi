import { formatDuration } from '@/utils/date';
import { useMemo } from 'react';
import { useReadContracts } from 'wagmi';
import {
  CAPTURE_THE_FLAG_CONTRACT_MULTICALL_ADDRESS,
  LEADERS,
  LEADERS_TIMESTAMP_CONTRACTS,
} from './CaptureTheFlag.constants';

export interface Player {
  address: string;
  duration: string;
}

export interface Leaderboard {
  isSuccess: boolean;
  players: Player[] | undefined;
}

export function useLeaderboard(): Leaderboard {
  const { isSuccess, data } = useReadContracts({
    contracts: LEADERS_TIMESTAMP_CONTRACTS,
    multicallAddress: CAPTURE_THE_FLAG_CONTRACT_MULTICALL_ADDRESS,
    query: { refetchOnWindowFocus: false },
  });

  const players = useMemo(() => {
    if (isSuccess && data) {
      return LEADERS.map((address, index) => ({
        address,
        timestamp: data[index].result,
      }))
        .sort((a, b) => {
          return Number(b.timestamp) - Number(a.timestamp);
        })
        .slice(0, 10)
        .map((player) => ({
          address: player.address,
          duration: formatDuration(
            Number((player.timestamp as bigint) * 1000n),
          ),
        }));
    }
  }, [isSuccess, data]);

  return {
    isSuccess,
    players,
  };
}
