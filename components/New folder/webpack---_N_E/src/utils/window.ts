export function isWindowDefined(): boolean {
  return typeof window !== 'undefined';
}

export function isMetaMaskInstalled(): boolean {
  return isWindowDefined() && !!window.ethereum?.isMetaMask;
}
