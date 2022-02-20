import { styled, VariantProps } from '@lib/theme';

export const StyledSpace = styled('div', {
  display: 'flex',

  variants: {
    gap: {
      xs: {
        gap: '$1',
      },
      sm: {
        gap: '$2',
      },
      md: {
        gap: '$4',
      },
      lg: {
        gap: '$5',
      },
      xl: {
        gap: '$6',
      },
      '2xl': {
        gap: '$10',
      },
    },

    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },

    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
  },

  defaultVariants: {
    direction: 'horizontal',
    gap: 'md',
    wrap: true,
  },
});

export type SpaceVariantsProps = VariantProps<typeof StyledSpace>;
