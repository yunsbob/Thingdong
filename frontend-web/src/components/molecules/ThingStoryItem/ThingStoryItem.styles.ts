import styled from 'styled-components';

const ThingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  overflow-y: auto;
  padding: 18px;
  border-radius: 22px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.shadow};
`;
const ThingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ThingLeftWrapper = styled.div`
  display: flex;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
`;
const Hr = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey4};
  margin-bottom: 20px;
  &:last-child {
    display: none;
  }
`;
export { ThingContainer, ThingWrapper, ThingLeftWrapper, TextWrapper, Hr };
