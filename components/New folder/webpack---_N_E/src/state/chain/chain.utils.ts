import { ParsedUrlQuery } from 'querystring';
import { ChainKey, chainKeys } from '@/config';

export function getChainKeyFromQuery({
  chainKey,
}: ParsedUrlQuery): string | undefined {
  return Array.isArray(chainKey) ? chainKey.at(0) : chainKey;
}

export function isChainKeyValid(param: string | undefined): param is ChainKey {
  return !!param && chainKeys.includes(param as ChainKey);
}
