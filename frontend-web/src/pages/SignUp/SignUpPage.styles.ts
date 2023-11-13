import styled from 'styled-components';

const Ellipse = styled.div`
  width: 200%;
  height: 125%;
  border-radius: 100%;
  background: linear-gradient(180deg, #fff1b6 0%, rgba(255, 255, 255, 0) 100%);
  position: absolute;
  left: -50%;
  top: 40%;
`;

const SignUpTextWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2.6;
  gap: 20px 0;
  z-index: 1;
  padding: 0 20px;
  
`;

const ErrorMassegeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
`;
export { Ellipse, SignUpTextWrapper, SignUpInputWrapper, ErrorMassegeWrapper };
