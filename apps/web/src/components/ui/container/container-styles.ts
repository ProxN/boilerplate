import { styled, VariantProps } from '@lib/theme';

export const StyledContainer = styled('div', {
  w: '100%',
  mx: 'auto',
  px: '$4',

  '@sm': {
    px: '$6',
  },

  variants: {
    fluid: {
      true: {
        maxW: '100%',
      },
    },

    responsive: {
      true: {
        '@sm': {
          maxW: '$breakpoints$sm',
        },
        '@md': {
          maxW: '$breakpoints$md',
        },
        '@lg': {
          maxW: '$breakpoints$lg',
        },
        '@xl': {
          maxW: '$breakpoints$xl',
        },
        '@2xl': {
          maxW: '$breakpoints$2xl',
        },
      },
    },
    maxWidth: {
      sm: {
        '@sm': {
          maxW: '$breakpoints$sm',
        },
      },
      md: {
        '@md': {
          maxW: '$breakpoints$md',
        },
      },
      lg: {
        '@lg': {
          maxW: '$breakpoints$lg',
        },
      },
      xl: {
        '@xl': {
          maxW: '$breakpoints$xl',
        },
      },
      '2xl': {
        '@2xl': {
          maxW: '$breakpoints$2xl',
        },
      },
    },
  },
  defaultVariants: {
    fluid: false,
    responsive: true,
  },
});

export type ContainerVairantsProps = VariantProps<typeof StyledContainer>;
