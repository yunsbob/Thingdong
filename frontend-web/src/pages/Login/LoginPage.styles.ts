import styled from 'styled-components'

const LoginTextWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  gap: 20px 0;
  z-index: 1;
  padding: 0 20px;
`;

export {LoginTextWrapper, LoginInputWrapper}