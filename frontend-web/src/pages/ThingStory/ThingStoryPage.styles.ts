import styled from 'styled-components';

const ThingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  width: 212px;
  height: 65px;
  padding: 10px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.white};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const BackButtonWrapper = styled.div`
  margin-bottom: 1rem;
  margin-right: 1rem;
`;
const ThingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export { ThingContainer, HeaderWrapper, BackButtonWrapper, ThingWrapper };
