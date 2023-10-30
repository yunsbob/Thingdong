import { styled } from 'styled-components';

export interface ModalStyleProps {
  width?: number;
  height?: number;
  $borderRadius?: number;
  unit?: 'px' | 'rem' | 'em' | '%';
}

const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.color.black1};
`;

const ModalContainer = styled.div<ModalStyleProps>`
  width: ${props => `${props.width}${props.unit}`};
  height: ${props => `${props.height}${props.unit}`};
  position: relative;
  border-radius: ${props => `${props.$borderRadius}px`};
  text-align: center;
  padding: 3vh;
  background-color: ${({ theme }) => theme.color.white};
`;

export { ModalBackground, ModalContainer };
