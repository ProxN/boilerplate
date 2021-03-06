import { memo } from 'react';
import {
  StyledLoading,
  LoadingContainer,
  LoadingVariantProps,
} from './loading-styles';

export type LoadingProps = LoadingVariantProps;

export const Loading: React.FC<LoadingProps> = memo((props) => {
  return (
    <LoadingContainer {...props}>
      <StyledLoading
        xmlns='http://www.w3.org/2000/svg'
        width='71'
        height='71'
        viewBox='0 0 71 71'
      >
        <path
          fill='currentColor'
          d='M35.5 0c19.41 0 35.182 15.578 35.495 34.913L71 35.5h-6C65 19.208 51.792 6 35.5 6S6 19.208 6 35.5c0 16.13 12.945 29.236 29.012 29.496L35.5 65v6C15.894 71 0 55.106 0 35.5S15.894 0 35.5 0z'
        />
      </StyledLoading>
    </LoadingContainer>
  );
});
