import * as React from 'react';
import { CSS } from '@lib/theme';
import { ComponentWithAs, ExtendableProps, As, PropsOf } from './types';

export const forwardRef = <P extends object, C extends React.ElementType>(
  component: React.ForwardRefRenderFunction<
    any,
    ExtendableProps<PropsOf<C>, P> & {
      as?: As;
      css?: CSS;
    }
  >
) => {
  // prettier-ignore
  return (React.forwardRef(component) as unknown) as ComponentWithAs<P, C>;
};
