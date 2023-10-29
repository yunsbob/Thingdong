import React, { ChangeEvent } from 'react';
import * as S from './Input.styles';

export interface InputProps {
  option?: 'default' | 'grey';
  size?: 'medium' | 'small';
  $borderRadius?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (
  { option, size, $borderRadius, onChange }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <S.Input
      ref={ref}
      option={option}
      size={size}
      $borderRadius={$borderRadius}
      onChange={onChange}
    ></S.Input>
  );
};

export default React.forwardRef(Input);