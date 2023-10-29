import styled from 'styled-components';

const BottomNavContainer = styled.div`
  background-color: ${({ theme }) => theme.color.blue2};
  position: fixed;
  bottom: -5rem;
  width: 200%;
  height: 11rem;
  transform: translate(-25%, 0px);
  border-radius: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const BottomNavWrpper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  margin-top: 1.7rem;
`;

export { BottomNavContainer, BottomNavWrpper };
