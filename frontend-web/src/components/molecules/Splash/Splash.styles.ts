import styled from 'styled-components';

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