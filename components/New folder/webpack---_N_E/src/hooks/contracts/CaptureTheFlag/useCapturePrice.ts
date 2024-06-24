import { useReadContract } from 'wagmi';
import { CAPTURE_THE_FLAG_ABI } from './CaptureTheFlag.abi';
import { CAPTURE_THE_FLAG_CONTRACT_ADDRESS } from './CaptureTheFlag.constants';

export function useCapturePrice() {
  return useReadContract({
    abi: CAPTURE_THE_FLAG_ABI,
    address: CAPTURE_THE_FLAG_CONTRACT_ADDRESS,
    functionName: 'capturePrice',
    args: [],
  });
}
