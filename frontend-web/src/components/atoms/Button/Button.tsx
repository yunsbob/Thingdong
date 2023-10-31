import React, { forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import * as S from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option?: 'activated' | 'deactivated' | 'danger' | 'ghost' | 'flat';
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
  $backgroundColor?: string;
  $fontWeight?: number;
  onClick?: () => void;
  $margin?: string;
}

const Button = (
  { option, size, $backgroundColor, $fontWeight, children, onClick, $margin }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <S.Button
      ref={ref}
      option={option}
      size={size}
      $backgroundColor={$backgroundColor}
      $fontWeight={$fontWeight}
      onClick={onClick}
      $margin={$margin}
    >
      {children}
    </S.Button>
  );
};

export default forwardRef(Button);
