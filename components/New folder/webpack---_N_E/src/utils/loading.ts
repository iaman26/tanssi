import { nprogress } from '@mantine/nprogress';

export function enableProgressBar(enable: boolean): void {
  if (enable) {
    nprogress.reset();
    nprogress.start();
  } else {
    nprogress.complete();
  }
}
