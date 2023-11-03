import styled from 'styled-components';
import { SceneContainer } from '@/pages/Landing/LandingPage.style';

export const EnterSceneContainer = styled(SceneContainer)`
  position: static;
  transform: translate(6%, 0%) scale(111%);
`;

export const EnterButtonContainer = styled.div`
  z-index: 1;
  position: absolute;
  /* transform: scale(100%); */
  bottom: 20%;
  width: 70%;
  margin-left: 10%;
`;

export const SlideButtonWrapper = styled.section`
  padding: 3.75rem 3.75rem 0 3.75rem;
`;

export interface SlideTextWrapperProps {
  $marginBottom?: string;
}

export const SlideTextWrapper = styled.section<SlideTextWrapperProps>`
  margin-top: 22px;
  margin-bottom: ${props => props.$marginBottom || '64px'};
  text-align: center;
`;

export const SlideImageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
