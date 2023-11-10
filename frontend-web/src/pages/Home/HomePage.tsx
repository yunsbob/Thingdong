import MyRoom from '@/components/organisms/MyRoom/MyRoom';
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
import { IMAGES } from '@/constants/images';
import { changeModalOpen } from '../../utils/changeModalOpen';
import { useGetGuestbooks } from '@/apis/Guestbook/Queries/useGetGuestbooks';
import { useDeleteGuestbook } from '@/apis/Guestbook/Mutations/useDeleteGuestbook';
import { Position, Rotation } from '../../types/room';
import GuestbookModal from '@/components/organisms/GuestbookModal/GuestbookModal';

import bed_1 from './bed1.glb';
import cabinet_1 from './cabinet1.glb';
import chair_1 from './chair1.glb';
import couch_1 from './couch1.glb';
import table_1 from './table1.glb';
import clock_1 from './clock1.glb';
import painting_1 from './painting1.glb';
import { UserObject } from '../../types/room';

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

  const [myObjectList, setMyObjectList] = useState<UserObject[]>([
    {
      name: 'bed1',
      userObjectId: 1,
      objectId: 1,
      objectModelPath: bed_1,
      isWall: false,
      position: [-2, 0, 0],
      rotation: [0, 0, 0],
    },
    {
      name: 'cabinet1',
      userObjectId: 2,
      objectId: 2,
      position: [0, 0, -3],
      rotation: [0, 0, 0],
      objectModelPath: cabinet_1,
    },
    {
      name: 'chair1',
      userObjectId: 3,
      objectId: 3,
      position: [2, 0, 0],
      rotation: [0, 0, 0],
      objectModelPath: chair_1,
    },
    {
      name: 'table1',
      userObjectId: 4,
      objectId: 4,
      position: [-2, 0, 0],
      rotation: [0, 0, 0],
      objectModelPath: table_1,
    },
    {
      name: 'couch1',
      userObjectId: 5,
      objectId: 5,
      position: [4, 0, 2],
      rotation: [0, 0, 0],
      objectModelPath: couch_1,
    },
    {
      name: 'clock1',
      userObjectId: 6,
      objectId: 6,
      position: [0, 0, 2],
      rotation: [0, 0, 0],
      objectModelPath: clock_1,
      isWall: true,
    },
    {
      name: 'painting1',
      userObjectId: 7,
      objectId: 7,
      position: [2, 0, 0],
      rotation: [0, 0, 0],
      objectModelPath: painting_1,
      isWall: true,
    },
  ]);

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

  // 선택된 객체 인식
  const [selectedObjectName, setSelectedObjectName] = useState('');
  const handleObjectClick = (objectName: string) => {
    setSelectedObjectName(objectName);
  };

  // 객체 위치 변경
  const [position, setPosition] = useState<Position>([0, 0, 0]);
  const handleArrowClick = (direction: string | null) => {
    setMyObjectList(currentObjects => {
      return currentObjects.map(obj => {
        if (obj.name === selectedObjectName) {
          let [x, y, z] = obj.position;
          switch (direction) {
            case 'right':
              x += 0.75;
              break;
            case 'left':
              x -= 0.75;
              break;
            case 'up':
              z -= 0.75;
              break;
            case 'down':
              z += 0.75;
              break;
            default:
              break;
          }
          return { ...obj, position: [x, y, z] };
        }
        return obj;
      });
    });
  };

  // 객체 회전
  const [rotation, setRotation] = useState<Rotation>([0, 0, 0]);
  const handleRotationClick = () => {
    setMyObjectList(currentObjects => {
      return currentObjects.map(obj => {
        if (obj.name === selectedObjectName) {
          let [x, y, z] = obj.rotation;
          y += Math.PI * 0.5;
          return { ...obj, rotation: [x, y, z] };
        }
        return obj;
      });
    });
  };

  // 객체 인벤토리에 저장 (방에서 삭제)
  const handleRemoveClick = () => {
    setMyObjectList(currentObjects => {
      return currentObjects.filter(obj => obj.name !== selectedObjectName);
    });
  };

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
      <GuestbookModal
        isOpen={modalOpen}
        onClose={() => changeModalOpen(modalOpen, setModalOpen)}
        guestbooks={guestbooks}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleDeleteGuestbook={handleDeleteGuestbook}
      />
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
                onClick={handleRotationClick}
              />
              <Image
                src={require('@/assets/images/room/save-button.png').default}
                $unit={'px'}
                width={40}
                height={40}
                onClick={handleRemoveClick}
              />
            </S.ButtonWrapper>
          </S.BottomButtonWrapper>
        </>
      )}

      <MyRoom
        isEditing={isEditing}
        position={position}
        rotation={rotation}
        userObject={myObjectList}
        onObjectClick={handleObjectClick}
      />
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
