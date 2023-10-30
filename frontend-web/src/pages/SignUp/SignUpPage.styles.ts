import styled from 'styled-components';

const SignUpEllipse = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 803px;
  background: linear-gradient(180deg, #fff1b6 0%, rgba(255, 255, 255, 0) 100%);
  position: absolute;
  left: -50%;
  top: 40%;
`;

const SignUpTextWrapper = styled.div`
    /* border: 1px solid; */
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SignUpInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2.6;
    gap: 20px 0;
    /* border: 1px solid; */
    z-index: 1;
    padding: 0 20px;
    
`

export { SignUpEllipse, SignUpTextWrapper, SignUpInputWrapper };
