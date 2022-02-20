import { forwardRef } from '@lib/utils/forward-ref';
import { useMemo } from 'react';
import { GridBasic, GridBasicVariantsProps } from './grid-styles';

interface Props {
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
  '2xl'?: number | boolean;
}

export type GridProps = Props & GridBasicVariantsProps;

// https://github.com/nextui-org/nextui/blob/e25697bd18f844d1e96d834c4e87644780a69117/packages/react/src/grid/grid-item.tsx#L45
const getGridLayout = (val?: number | boolean) => {
  if (typeof val === 'number') {
    const width = (100 / 12) * val;
    const ratio = width > 100 ? '100%' : width < 0 ? '0' : `${width}%`;
    return {
      flexGrow: 0,
      maxWidth: ratio,
      flexBasis: ratio,
    };
  }

  return {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
  };
};

export const Grid = forwardRef<GridProps, 'div'>((props, ref) => {
  const {
    css,
    sm = false,
    md = false,
    lg = false,
    xl = false,
    ...rest
  } = props;
  const classes = useMemo(() => {
    const breaks: { [key: string]: unknown } = {
      sm,
      md,
      lg,
      xl,
    };
    const classString = Object.keys(breaks).reduce((pre, name) => {
      if (breaks[name]) return `${pre} ${name}`;
      return pre;
    }, '');
    return classString.trim();
  }, [sm, md, lg, xl]);

  return (
    <GridBasic
      className={classes}
      item
      ref={ref}
      css={{
        '@sm': {
          '&.sm': {
            ...getGridLayout(sm),
          },
        },
        '@md': {
          '&.md': {
            ...getGridLayout(md),
          },
        },
        '@lg': {
          '&.lg': {
            ...getGridLayout(lg),
          },
        },
        '@xl': {
          '&.xl': {
            ...getGridLayout(xl),
          },
        },
        ...css,
      }}
      {...rest}
    />
  );
});
