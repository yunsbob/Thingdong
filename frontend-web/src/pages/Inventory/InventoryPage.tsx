import { useState } from 'react';
import * as S from './InventoryPage.styles';
import InventoryButtons from "@/components/molecules/InventoryButtons/InventoryButtons";
import Header from '@/components/molecules/Header/Header';


type Category = '가구' | '가전' | '소품' | '띵구' | '띵즈' | '언박띵';


console.log("InventoryPage 렌더링");
const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    console.log("선택된 카테고리:", category);
  };
  return (
    <S.InventoryContainer>
      <Header text="인벤토리"></Header>
      <InventoryButtons activeCategory={activeCategory} onCategoryClick={handleCategoryClick}/>
    </S.InventoryContainer>
  );
};

export default InventoryPage;
