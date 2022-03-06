import { styled, keyframes, VariantProps } from '@lib/theme';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const LoadingContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    size: {
      xs: {
        height: '$4',
        width: '$4',
      },
      sm: {
        height: '$6',
        width: '$6',
      },
      md: {
        height: '$8',
        width: '$8',
      },
      lg: {
        height: '$10',
        width: '$10',
      },
      xl: {
        height: '$12',
        width: '$12',
      },
    },
    color: {
      white: {
        color: '#ffffff',
      },
      default: {
        color: '$primaryMain',
      },
      secondary: {
        color: '$secondaryMain',
      },
      warning: {
        color: '$warningMain',
      },
      error: {
        color: '$errorMain',
      },
      success: {
        color: '$successMain',
      },
      disabled: {
        color: '$neutral6',
      },
      gradient: {},
    },
  },

  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export const StyledLoading = styled('svg', {
  animation: `${rotate} linear 1.3s infinite`,
  color: 'currentColor',
});

export type LoadingVariantProps = VariantProps<typeof LoadingContainer>;
