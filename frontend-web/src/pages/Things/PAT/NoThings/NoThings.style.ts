import styled from 'styled-components';

const GreyDotWrapper = styled.div`
  border-radius: 21px;
  border: 2px dashed ${({ theme }) => theme.color.grey3};
  background-color: ${({ theme }) => theme.color.white2};
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export { GreyDotWrapper };
