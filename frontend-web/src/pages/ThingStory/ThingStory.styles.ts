import styled from 'styled-components';

const ThingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 29px;
  padding: 10px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadow};
`;

export { ThingContainer };
