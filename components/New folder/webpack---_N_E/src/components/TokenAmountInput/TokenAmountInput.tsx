import {
  Button,
  CSSProperties,
  Group,
  NumberInput,
  NumberInputProps,
  Text,
} from '@mantine/core';

interface Props extends NumberInputProps {
  label: string;
  value: string;
  symbol: string;
  labelStyles?: CSSProperties;
  onMax?: () => void;
}

export function TokenAmountInput({
  label,
  labelStyles,
  value,
  size = 'md',
  symbol,
  onMax,
  ...others
}: Props) {
  return (
    <NumberInput
      value={value}
      size={size}
      hideControls
      allowNegative={false}
      placeholder={'0.00'}
      label={label}
      rightSection={
        <Group wrap={'nowrap'} gap={'xs'}>
          <Text size={'sm'} c={'gray.6'}>
            {symbol}
          </Text>
          {onMax && (
            <Button
              variant={'light'}
              size={'sm'}
              px={'xs'}
              h={32}
              bg={'dark.6'}
              onClick={onMax}
              style={{ borderRadius: 8 }}
            >
              {'MAX'}
            </Button>
          )}
        </Group>
      }
      styles={{
        section: {
          padding: '0px 10px',
          backgroundColor: 'var(--mantine-color-dark-9)',
          width: 'auto',
        },
        input: { fontSize: 14 },
        error: { fontSize: 12 },
        label: { ...labelStyles },
      }}
      {...others}
    />
  );
}
