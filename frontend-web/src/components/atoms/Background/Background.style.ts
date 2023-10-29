import { TextProps } from '@/components/atoms/Text/Text.styles';
import theme from '@/styles/theme';
import styled from 'styled-components';

interface BackgroundProps extends TextProps {
  $backgroundColor?: typeof theme.color;
}

const Background = styled.div<BackgroundProps>`
  background-color: ${props =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.theme.color.coolGrey};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.3rem;
`;

export { Background };
