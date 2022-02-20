import { forwardRef } from '@lib/utils/forward-ref';
import { styled } from '@lib/theme';

const BoxContainer = styled('div', {});

export const Box = forwardRef((props, ref) => {
  return <BoxContainer ref={ref} {...props} />;
});
