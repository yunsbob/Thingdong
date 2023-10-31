import styled from 'styled-components';

const ThingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadow};
`;

export { ThingContainer };
