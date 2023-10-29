import styled from "styled-components";
import InventoryButton from "@/components/atoms/InventoryButton/InventoryButton";

const Container = styled.div`

`;

const InventoryPage = () => {
  return (
    <Container>
      <InventoryButton option={'activated'} size={'medium'}>
        가구
      </InventoryButton>
    </Container>
  );
};

export default InventoryPage;
