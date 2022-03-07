import { memo } from 'react';
import { AvatarProps as RUAvatarProps } from '@radix-ui/react-avatar';

import {
  StyledAvatar,
  StyledImage,
  StyledFallback,
  AvatarVariantProps,
} from './avatar-styles';
import { forwardRef } from '@lib/utils/forward-ref';

interface Props {
  src?: string;
  alt?: string;
  text?: string;
}

export type AvatarProps = Props & RUAvatarProps & AvatarVariantProps;

export const Avatar = memo(
  forwardRef<AvatarProps, 'span'>((props, ref) => {
    const { src, alt, text, ...rest } = props;
    return (
      <StyledAvatar ref={ref} {...rest}>
        <StyledImage src={src} alt={alt} />
        <StyledFallback>{text}</StyledFallback>
      </StyledAvatar>
    );
  })
);
