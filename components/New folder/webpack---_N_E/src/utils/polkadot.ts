import { EventRecord } from '@polkadot/types/interfaces/system';
import { ISubmittableResult } from '@polkadot/types/types';

export interface SuccessCallbackParams {
  txHash: string;
  blockHash: string;
}

export interface ErrorCallbackParams {
  error: Error;
  params?: unknown[];
  txHash?: string;
  blockHash?: string;
}

export interface TxEventCb {
  onSuccess?: (params: SuccessCallbackParams) => void;
  onEvents?: ((events: EventRecord[]) => void) | undefined;
  onLoading?: (enabled: boolean) => void;
  onError?: (params: ErrorCallbackParams) => void;
}

export function createTxEventHandler({
  onSuccess,
  onEvents,
  onLoading,
  onError,
}: TxEventCb) {
  return ({
    status,
    events,
    dispatchError,
    txHash,
  }: ISubmittableResult): void => {
    if (onLoading) {
      if (status.isBroadcast) onLoading(true);
      if (status.isFinalized) onLoading(false);
    }

    onEvents?.(events);

    events.forEach(({ event: { method, section }, registry }) => {
      if (!status.isFinalized) return;

      const blockHash = status.asFinalized.toHex();

      if (section !== 'system') return;

      if (method === 'ExtrinsicFailed' && dispatchError) {
        let errorMessage: string;

        if (dispatchError.isModule) {
          const { docs, name, section } = registry.findMetaError(
            dispatchError.asModule,
          );

          errorMessage = `${section}.${name}: ${docs.join(' ')}`;
        } else {
          errorMessage = dispatchError.toString();
        }

        onError?.({
          error: new Error(errorMessage),
          txHash: txHash.toHex(),
          blockHash,
        });
      }

      if (method === 'ExtrinsicSuccess') {
        onSuccess?.({ txHash: txHash.toHex(), blockHash });
      }
    });
  };
}
