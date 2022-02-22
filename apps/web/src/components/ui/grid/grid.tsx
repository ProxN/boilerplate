import { useMemo } from 'react';
import classNames from 'classnames';

import { forwardRef } from '@lib/utils/forward-ref';
import { Wrap, AlignItems, Justify, Direction } from '@lib/utils/types';
import { GridBasic, GridBasicVariantsProps } from './grid-styles';

interface Props {
  gap?: number;
  wrap?: Wrap;
  direction?: Direction;
  justify?: Justify;
  alignItems?: AlignItems;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
  xxl?: number | boolean;
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
    gap = 1,
    sm = false,
    md = false,
    lg = false,
    xl = false,
    xxl = false,
    alignItems = 'flex-start',
    justify = 'flex-start',
    direction = 'row',
    wrap = 'wrap',
    item,
    container,
    ...rest
  } = props;

  const classes = useMemo(() => {
    return classNames({ container, item, sm, md, lg, xl, xxl });
  }, [container, item, sm, md, lg, xl, xxl]);

  const gapUnit = useMemo(() => {
    return `calc(${gap} * $space$4)`;
  }, [gap]);

  return (
    <GridBasic
      className={classes}
      ref={ref}
      css={{
        '&.container': {
          $$gridGap: gapUnit,
          flexWrap: wrap,
          justifyContent: justify,
          alignItems: alignItems,
          flexDirection: direction,
        },
        '&.item': {
          ...getGridLayout(sm),
        },
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
        '@xxl': {
          '&.xxl': {
            ...getGridLayout(xxl),
          },
        },
        ...css,
      }}
      item={item}
      container={container}
      {...rest}
    />
  );
});
