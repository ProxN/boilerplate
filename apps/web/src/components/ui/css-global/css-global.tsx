import { Fragment, memo } from 'react';

import { globalCss, darkTheme } from '@lib/theme';

const globalStyles = globalCss({
  '*,*::before,*::after': {
    boxSizing: 'inherit',
  },

  html: {
    boxSizing: 'border-box',
    fontSize: '$md',
  },

  body: {
    margin: 0,
    padding: 0,
    fontSize: '$md',
    lineHeight: '$4',
    fontWeight: '$normal',
    fontFamily: '$sans',
    minH: '100%',
    background: '$background',
    color: '$text',
  },

  p: {
    margin: '$4 0',
    fontSize: '$md',
  },

  small: {
    fontSize: '$xs',
  },

  a: {
    cursor: 'pointer',
    fontSize: 'inherit',
    textDecoration: 'none',
    color: '$link',
  },

  'ul,ol': {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },

  'h1,h2,h3,h4,h5,h6': {
    color: 'inherit',
    margin: '0 0 $3 0',
  },

  h1: {
    fontSize: '$4xl',
    letterSpacing: '$tighter',
    lineHeight: '$4',
    fontWeight: 'bold',
  },

  h2: {
    fontSize: '$3xl',
    letterSpacing: '$tighter',
    fontWeight: '$semibold',
  },

  h3: {
    fontSize: '$2xl',
    letterSpacing: '$tighter',
    fontWeight: '$semibold',
  },

  h4: {
    fontSize: '$xl',
    letterSpacing: '$tighter',
    fontWeight: '$semibold',
  },

  h5: {
    fontSize: '$lg',
    letterSpacing: '$tight',
    fontWeight: '$semibold',
  },

  h6: {
    fontSize: '$md',
    letterSpacing: '$tight',
    fontWeight: '$semibold',
  },
});

const CssBase: React.FC = ({ children }) => {
  globalStyles();
  return <Fragment>{children}</Fragment>;
};

export const CssGlobal = memo(CssBase);
