import { useState } from 'react';
import * as S from './InventoryPage.styles';
import InventoryButtons from '@/components/molecules/InventoryButtons/InventoryButtons';
import Header from '@/components/molecules/Header/Header';
import InventoryItem from '@/components/molecules/InventoryItem/InventoryItem';

type Category = '가구' | '가전' | '소품' | '띵구' | '띵즈' | '언박띵';

const inventoryItems = [
  { price: '10', isOwned: false, imagePath: 'face-blue.png' },
  { price: '100', isOwned: true, imagePath: 'face-blue.png' },
  { price: '40', isOwned: true, imagePath: 'face-blue.png' },
  { price: '50', isOwned: false, imagePath: 'face-blue.png' },
  { price: '70', isOwned: false, imagePath: 'face-blue.png' },
  { price: '20', isOwned: true, imagePath: 'face-blue.png' },
  { price: '10', isOwned: true, imagePath: 'face-blue.png' },
  { price: '5', isOwned: false, imagePath: 'face-blue.png' },
];

console.log('InventoryPage 렌더링');
const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    console.log('선택된 카테고리:', category);
  };
  return (
    <S.InventoryContainer>
      <Header text="인벤토리" />
      <InventoryButtons
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <S.InventoryItemWrapper>
        {inventoryItems.map((item, index) => (
          <InventoryItem
            key={index}
            price={item.price}
            isOwned={item.isOwned}
            imagePath={item.imagePath}
          />
        ))}
      </S.InventoryItemWrapper>
    </S.InventoryContainer>
  );
};

export default InventoryPage;
