import styled from 'styled-components';

const ObjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 223px;
  height: 220px;
  margin: 10px 0 30px 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.coolGrey};
  position: relative;
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const DateBox = styled.div`
  background-color: ${({ theme }) => theme.color.lightYellow};
  width: fit-content;
  padding: 7px 12px;
  border-radius: 21px;
  position: absolute;
  top: 1px;
  left: 22px;
  transform: rotate(-22deg);
`;
export { ObjectBox, ModalWrapper, DateBox }