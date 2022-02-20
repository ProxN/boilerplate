import { forwardRef } from '@lib/utils/forward-ref';
import {
  Wrap,
  AlignItems,
  Direction,
  Justify,
  alignContent,
} from '@lib/utils/types';
import { Box } from '../box';

export type FlexProps = {
  alignItems?: AlignItems;
  justify?: Justify;
  direction?: Direction;
  wrap?: Wrap;
  alignContent?: alignContent;
};

export const Flex = forwardRef<FlexProps, 'div'>((props, ref) => {
  const {
    alignItems,
    alignContent,
    justify,
    direction = 'row',
    wrap = 'wrap',
    css,
    ...rest
  } = props;
  return (
    <Box
      ref={ref}
      css={{
        display: 'flex',
        alignItems,
        alignContent,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        ...css,
      }}
      {...rest}
    />
  );
});
