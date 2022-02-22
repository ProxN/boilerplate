import { styled, VariantProps } from '@lib/theme';

export const GridBasic = styled('div', {
  variants: {
    container: {
      true: {
        '&.container': {
          display: 'flex',
          width: 'calc(100% + $$gridGap * 2)',
          m: 'calc(-1 * $$gridGap)',
        },
      },
    },
    item: {
      true: {
        '&.item': {
          p: '$$gridGap',
        },
      },
    },
  },

  defaultVariants: {
    container: false,
    item: false,
  },
});

export type GridBasicVariantsProps = VariantProps<typeof GridBasic>;
