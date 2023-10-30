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

export { InventoryContainer, InventoryItemWrapper };
