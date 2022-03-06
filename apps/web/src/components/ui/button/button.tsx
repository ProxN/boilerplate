import React from 'react';

import { forwardRef } from '@lib/utils/forward-ref';
import { StyledButton, ButtonVariantProps, ButtonIcon } from './button-styles';

interface Props {
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export type ButtonProps = Props & ButtonVariantProps;

const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { disabled, iconLeft, iconRight, ghost, outline, children, ...rest } =
    props;

  const hasIcon = iconLeft || iconRight;
  return (
    <StyledButton
      ref={ref}
      disabled={disabled}
      ghost={ghost}
      outline={outline || ghost}
      {...rest}
    >
      {hasIcon && React.Children.count(children) === 0 ? (
        <ButtonIcon>{hasIcon}</ButtonIcon>
      ) : (
        iconLeft && <ButtonIcon left>{iconLeft}</ButtonIcon>
      )}
      {children}
      {!hasIcon && iconRight && <ButtonIcon right>{iconRight}</ButtonIcon>}
    </StyledButton>
  );
});

export default Button;
// export const Button: React.FC<ButtonProps> = ({
//   outline,
//   disabled,
//   ghost,
//   ...rest
// }) => {
//   return (
//     <StyledButton
//       disabled={disabled}
//       ghost={ghost}
//       outline={outline || ghost}
//       {...rest}
//     />
//   );
// };
