import MyRoom from '@/components/molecules/MyRoom/MyRoom';
import * as S from './Home.styles';
import * as GS from '@/pages/FriendRoom/FriendRoomPage.styles';
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
import { IMAGES } from '@/constants/images';
import { changeModalOpen } from '../../utils/changeModalOpen';
import { useGetGuestbooks } from '@/apis/Guestbook/Queries/useGetGuestbooks';
import { Text } from '@/components/atoms/Text/Text.styles';
import { useDeleteGuestbook } from '@/apis/Guestbook/Mutations/useDeleteGuestbook';
// import TempScene from '@/components/organisms/TempScene/TempScene';
import { MyObject, Position } from '../../types/room';
import { myObjectsAtom } from '@/states/roomState';
import { useAtom } from 'jotai';


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
  const [position, setPosition] = useState<Position>({ x: 0, y: -25, z: 0 });
  const [myObjects, setMyObjects] = useAtom(myObjectsAtom);

  // TODO: User가 보유한 Objects와 상태 이곳에 데이터바인딩
  // isClicked가 필요할까?


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

  const handleArrowClick = (direction: string | null) => {
    if (direction === 'right') {
      setPosition(prev => ({ ...prev, x: prev.x + 10 }));
    } else if (direction === 'left') {
      setPosition(prev => ({ ...prev, x: prev.x - 10 }));
    } else if (direction === 'up') {
      setPosition(prev => ({ ...prev, z: prev.z - 10 }));
    } else if (direction === 'down') {
      setPosition(prev => ({ ...prev, z: prev.z + 10 }));
    }
  };

  // 방명록 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const userId = localStorage.getItem('userId');
  const guestbooks = useGetGuestbooks(userId!);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < (guestbooks.data?.length ?? 1) - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const deleteGuestbookMutation = useDeleteGuestbook();
  const handleDeleteGuestbook = (guestBookId: number) => {
    deleteGuestbookMutation.mutate(guestBookId);
    setCurrentIndex(0);
  };

  return (
    <>
      <GS.GuestbookModal
        isOpen={modalOpen}
        onClose={() => changeModalOpen(modalOpen, setModalOpen)}
        height="auto"
      >
        <GS.GuestbookButtonWrapper>
          <GS.ButtonWrapper
            onClick={handlePrev}
            opacity={currentIndex > 0 ? 1 : 0}
          >
            <Image src={IMAGES.FRIEND.SEARCH.BACK_WHITE_ICON} width={1} />
            <Text size="body3" color="white" fontWeight="regular">
              이전
            </Text>{' '}
          </GS.ButtonWrapper>
          <GS.ButtonWrapper
            onClick={handleNext}
            opacity={currentIndex < guestbooks.data.length - 1 ? 1 : 0}
          >
            <Text size="body3" color="white" fontWeight="regular">
              다음
            </Text>{' '}
            <Image
              src={IMAGES.FRIEND.SEARCH.BACK_WHITE_ICON}
              width={1}
              style={{ transform: 'rotate(180deg)' }}
            ></Image>
          </GS.ButtonWrapper>
        </GS.GuestbookButtonWrapper>
        <Image src={IMAGES.ROOM.GUESTBOOK} width={21} />
        <GS.WriteArea>
          <GS.ContentArea>
            {guestbooks.data?.length ? (
              <Text size="body2" fontWeight="bold" $lineHeight="1.5">
                {guestbooks.data[currentIndex].content}
              </Text>
            ) : (
              <Text
                size="body2"
                fontWeight="bold"
                $lineHeight="1.5"
                color="grey2"
              >
                작성된 방명록이 없습니다.
              </Text>
            )}
          </GS.ContentArea>
          <GS.WriterArea>
            {guestbooks.data?.length ? (
              <>
                <Text size="body4" fontWeight="regular" color="grey1">
                  {guestbooks.data[currentIndex].writeDay}
                  {'  '}
                  {guestbooks.data[currentIndex].writerName}
                </Text>
                <GS.GuestbookDelBtn
                  size="extraSmall"
                  option="danger"
                  onClick={() => {
                    handleDeleteGuestbook(
                      guestbooks.data[currentIndex].guestBookId
                    );
                  }}
                >
                  삭제
                </GS.GuestbookDelBtn>
              </>
            ) : (
              <></>
            )}
          </GS.WriterArea>
        </GS.WriteArea>
      </GS.GuestbookModal>
      {/* zIndex 임시로 1 */}
      <S.HeaderButtonWrapper style={{ zIndex: 1 }}>
        {isEditing ? (
          <>
            <Image
              src={IMAGES.ROOM.BACK_ICON}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleEdit}
            />
            <Image
              src={IMAGES.ROOM.EDIT_BACKGROUND_ICON}
              $unit={'px'}
              width={40}
              height={40}
            />
          </>
        ) : (
          <>
            <S.RoomName>{nickName}네 방</S.RoomName>
            <Image
              src={IMAGES.ROOM.EDIT_ICON}
              width={3.4}
              onClick={handleEdit}
            ></Image>
            <Image
              src={IMAGES.ROOM.GUESTBOOK_ICON}
              width={3.4}
              onClick={() => {
                setModalOpen(true);
              }}
            ></Image>
          </>
        )}
      </S.HeaderButtonWrapper>
      {isEditing && (
        <>
          <S.BottomButtonWrapper style={{ zIndex: 1 }}>
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

      <MyRoom isEditing={isEditing} position={position} />

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
