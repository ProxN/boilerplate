import { styled, VariantProps } from '@lib/theme';

export const GridBasic = styled('div', {
  variants: {
    alignItems: {
      center: { alignItems: 'center' },
      end: { alignItems: 'end' },
      start: { alignItems: 'start' },
      stretch: { alignItems: 'stretch' },
    },
    justify: {
      center: { justifyContent: 'center' },
      end: { justifyContent: 'end' },
      spaceAround: { justifyContent: 'space-around' },
      spaceBetween: { justifyContent: 'space-between' },
      spaceEvenly: { justifyContent: 'space-evenly' },
      start: { justifyContent: 'start' },
      stretch: { justifyContent: 'stretch' },
    },
    direction: {
      column: { flexDirection: 'column' },
      columnReverse: { flexDirection: 'column-reverse' },
      row: { flexDirection: 'row' },
      rowReverse: { flexDirection: 'row-reverse' },
    },
    wrap: {
      wrap: { flexWrap: 'wrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
      noWrap: { flexWrap: 'nowrap' },
    },
    container: {
      true: {
        display: 'flex',
        width: 'calc(100% + $$gridGap * 2)',
        m: 'calc(-1 * $$gridGap)',
      },
    },
    item: {
      true: {
        p: '$$gridGap',
      },
    },
  },

  defaultVariants: {
    container: false,
    item: false,
    direction: 'row',
    wrap: 'wrap',
  },
});

export type GridBasicVariantsProps = VariantProps<typeof GridBasic>;
