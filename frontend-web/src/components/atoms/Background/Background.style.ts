import theme from '@/styles/theme';
import styled from 'styled-components';

interface BackgroundProps {
  $backgroundColor?: typeof theme.color;
}

const Background = styled.div<BackgroundProps>`
  background-color: ${props => (props.$backgroundColor ? props.$backgroundColor : props.theme.color.coolGrey)};
  width: 100vw;
  height: 100vh;
`;

export { Background };
