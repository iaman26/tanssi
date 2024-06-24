import {
  Alert,
  Anchor,
  Box,
  Button,
  CSSVariablesResolver,
  Checkbox,
  Fieldset,
  HoverCard,
  Input,
  InputWrapper,
  Loader,
  Modal,
  Notification,
  NumberInput,
  Paper,
  Select,
  Text,
  TextInput,
  Tooltip,
  createTheme,
  rem,
  rgba,
} from '@mantine/core';
import { AlertIcon } from './components/icons/AlertIcon';

declare module '@mantine/core' {
  export interface MantineThemeOther {
    headerHeight: string;
    colors: {
      orange: string;
      amber: string;
      white: string;
      blue: string;
      coral: string;
      charcoalBlue: string;
      rosyRed: string;
      midnightBlue: string;
      navyBlue: string;
      obsidian: string;
      mahoganyRed: string;
      coralRed: string;
      purple: string;
      violet: string;
    };
  }
}

const colors = {
  tanssiTeal: [
    '#ecf7f7',
    '#d8efef',
    '#c5e7e7',
    '#b1dfdf',
    '#9ed7d7',
    '#8acfcf',
    '#77c7c7',
    '#63bfbf',
    '#50b7b7',
    '#48a6a7',
  ] as const,
  tanssiBlue: [
    '#ecf1fe',
    '#d8e3fd',
    '#c5d4fc',
    '#b1c6fb',
    '#9eb8fb',
    '#8aaafa',
    '#779cf9',
    '#638df8',
    '#507ff7',
    '#3c71f6',
  ] as const,
  dark: [
    '#b4c5ed',
    '#8b9ac4',
    '#7e8cb2',
    '#7481a6',
    '#546080',
    '#2C354A',
    '#202738',
    '#131926',
    '#0E121C',
    '#090B12',
  ] as const,
  orange: '#FFBB00',
  amber: '#ffc32a',
  white: '#ffffff',
  blue: '#357ab3',
  coral: '#ff8d68',
  charcoalBlue: '#0e191e',
  rosyRed: '#C84B4B',
  midnightBlue: '#16252f',
  navyBlue: '#121E3B',
  obsidian: '#07090F',
  mahoganyRed: '#702929',
  coralRed: '#F63C3C',
  purple: '#9C38FF',
};

export const theme = createTheme({
  colors: {
    tanssiTeal: colors.tanssiTeal,
    tanssiBlue: colors.tanssiBlue,
    dark: colors.dark,
  },
  other: {
    headerHeight: rem(70),
    colors: {
      orange: colors.orange,
      amber: colors.amber,
      white: colors.white,
      blue: colors.blue,
      coral: colors.coral,
      charcoalBlue: colors.charcoalBlue,
      rosyRed: colors.rosyRed,
      midnightBlue: colors.midnightBlue,
      navyBlue: colors.navyBlue,
      obsidian: colors.obsidian,
      mahoganyRed: colors.mahoganyRed,
      coralRed: colors.coralRed,
      purple: colors.purple,
    },
  },
  primaryColor: 'tanssiTeal',
  primaryShade: { light: 9, dark: 9 },
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 12,
  components: {
    Alert: Alert.extend({
      defaultProps: {
        color: '#E13535',
        icon: (
          <Box w={20} h={20}>
            <AlertIcon
              color={colors.rosyRed}
              style={{ marginTop: -10, marginLeft: -10 }}
            />
          </Box>
        ),
      },
      styles: (_, { color }) => ({
        root: {
          border: `1px solid ${rgba(color || '#E13535', 0.5)}`,
        },
        title: {
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          fontSize: 16,
        },
      }),
    }),
    Loader: Loader.extend({
      defaultProps: {
        type: 'dots',
      },
    }),
    Paper: Paper.extend({
      styles: ({ radius, colors }) => ({
        root: {
          borderRadius: radius.lg,
          backgroundColor: colors['dark'][8],
        },
      }),
    }),
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
      styles: ({ colors }) => ({
        input: {
          backgroundColor: colors['dark'][9],
          color: 'white',
        },
      }),
    }),
    InputWrapper: InputWrapper.extend({
      styles: {
        label: {
          color: 'white',
          fontSize: 16,
        },
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        radius: 'md',
        color: 'white',
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        color: 'white',
        radius: 'md',
      },
    }),
    Fieldset: Fieldset.extend({
      defaultProps: {
        variant: 'unstyled',
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        padding: 'xl',
        radius: 'lg',
        closeButtonProps: { c: 'var(--mantine-color-white)', size: 'lg' },
        overlayProps: { backgroundOpacity: 0.9 },
      },
      styles: ({ white, colors }) => ({
        content: {
          border: `1px solid ${rgba('#FFFFFF', 0.1)}`,
          backgroundColor: colors['dark'][8],
        },
        header: {
          backgroundColor: colors['dark'][8],
        },
        title: {
          fontWeight: 700,
          color: white,
        },
      }),
    }),
    Button: Button.extend({
      defaultProps: {
        size: 'md',
        c: 'white',
        fw: 500,
        loaderProps: { type: 'oval' },
      },
      styles: (_, { variant, disabled }) => ({
        root: {
          border: [undefined, 'filled'].includes(variant)
            ? `1px solid ${rgba('#FFFFFF', 0.2)}`
            : undefined,
          color:
            variant === 'light' ? 'var(--mantine-color-dark-6)' : undefined,
          opacity: disabled ? 0.5 : 1,
        },
      }),
    }),
    Notification: Notification.extend({
      defaultProps: {
        radius: 'xs',
        bg: 'dark.8',
      },
    }),
    Select: Select.extend({
      styles: ({ spacing }) => ({
        dropdown: { padding: spacing.sm },
      }),
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'white',
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        c: 'var(--mantine-color-anchor)',
      },
    }),
    HoverCard: HoverCard.extend({
      styles: () => ({
        dropdown: {
          border: 'none',
          padding: rem(15),
        },
      }),
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        color: 'dark.6',
        withArrow: true,
        arrowSize: 7,
        c: 'var(--mantine-color-gray-4)',
        p: 'sm',
      },
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        variant: 'outline',
        color: colors.tanssiTeal[9],
        radius: 'sm',
      },
      styles: () => ({
        input: {
          border: `1px solid rgba(255, 255, 255, 0.3)`,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }),
    }),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--_chip-bg': theme.colors.tanssiTeal[5],
    '--_input-disabled-color': theme.colors.dark[2],
    '--header-height': theme.other.headerHeight,
    '--color-dark-6': theme.colors.dark[6],
    '--color-dark-7': theme.colors.dark[7],
    '--color-blue': theme.other.colors.blue,
  },
  dark: {
    '--mantine-color-placeholder': theme.colors.dark[4],
    '--mantine-color-text': theme.colors.gray[5],
  },
  light: {},
});
