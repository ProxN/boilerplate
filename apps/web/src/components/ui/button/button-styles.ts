import { styled, VariantProps } from '@lib/theme';

export const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$medium',
  appearance: 'none',
  userSelect: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  position: 'relative',
  cursor: 'pointer',
  transition: '$default',
  textAlign: 'center',
  lineHeight: '$3',
  width: 'auto',
  fontFamily: '$sans',
  color: '$text',
  outline: 'none',
  p: 0,
  '@motion': {
    transition: 'none',
  },

  '&:hover': {
    opacity: 0.9,
  },

  variants: {
    // Border Radius
    radii: {
      xs: {
        borderRadius: '$xs',
      },
      sm: {
        borderRadius: '$sm',
      },
      md: {
        borderRadius: '$md',
      },
      lg: {
        borderRadius: '$lg',
      },
      xl: {
        borderRadius: '$xl',
      },
      rounded: {
        borderRadius: '$rounded',
      },
      full: {
        borderRadius: '$full',
      },
    },
    // Size
    size: {
      xs: {
        $$iconPadding: '$space$1',
        h: '$6',
        px: '$1',
        fontSize: '$xs',
        minW: '$20',
      },
      sm: {
        $$iconPadding: '$space$2',
        h: '$7',
        px: '$2',
        fontSize: '$sm',
        minW: '$36',
      },
      md: {
        $$iconPadding: '$space$4',
        h: '$9',
        px: '$4',
        fontSize: '$sm',
        minW: '$48',
      },
      lg: {
        $$iconPadding: '$space$6',
        h: '$10',
        px: '$6',
        fontSize: '$lg',
        minW: '$56',
      },
      xl: {
        $$iconPadding: '$space$12',
        h: '$12',
        px: '$12',
        fontSize: '$xl',
        minW: '$64',
      },
    },
    auto: {
      true: {
        minW: 'min-content',
        width: 'auto',
      },
    },
    // Color
    color: {
      default: {
        bg: '$primaryMain',
        color: '$white',
      },
      secondary: {
        bg: '$secondaryMain',
        color: '$white',
      },
      success: {
        bg: '$successMain',
        color: '$white',
      },
      warning: {
        bg: '$warningMain',
        color: '$white',
      },
      error: {
        bg: '$errorMain',
        color: '$white',
      },
      gradient: {
        backgroundImage: '$gradient',
        color: '$white',
      },
    },
    // Button Types
    outline: {
      true: {
        bg: 'transparent',
      },
    },
    ghost: {
      true: {
        '&:hover': {
          color: '$text',
        },
      },
    },
    light: {
      true: {
        bg: 'transparent',
      },
    },
    // Animated
    animated: {
      true: {
        '&:not(:disabled):active': {
          transform: 'translateY(1px)',
        },
      },
    },
    // Disabled
    disabled: {
      true: {
        bg: '$neutral4',
        cursor: 'not-allowed',
        color: '$neutral6',
        boxS: 'none',
        '&:hover': {
          opacity: 1,
          bg: '$neutral4',
        },
      },
    },
  },

  compoundVariants: [
    // Outline / Color
    {
      outline: true,
      color: 'default',
      css: {
        smallBorder: '$primaryMain',
        color: '$primaryMain',
      },
    },
    {
      outline: true,
      color: 'secondary',
      css: {
        smallBorder: '$secondaryMain',
        color: '$secondaryMain',
      },
    },
    {
      outline: true,
      color: 'success',
      css: {
        smallBorder: '$successMain',
        color: '$successMain',
      },
    },
    {
      outline: true,
      color: 'warning',
      css: {
        smallBorder: '$warningMain',
        color: '$warningMain',
      },
    },
    {
      outline: true,
      color: 'error',
      css: {
        smallBorder: '$errorMain',
        color: '$errorMain',
      },
    },
    {
      ghost: true,
      color: 'default',
      css: {
        '&:hover': {
          bg: '$primaryMain',
        },
      },
    },

    {
      ghost: true,
      color: 'secondary',
      css: {
        '&:hover': {
          bg: '$secondaryMain',
        },
      },
    },
    {
      ghost: true,
      color: 'warning',
      css: {
        '&:hover': {
          bg: '$warningMain',
        },
      },
    },
    {
      ghost: true,
      color: 'error',
      css: {
        '&:hover': {
          bg: '$errorMain',
        },
      },
    },
    {
      ghost: true,
      color: 'success',
      css: {
        '&:hover': {
          bg: '$successMain',
        },
      },
    },

    // Light / color
    {
      light: true,
      color: 'default',
      css: {
        color: '$primaryMain',
      },
    },
    {
      light: true,
      color: 'secondary',
      css: {
        color: '$secondaryMain',
      },
    },
    {
      light: true,
      color: 'warning',
      css: {
        color: '$warningMain',
      },
    },
    {
      light: true,
      color: 'error',
      css: {
        color: '$errorMain',
      },
    },
    {
      light: true,
      color: 'success',
      css: {
        color: '$successMain',
      },
    },
  ],

  ringPrimary: '$primaryLight',

  defaultVariants: {
    size: 'md',
    radii: 'sm',
    color: 'default',
    auto: false,
    animated: true,
  },
});

export const ButtonIcon = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  color: 'inherit',
  left: '$$iconPadding',
  zIndex: '$1',
  right: 'auto',
  variants: {
    auto: {
      true: {
        position: 'relative',
      },
    },
    single: {
      true: {
        position: 'static',
        m: '0',
      },
    },
    right: {
      true: {
        right: '$$iconPadding',
        left: 'auto',
      },
    },
  },

  compoundVariants: [
    {
      auto: true,
      right: true,
      css: {
        order: 2,
        ml: '$$iconPadding',
        left: '0%',
      },
    },
    {
      auto: true,
      right: false,
      css: {
        mr: '$$iconPadding',
        left: '0%',
      },
    },
  ],
});

export const ButtonText = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export type ButtonVariantProps = VariantProps<typeof StyledButton>;
