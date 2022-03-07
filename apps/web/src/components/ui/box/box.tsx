import { memo } from 'react';

import { forwardRef } from '@lib/utils/forward-ref';
import { styled } from '@lib/theme';

const BoxContainer = styled('div', {});

export const Box = memo(
  forwardRef((props, ref) => {
    return <BoxContainer ref={ref} {...props} />;
  })
);
