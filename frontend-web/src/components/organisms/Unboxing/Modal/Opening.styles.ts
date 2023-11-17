import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(8deg); }
  100% { transform: rotate(0deg); }
`;
export const ImageWrapper = styled.div`
  animation: ${shake} 0.5s infinite;
`;

