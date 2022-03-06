import { defaultThemeMap } from '@stitches/react';
import * as Stitches from '@stitches/react';
import { colors } from './colors';

const tokens = {
  fonts: {
    sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    1: 1,
    2: 1.25,
    3: 1.375,
    4: 1.5,
    5: 1.625,
    6: 1.75,
    7: 2,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  space: {
    0: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  radii: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    rounded: '50%',
    full: '9999px',
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    10: '1000',
    max: '9999',
  },
  transitions: {
    default: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1400px',
  },
};

const media = {
  sm: `(min-width: ${tokens.breakpoints.sm})`,
  md: `(min-width: ${tokens.breakpoints.md})`,
  lg: `(min-width: ${tokens.breakpoints.lg})`,
  xl: `(min-width: ${tokens.breakpoints.xl})`,
  xxl: `(min-width: ${tokens.breakpoints.xxl})`,
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

const utils = {
  m: (value: Stitches.PropertyValue<'padding'>) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value,
  }),

  p: (value: Stitches.PropertyValue<'margin'>) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),

  w: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
  }),

  minW: (value: Stitches.PropertyValue<'minWidth'>) => ({
    minWidth: value,
  }),

  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
    maxWidth: value,
  }),

  h: (value: Stitches.PropertyValue<'height'>) => ({
    height: value,
  }),

  minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
    minHeight: value,
  }),

  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
    maxHeight: value,
  }),

  bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),

  linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),

  boxS: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    boxShadow: value,
  }),
  smallBorder: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `0 0 0 1px $colors${value}`,
  }),

  ringPrimary: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    WebkitTapHighlightColor: 'transparent',
    '&:focus:not(&:focus-visible)': {
      boxShadow: 'none',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 3px $colors$primaryLight`,
    },
  }),
};

export const themeMap = {
  ...defaultThemeMap,
  width: 'space',
  height: 'space',
  minWidth: 'space',
  minHeighT: 'space',
};

export const commonTheme = {
  prefix: 'ui',
  theme: {
    ...tokens,
    colors,
    shadows: {},
  },
  media,
  utils,
  themeMap,
};
