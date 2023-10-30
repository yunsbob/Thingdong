import styled from 'styled-components';

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InventoryItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 4vw;
  margin-top: 15px;
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 20px;
`;
export { InventoryContainer, InventoryItemWrapper, ItemWrapper, ThingWrapper, ButtonWrapper };
