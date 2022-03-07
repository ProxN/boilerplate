import React, { memo } from 'react';

import { forwardRef } from '@lib/utils/forward-ref';
import {
  StyledButton,
  ButtonVariantProps,
  ButtonIcon,
  ButtonText,
} from './button-styles';
import { Loading } from '../loading';

interface Props {
  disabled?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
}

export type ButtonProps = Props & ButtonVariantProps;

export const Button = memo(
  forwardRef<ButtonProps, 'button'>((props, ref) => {
    const {
      disabled,
      icon,
      color,
      auto,
      iconRight,
      ghost,
      outline,
      children,
      loading = false,
      ...rest
    } = props;

    const hasIcon = icon || iconRight;
    return (
      <StyledButton
        ref={ref}
        color={color}
        disabled={disabled}
        ghost={ghost}
        outline={outline || ghost}
        auto={auto}
        {...rest}
      >
        {loading ? (
          <Loading color={outline || ghost ? color : 'white'} size='xs' />
        ) : hasIcon && React.Children.count(children) === 0 ? (
          <ButtonIcon auto={auto} single>
            {hasIcon}
          </ButtonIcon>
        ) : hasIcon ? (
          <>
            <ButtonIcon auto={auto} right={!!iconRight}>
              {hasIcon}
            </ButtonIcon>
            <ButtonText>{children}</ButtonText>
          </>
        ) : (
          children
        )}
      </StyledButton>
    );
  })
);
