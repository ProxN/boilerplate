import { forwardRef } from '@lib/utils/forward-ref';
import { useMemo } from 'react';
import { GridBasic, GridBasicVariantsProps } from './grid-styles';

interface Props {
  gap?: number;
}

export type GridContainerProps = Props & GridBasicVariantsProps;

export const GridContainer = forwardRef<GridContainerProps, 'div'>(
  (props, ref) => {
    const { css, gap = 0, ...rest } = props;

    const gapUnit = useMemo(() => {
      return `calc(${gap} * $space$4)`;
    }, [gap]);

    return (
      <GridBasic
        ref={ref}
        container='true'
        css={{
          $$gridGap: gapUnit,
          ...css,
        }}
        {...rest}
      />
    );
  }
);
