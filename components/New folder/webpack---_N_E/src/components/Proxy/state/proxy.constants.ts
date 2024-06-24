import { ProxyAllowedTypes } from '@/components/Proxy/state/proxy.interfaces';

export const PROXY_ALLOWED_TYPES: ProxyAllowedTypes = {
  Staking: ['Any', 'Staking'],
  Governance: ['Any', 'Governance', 'NonTransfer'],
};
