import styled from 'styled-components';

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InventoryItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 4vw;
  margin-top: 20px;
  overflow-y: auto;
  height: 65%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
const ThingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;
const ThingBox = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 18px;
  margin-top: 20px;
`;
export {
  InventoryContainer,
  InventoryItemWrapper,
  ItemWrapper,
  ThingWrapper,
  ButtonWrapper,
  ThingBox,
};
