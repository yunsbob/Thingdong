import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

export interface TextProps {
  size?:
    | 'heading1'
    | 'heading2'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'small1'
    | 'small2';
  color?: typeof theme.color;
  width?: number;
  fontWeight?: 'regular' | 'bold' | 'extraBold' | 'heavy';
  $margin: string;
  $marginLeft?: string;
  $marginTop?: string;
}

const getSizeStyling = (size: Required<TextProps>['size'] = 'heading1') => {
  const style = {
    heading1: css`
      font-size: ${({ theme }) => theme.fontSize.heading1};
    `,
    heading2: css`
      font-size: ${({ theme }) => theme.fontSize.heading2};
    `,
    subtitle1: css`
      font-size: ${({ theme }) => theme.fontSize.subtitle1};
    `,
    subtitle2: css`
      font-size: ${({ theme }) => theme.fontSize.subtitle2};
    `,
    body1: css`
      font-size: ${({ theme }) => theme.fontSize.body1};
    `,
    body2: css`
      font-size: ${({ theme }) => theme.fontSize.body2};
    `,
    body3: css`
      font-size: ${({ theme }) => theme.fontSize.body3};
    `,
    body4: css`
      font-size: ${({ theme }) => theme.fontSize.body4};
    `,
    small1: css`
      font-size: ${({ theme }) => theme.fontSize.small1};
    `,
    small2: css`
      font-size: ${({ theme }) => theme.fontSize.small2};
    `,
  };
  return style[size];
};

const getFontWeightStyling = (weight?: TextProps['fontWeight']) => {
  switch (weight) {
    case 'regular':
      return '400';
    case 'bold':
      return '700'; // 'medium'의 경우 CSS에서 표준 값은 500
    case 'extraBold':
      return '800'; // 'light'의 경우 CSS에서 표준 값은 300
    default:
      return '900';
  }
};

const Text = styled.p<TextProps>`
  margin: ${props => props.$margin || '0'};
  margin-left: ${props => props.$marginLeft};
  margin-top: ${props => props.$marginTop};
  ${({ size = 'heading1' }) => getSizeStyling(size)};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black1)};
  font-weight: ${props => getFontWeightStyling(props.fontWeight)};
`;

export { Text, getFontWeightStyling };