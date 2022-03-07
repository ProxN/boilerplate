import { styled, VariantProps } from '@lib/theme';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  overflow: 'hidden',
  cursor: 'pointer',

  variants: {
    color: {
      default: {
        bg: '$primaryMain',
      },
      secondary: {
        bg: '$secondaryMain',
      },
      warning: {
        bg: '$warningMain',
      },
      error: {
        bg: '$errorMain',
      },
      success: {
        bg: '$successMain',
      },
      grey: {
        bg: '$neutral4',
      },
    },
    size: {
      xs: {
        height: '$5',
        width: '$5',
        fontSize: '$xs',
      },
      sm: {
        height: '$7',
        width: '$7',
        fontSize: '$sm',
      },
      md: {
        height: '$10',
        width: '$10',
        fontSize: '$md',
      },
      lg: {
        height: '$12',
        width: '$12',
        fontSize: '$md',
      },
      xl: {
        height: '$16',
        width: '$16',
        fontSize: '$md',
      },
    },
    rounded: {
      true: {
        borderRadius: '50%',
      },
    },
    square: {
      true: {
        borderRadius: '$md',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    rounded: true,
    color: 'grey',
  },
});

export const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const StyledFallback = styled(AvatarPrimitive.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
  fontSize: 'inherit',
  lineHeight: '$3',
});

export type AvatarVariantProps = VariantProps<typeof StyledAvatar>;
