import { useState } from 'react';
import styled from "styled-components";
import InventoryButtons from "@/components/molecules/InventoryButtons/InventoryButtons";


type Category = '가구' | '가전' | '소품' | '띵구' | '띵즈' | '언박띵';

const InventoryContainer = styled.div`
  padding: 0 26px;
`;
console.log("InventoryPage 렌더링");
const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    console.log("선택된 카테고리:", category);
  };
  return (
    <InventoryContainer>
      <InventoryButtons activeCategory={activeCategory} onCategoryClick={handleCategoryClick}/>
    </InventoryContainer>
  );
};

export default InventoryPage;
