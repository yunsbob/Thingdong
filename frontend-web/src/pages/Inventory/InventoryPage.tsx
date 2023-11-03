import { useState } from 'react';
import * as S from './InventoryPage.styles';
import InventoryButtons from '@/components/molecules/InventoryButtons/InventoryButtons';
import Header from '@/components/molecules/Header/Header';
import InventoryItem from '@/components/molecules/InventoryItem/InventoryItem';
import Thing from '@/components/molecules/Thing/Thing';
import Unboxing from '@/components/organisms/Unboxing/Unboxing';
import { useNavigate } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.style';
import { useGetInventory } from '@/apis/Inventory/Queries/useGetInventory';
import PurchaseChekModal from './Modal/PurchaseCheckModal';
import { useAtom } from 'jotai';
import { modalOpenAtom, selectedItemAtom } from '@/states/inventoryModalStates';
import { Category, InventoryItemProps, InventoryData } from '@/types/inventory';
import { useGetUserInfo } from '@/apis/User/Queries/useGetUserInfo';


const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>('가구');
  const [, setModalOpen] = useAtom(modalOpenAtom);
  const [selectedItem, setSelectedItem] = useAtom(selectedItemAtom);
  const { thingAmount } = useGetUserInfo();
  console.log(thingAmount, '띵얼마?');
  
  const { 
    furnitureList, 
    homeApplianceList, 
    propList, 
    floorList, 
    smartThingsList, 
    unBoxThingList 
  } = useGetInventory() as InventoryData;
  
  const navigate = useNavigate();

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };
  const handleItemClick = (item: InventoryItemProps) => {
    setSelectedItem(item);
    setModalOpen(true);
  };
  console.log(
    furnitureList,
    homeApplianceList,
    propList,
    floorList,
    smartThingsList,
    unBoxThingList
  );
  const renderItems = () => {
    const categoryDataMap: Record<Category, InventoryItemProps[]> = {
      '가구': furnitureList,
      '가전': homeApplianceList,
      '소품': propList,
      '바닥': floorList,
      '띵즈': smartThingsList,
      '언박띵': unBoxThingList,
    };

    return categoryDataMap[activeCategory!].map((item, index) => (
      <InventoryItem
        key={index}
        price={item.objectThing}
        isOwned={item.objectStatus === 'Y'}
        imagePath={item.objectImagePath}
        onClick={() => handleItemClick(item)}
      />
    ));
  };
  return (
    <Background>
      {selectedItem && selectedItem.objectStatus === 'N' && <PurchaseChekModal />}
      <Header text="인벤토리">
        <S.ThingBox onClick={() => navigate('/thingstory')}>
          <Thing price={thingAmount} />
        </S.ThingBox>
      </Header>
      <S.InventoryContainer>
        <InventoryButtons
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
        {activeCategory === '언박띵' ? (
          <Unboxing unBoxThingList={unBoxThingList}/>
        ) : (
          <S.InventoryItemWrapper>
            {activeCategory && renderItems()}
          </S.InventoryItemWrapper>
        )}
      </S.InventoryContainer>
    </Background>
  );
};

export default InventoryPage;
