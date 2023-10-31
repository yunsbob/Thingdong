import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const getOptionStyling = (option: Required<ButtonProps>['option']) => {
  const styles = {
    activated: css`
      background: ${({ theme }) => theme.color.blue};
    `,
    deactivated: css`
      background: ${({ theme }) => theme.color.grey4};
      color: ${({ theme }) => theme.color.grey2};
    `,
    danger: css`
      background: ${({ theme }) => theme.color.danger};
    `,
    ghost: css`
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.blue};
      border: 0.1em solid;
      border-color: ${({ theme }) => theme.color.blue};
    `,
    flat: css`
      background: none;
      color: ${({ theme }) => theme.color.blue};
    `,
  };

  return styles[option] || styles.activated;
};

const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const styles = {
    large: css`
      height: 76px;
      border-radius: 30px;
      font-size: ${({ theme }) => theme.fontSize.subtitle2};
    `,
    medium: css`
      height: 60px;
      font-size: ${({ theme }) => theme.fontSize.body2};
    `,
    small: css`
      height: 56px;
      font-size: ${({ theme }) => theme.fontSize.body3};
    `,
    extraSmall: css`
      height: 42px;
      font-size: ${({ theme }) => theme.fontSize.body3};
      border-radius: 15px;
    `,
  };

  return styles[size] || styles.large;
};

const Button = styled.button<ButtonProps>`
  width: 100%;
  text-align: center;
  border-radius: 21px;
  color: white;
  font-family: 'NanumSquareNeo';
  font-weight: 800;
  ${({ size = 'large' }) => getSizeStyling(size)};
  ${({ option = 'activated' }) => getOptionStyling(option)};
  background-color: ${props => props.$backgroundColor};
  margin: ${props => props.$margin || '0'};
`;

export { Button };
