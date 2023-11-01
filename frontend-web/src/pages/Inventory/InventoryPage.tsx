import { useState } from 'react';
import * as S from './InventoryPage.styles';
import InventoryButtons from '@/components/molecules/InventoryButtons/InventoryButtons';
import Header from '@/components/molecules/Header/Header';
import InventoryItem from '@/components/molecules/InventoryItem/InventoryItem';
import Thing from '@/components/molecules/Thing/Thing';
import Modal from '@/components/molecules/Modal/Modal';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import Button from '@/components/atoms/Button/Button';
import Unboxing from '@/components/organisms/Unboxing/Unboxing';
import { useNavigate } from 'react-router-dom';
import { Background } from '@/components/atoms/Background/Background.style';

// 임시 더미 데이터
type Category = '가구' | '가전' | '소품' | '띵구' | '띵즈' | '언박띵';

const inventoryItems = [
  { price: 10, isOwned: false, imagePath: 'chair.png' },
  { price: 100, isOwned: true, imagePath: 'chair.png' },
  { price: 40, isOwned: true, imagePath: 'chair.png' },
  { price: 50, isOwned: false, imagePath: 'chair.png' },
  { price: 70, isOwned: false, imagePath: 'chair.png' },
  { price: 20, isOwned: true, imagePath: 'chair.png' },
  { price: 10, isOwned: true, imagePath: 'chair.png' },
  { price: 5, isOwned: false, imagePath: 'chair.png' },
];

const availableThing = 1000;

const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItemImagePath, setSelectedItemImagePath] = useState<
    string | null
  >(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
    console.log('선택된 카테고리:', category);
    // console.log(CHILDREN_PATH.THINGSTORY);
  };
  const onModalClose = () => {
    setModalOpen(false);
  };
  const handleItemClick = (imagePath: string) => {
    setSelectedItemImagePath(imagePath); // 클릭된 아이템의 imagePath를 저장
    setModalOpen(true);
  };
  return (
    <Background>
      <Modal height={19.6} onClose={onModalClose} isOpen={modalOpen}>
        <Text size="body2" fontWeight="extraBold">
          선택하신 가구는 다음과 같아요!
        </Text>
        <S.ItemWrapper>
          <Image
            src={
              selectedItemImagePath
                ? require(`@/assets/images/inventory/${selectedItemImagePath}`)
                    .default
                : undefined
            }
            $unit={'px'}
            width={80}
            height={80}
          />
          <S.ThingWrapper>
            <Image
              src={require('@/assets/images/Thing/thing.png').default}
              $unit={'px'}
              width={31}
              height={31}
            />
            <Text
              size="subtitle2"
              fontWeight="extraBold"
              color="grey1"
              $marginLeft="5px"
            >
              20
            </Text>
          </S.ThingWrapper>
        </S.ItemWrapper>
        <Text size="body2" fontWeight="bold">
          구매하시겠어요?
        </Text>
        <S.ButtonWrapper>
          <Button option={'ghost'} size={'small'}>
            취소
          </Button>
          <Button option={'activated'} size={'small'}>
            확인
          </Button>
        </S.ButtonWrapper>
      </Modal>
      <Header text="인벤토리">
        <S.ThingBox onClick={() => navigate('/thingstory')}>
          <Thing price={availableThing} />
        </S.ThingBox>
      </Header>
      <S.InventoryContainer>
        {activeCategory === '언박띵' ? (
          <>
            <InventoryButtons
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
            <Unboxing />
          </>
        ) : (
          <>
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
          </>
        )}
      </S.InventoryContainer>
    </Background>
  );
};

export default InventoryPage;
