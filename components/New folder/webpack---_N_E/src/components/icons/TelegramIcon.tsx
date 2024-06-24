import { rem } from '@mantine/core';

interface TelegramIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function TelegramIcon({ size, style, ...others }: TelegramIconProps) {
  return (
    <svg
      width={'18'}
      height={'15'}
      viewBox={'0 0 18 15'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M16.1355 0.10262C16.3568 0.0117554 16.5991 -0.019583 16.837 0.0118657C17.0749 0.0433145 17.2999 0.136401 17.4884 0.281436C17.677 0.426472 17.8222 0.618154 17.9091 0.836531C17.9959 1.05491 18.0212 1.292 17.9822 1.52312L15.951 13.5415C15.754 14.7008 14.45 15.3656 13.3601 14.7881C12.4484 14.305 11.0943 13.5607 9.87632 12.7841C9.26733 12.3953 7.40184 11.1504 7.63111 10.2645C7.82814 9.50712 10.9627 6.66087 12.7538 4.96867C13.4568 4.30385 13.1362 3.92033 12.306 4.53186C10.2435 6.05021 6.93435 8.35919 5.83996 9.00916C4.87452 9.58225 4.37121 9.6801 3.76938 9.58225C2.6714 9.40403 1.65313 9.12797 0.822039 8.79163C-0.301014 8.33735 -0.246384 6.83123 0.821144 6.39267L16.1355 0.10262Z'
        }
        fill={'white'}
      />
    </svg>
  );
}
