import styled, { css } from 'styled-components';
import { InventoryButtonProps } from './InventoryButton';

const getOptionStyling = (option: Required<InventoryButtonProps>['option']) => {
  const styles = {
    activated: css`
      background: ${({ theme }) => theme.color.lightYellow};
      color: ${({ theme }) => theme.color.grey1};
    `,
    deactivated: css`
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.grey1};
    `,
  };

  return styles[option] || styles.activated;
};

const getSizeStyling = (size: Required<InventoryButtonProps>['size']) => {
  const styles = {
    large: css`
      height: 76px;
      border-radius: 30px;
      font-size: ${({ theme }) => theme.fontSize.subtitle2};
    `,
    medium: css`
      width: 49px;
      height: 49px;
      border-radius: 50%;
      font-size: ${({ theme }) => theme.fontSize.small1};
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

  return styles[size] || styles.medium;
};

const InventoryButton = styled.button<InventoryButtonProps>`
  width: 100%;
  text-align: center;
  border-radius: 50%;
  color: white;
  font-family: 'NanumSquareNeo';
  font-weight: 700;
  ${({ size = 'medium' }) => getSizeStyling(size)};
  ${({ option = 'deactivated'}) => getOptionStyling(option)};
  background-color: ${props => props.$backgroundColor};
`;

export { InventoryButton };