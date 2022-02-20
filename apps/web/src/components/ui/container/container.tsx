import { forwardRef } from '@lib/utils/forward-ref';
import { StyledContainer, ContainerVairantsProps } from './container-styles';

export type ContainerProps = ContainerVairantsProps;

export const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  return <StyledContainer {...props} ref={ref} />;
});
