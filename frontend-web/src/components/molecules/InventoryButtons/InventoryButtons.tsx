import { InventoryButtonContainer } from './InventortyButtons.styles';
import InventoryButton from '@/components/atoms/InventoryButton/InventoryButton';
import React from 'react';

type Category = '가구' | '가전' | '소품' | '바닥' | '띵즈' | '언박띵';

type InventoryButtonsProps = {
  activeCategory: Category | null;
  onCategoryClick: (category: Category) => void;
};

const categories = ['가구', '가전', '소품', '바닥', '띵즈', '언박띵'] as const;

const InventoryButtons: React.FC<InventoryButtonsProps> = ({ activeCategory, onCategoryClick }) => {
  return (
    <InventoryButtonContainer>
      {categories.map((category) => (
        <InventoryButton 
          key={category}
          onClick={() => onCategoryClick(category as Category)}
          option={activeCategory === category ? 'activated' : 'deactivated'}
        >
          {category}
        </InventoryButton>
      ))}
    </InventoryButtonContainer>
  );
};

export default InventoryButtons;