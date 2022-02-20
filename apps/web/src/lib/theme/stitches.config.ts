import { createStitches } from '@stitches/react';
import * as Stitches from '@stitches/react';
import { commonTheme } from './common-theme';
import { lightTheme } from './light-theme';
import { darkTheme as defaultDarkTheme } from './dark-theme';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    colors: {
      ...commonTheme.theme.colors,
      ...lightTheme.colors,
    },
  },
});

export const darkTheme = createTheme('dark', {
  colors: {
    ...defaultDarkTheme.colors,
  },
});

export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;
