import React, { forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import * as S from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option?: 'activated' | 'deactivated' | 'danger' | 'ghost' | 'flat';
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
  $backgroundColor?: string;
  $fontWeight?: number;
  $margin?: string;
  $color?: string;
  onClick? : () => void;
}

const Button = (
  {
    option,
    size,
    $backgroundColor,
    $fontWeight,
    children,
    $margin,
    $color,
    onClick
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <S.Button
      ref={ref}
      option={option}
      size={size}
      $backgroundColor={$backgroundColor}
      $fontWeight={$fontWeight}
      $margin={$margin}
      $color={$color}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};

export default forwardRef(Button);
