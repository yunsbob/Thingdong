import React, { forwardRef } from 'react';
import type { ForwardedRef } from 'react';
import * as S from './InventoryButton.styles';

export interface InventoryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option?: 'activated' | 'deactivated';
  size?: 'large' | 'medium' | 'small' | 'extraSmall';
  $backgroundColor?: string;
  $fontWeight?: number;
}

const InventoryButton = (
  { option, size, $backgroundColor, $fontWeight, children }: InventoryButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <S.InventoryButton
      ref={ref}
      option={option}
      size={size}
      $backgroundColor={$backgroundColor}
      $fontWeight={$fontWeight}
    >
      {children}
    </S.InventoryButton>
  );
};

export default forwardRef(InventoryButton);
