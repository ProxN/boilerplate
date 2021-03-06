import { forwardRef } from '@lib/utils/forward-ref';
import { AlignItems } from '@lib/utils/types';
import { memo } from 'react';
import { StyledSpace, SpaceVariantsProps } from './space-styles';

interface Props {
  alignItems?: AlignItems;
}

export type SpaceProps = Props & SpaceVariantsProps;

export const Space = memo(
  forwardRef<SpaceProps, 'div'>((props, ref) => {
    const { alignItems = 'flex-start', css, ...rest } = props;
    return <StyledSpace ref={ref} css={{ alignItems, ...css }} {...rest} />;
  })
);
