import React, { ChangeEvent } from 'react';
import * as S from './Input.styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  option?: 'default' | 'grey';
  inputSize?: 'medium' | 'small';
  $borderRadius?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (
  { option, inputSize, $borderRadius, onChange }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>
) => {
  return (
    <S.Input
      ref={ref}
      option={option}
      inputSize={inputSize}
      $borderRadius={$borderRadius}
      onChange={onChange}
    ></S.Input>
  );
};

export default React.forwardRef(Input);