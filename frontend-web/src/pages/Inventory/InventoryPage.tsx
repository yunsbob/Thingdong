import { useState } from 'react';
import * as S from './InventoryPage.styles';
import InventoryButtons from '@/components/molecules/InventoryButtons/InventoryButtons';
import Header from '@/components/molecules/Header/Header';
import InventoryItem from '@/components/molecules/InventoryItem/InventoryItem';
import Thing from '@/components/molecules/Thing/Thing';
import Modal from '@/components/molecules/Modal/Modal';
import { Text } from '@/components/atoms/Text/Text.styles';
import styled from 'styled-components';
import { Image } from '@/components/atoms/Image/Image';

// 임시 더미 데이터
type Category = '가구' | '가전' | '소품' | '띵구' | '띵즈' | '언박띵';

const inventoryItems = [
  { price: 10, isOwned: false, imagePath: 'face-blue.png' },
  { price: 100, isOwned: true, imagePath: 'face-blue.png' },
  { price: 40, isOwned: true, imagePath: 'face-blue.png' },
  { price: 50, isOwned: false, imagePath: 'face-blue.png' },
  { price: 70, isOwned: false, imagePath: 'face-blue.png' },
  { price: 20, isOwned: true, imagePath: 'face-blue.png' },
  { price: 10, isOwned: true, imagePath: 'face-blue.png' },
  { price: 5, isOwned: false, imagePath: 'face-blue.png' },
];

const availableThing = 1000;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
const ThingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;
const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItemImagePath, setSelectedItemImagePath] = useState<
    string | null
  >(null);

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    console.log('선택된 카테고리:', category);
  };
  const onModalClose = () => {
    setModalOpen(false);
  };
  const handleItemClick = (imagePath: string) => {
    setSelectedItemImagePath(imagePath); // 클릭된 아이템의 imagePath를 저장
    setModalOpen(true);
  };
  return (
    <>
      <Modal height={19.6} onClose={onModalClose} isOpen={modalOpen}>
        <Text size="body2" fontWeight="extraBold">
          선택하신 가구는 다음과 같아요!
        </Text>
        <ItemWrapper>
          <Image
            src={
              selectedItemImagePath
                ? require(`@/assets/images/friend/${selectedItemImagePath}`)
                    .default
                : undefined
            }
            $unit={'px'}
            width={80}
            height={80}
          />
          <ThingWrapper>
            <Image
              src={require('@/assets/images/Thing/thing.png').default}
              $unit={'px'}
              width={31}
              height={31}
            />
            <Text
              size="subtitle1"
              fontWeight="extraBold"
              color="grey1"
              $marginLeft="5px"
            >
              20
            </Text>
          </ThingWrapper>
        </ItemWrapper>
      </Modal>
      <S.InventoryContainer>
        <Header text="인벤토리">
          <Thing price={availableThing} />
        </Header>
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
              onClick={() => handleItemClick(item.imagePath)}
            />
          ))}
        </S.InventoryItemWrapper>
      </S.InventoryContainer>
    </>
  );
};

export default InventoryPage;
