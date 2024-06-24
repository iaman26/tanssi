import { Anchor, AnchorProps, Text, useMantineTheme } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconExternalLink } from '@tabler/icons-react';
import { ReactNode, useMemo } from 'react';

export function isTrustedUrl(url: string): boolean {
  return ['tanssi.network', 'dashboard.tanssi-chains.network'].some((u) =>
    new URL(url).hostname.endsWith(u),
  );
}

export interface Props extends AnchorProps {
  label?: string;
  url: string;
  withConfirm?: boolean;
  tabIndex?: number;
  withIcon?: boolean;
  iconColor?: string;
  iconSize?: number;
  isWrapper?: boolean;
  children?: ReactNode;
  anchorColor?: string;
}

export const OffsiteLink = ({
  label,
  url,
  size = 'sm',
  withIcon = true,
  anchorColor,
  iconColor,
  iconSize = 18,
  withConfirm,
  isWrapper = false,
  children,
  tabIndex = 0,
  ...others
}: Props) => {
  const theme = useMantineTheme();

  const anchorTextColor = anchorColor || theme.colors.tanssiTeal[9];

  const withConfirmModal = useMemo(() => {
    return withConfirm ?? !isTrustedUrl(url);
  }, [url, withConfirm]);

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    modals.openConfirmModal({
      title: "You're Leaving the Tanssi Dapp",
      children: (
        <Text mb={'xl'}>
          {
            'You are now leaving the Tanssi Network for an independent, third-party website that is not affiliated with Tanssi or Moondance Labs.'
          }
        </Text>
      ),
      labels: {
        confirm: 'Continue to External Site',
        cancel: 'Cancel',
      },
      onConfirm: () => window.open(url, '_blank', 'noopener,noreferrer'),
    });
  };

  return (
    <Anchor
      size={size}
      href={url}
      rel={'noopener noreferrer'}
      target={'_blank'}
      onClick={withConfirmModal ? onClick : undefined}
      tabIndex={tabIndex}
      c={anchorTextColor}
      {...others}
    >
      {isWrapper || label || url}
      {withIcon && (
        <IconExternalLink
          size={iconSize}
          color={iconColor}
          style={{
            marginLeft: '5px',
            transform: 'translateY(15%)',
          }}
        />
      )}
      {children}
    </Anchor>
  );
};
