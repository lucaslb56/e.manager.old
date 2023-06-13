import type { defaultTheme } from '~/styles/themes/default';

export type ThemeType = typeof defaultTheme;

export type ThemeKeyType = (typeof defaultTheme)[keyof typeof defaultTheme];
