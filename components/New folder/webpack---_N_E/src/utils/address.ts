export function ellipsis(address?: string, pre = 10, post = 8): string {
  if (!address) {
    return '';
  }

  return `${address.slice(0, pre)}...${post ? address.slice(post * -1) : ''}`;
}

export function responsiveAddress(
  address: string,
  size: 'sm' | 'md' | 'lg' = 'md',
): string {
  const first = {
    sm: 4,
    md: 7,
    lg: 9,
  };

  const second = {
    sm: 3,
    md: 4,
    lg: 5,
  };

  return ellipsis(address, first[size], second[size]);
}
