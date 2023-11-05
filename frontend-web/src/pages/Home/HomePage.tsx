import MyRoomScene from '@/components/molecules/MyRoom/MyRoom';
import * as S from './Home.styles';
import { useState } from 'react';
import { Image } from '@/components/atoms/Image/Image';
import { useGetRoomInventory } from '@/apis/Room/Queries/useGetRoomInventory';
import {
  Category,
  RoomInventoryData,
  RoomInventoryItemProps,
} from '@/types/inventory';
import * as SS from '@/pages/Inventory/InventoryPage.styles';
import InventoryButtons from '@/components/molecules/InventoryButtons/InventoryButtons';
import RoomInventoryItem from '@/components/molecules/RoomInventoryItem/RoomInventoryItem';

const toastVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.7,
    },
  },
};

const HomePage = () => {
  const nickName = localStorage.getItem('nickName');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>('가구');
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const {
    furnitureList,
    homeApplianceList,
    propList,
    floorList,
    smartThingsList,
    unBoxThingList,
  } = useGetRoomInventory() as RoomInventoryData;

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };

  const renderItems = () => {
    const categoryDataMap: Record<Category, RoomInventoryItemProps[]> = {
      가구: furnitureList,
      가전: homeApplianceList,
      소품: propList,
      바닥: floorList,
      띵즈: smartThingsList,
      언박띵: unBoxThingList,
    };

    return categoryDataMap[activeCategory!].map(item => (
      <RoomInventoryItem
        key={item.userObjectId}
        isOwned={item.objectStatus === 'Y'}
        imagePath={item.objectImagePath}
        $isRoom={'Y'}
      />
    ));
  };
  const arrowButtons = [
    { src: 'empty-button.png', direction: null },
    { src: 'up-button.png', direction: 'up' },
    { src: 'empty-button.png', direction: null },
    { src: 'left-button.png', direction: 'left' },
    { src: 'down-button.png', direction: 'down' },
    { src: 'right-button.png', direction: 'right' },
  ];
  // 임시 방향 확인
  const handleArrowClick = (direction: string | null) => {
    if (direction) {
      console.log(direction);
    }
  };

  return (
    <>
      <S.HeaderButtonWrapper>
        {isEditing ? (
          <>
            <Image
              src={require('@/assets/images/room/back.png').default}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleEdit}
            />
              <Image
                src={
                  require('@/assets/images/room/edit-background.png').default
                }
                $unit={'px'}
                width={40}
                height={40}
              />
          </>
        ) : (
          <>
            <S.RoomName>{nickName}네 방</S.RoomName>
            <S.EditButton onClick={handleEdit}>수정</S.EditButton>
          </>
        )}
      </S.HeaderButtonWrapper>
      {isEditing && (
        <>
          <S.BottomButtonWrapper>
            <S.ArrowKeyWrapper>
              {arrowButtons.map((button, index) => {
                const imagePath = require(
                  `@/assets/images/room/${button.src}`
                ).default;
                return (
                  <Image
                    key={button.src + index}
                    src={imagePath}
                    $unit={'px'}
                    width={40}
                    height={40}
                    onClick={() => handleArrowClick(button.direction)}
                    style={{
                      visibility: button.direction ? 'visible' : 'hidden',
                    }}
                  />
                );
              })}
            </S.ArrowKeyWrapper>
            <S.ButtonWrapper>
              <Image
                src={
                  require('@/assets/images/room/rotation-button.png').default
                }
                $unit={'px'}
                width={40}
                height={40}
                $margin="0 10px 0 0"
              />
              <Image
                src={require('@/assets/images/room/save-button.png').default}
                $unit={'px'}
                width={40}
                height={40}
              />
            </S.ButtonWrapper>
          </S.BottomButtonWrapper>
        </>
      )}
      <MyRoomScene isEditing={isEditing} />
      {isEditing && (
        <S.TempToast
          variants={toastVariants}
          initial="hidden"
          animate="visible"
        >
          <SS.InventoryContainer>
            <InventoryButtons
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
              $isRoom={'Y'}
            />
            <SS.InventoryItemWrapper>
              {activeCategory && renderItems()}
            </SS.InventoryItemWrapper>
          </SS.InventoryContainer>
        </S.TempToast>
      )}
    </>
  );
};

export default HomePage;
