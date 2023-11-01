import { styled } from 'styled-components';

export interface ModalStyleProps {
  width?: number;
  height?: number;
  $borderRadius?: number;
  $padding?: number;
  unit?: 'px' | 'rem' | 'em' | '%';
}

const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
`;

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
  opacity: 0.5;
`;

const ModalContainer = styled.div<ModalStyleProps>`
  width: ${props => `${props.width}${props.unit}`};
  height: ${props => `${props.height}${props.unit}`};
  position: relative;
  border-radius: ${props => `${props.$borderRadius}px`};
  text-align: center;
  padding: ${props =>
    props.$padding ? `${props.$padding}${props.unit}` : '36px'};
  margin: 0 28px;
  background-color: ${({ theme }) => theme.color.white};
`;

export { ModalBackground, ModalContainer, ModalWrapper };
