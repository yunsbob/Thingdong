import MyRoom from '@/components/organisms/MyRoom/MyRoom';
import * as S from './Home.styles';
import { useEffect, useState } from 'react';
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
import { changeModalOpen } from '../../utils/changeModalOpen';
import { useGetGuestbooks } from '@/apis/Guestbook/Queries/useGetGuestbooks';
import { useDeleteGuestbook } from '@/apis/Guestbook/Mutations/useDeleteGuestbook';
import { Position, Rotation, ThingsObject } from '../../types/room';
import GuestbookModal from '@/components/organisms/GuestbookModal/GuestbookModal';

import bed_1 from './bed1.glb';
import cabinet_1 from './cabinet1.glb';
import chair_1 from './chair1.glb';
import couch_1 from './couch1.glb';
import table_1 from './table1.glb';
import clock_2 from './clock2.glb';
import painting_2 from './painting2.glb';
import lamp_1 from './lamp1.glb';
import { UserObject } from '../../types/room';
import { AnimatePresence, motion } from 'framer-motion';

import { useUpdateRoomPosition } from '@/apis/Room/Mutations/useUpdateRoomPosition';
import { RoomPosition, RoomState } from '@/interfaces/room';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import HeaderButtons from '@/components/molecules/HeaderButtons/HeaderButtons';
import { IMAGES } from '@/constants/images';
import { MOVE, ROTATE } from '@/constants/transformations';

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
  const nickName = localStorage.getItem('nickName') || '';
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>('가구');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedRoomColor, setSelectedRoomColor] = useState<string | null>(
    'white'
  );

  const toggleColorPicker = () => {
    setIsColorPickerOpen(!isColorPickerOpen);
  };

  const handleColorClick = (colorName: string, colorValue: string) => {
    console.log(colorName); // Or any other action
    setSelectedRoomColor(colorName);
  };

  const colors = [
    ['white', '#FFFFFF'],
    ['yellow', '#FFDCB6'],
    ['green', '#C2E1B9'],
    ['pink', '#E698A8'],
    ['puple', '#9F98E0'],
    ['black', '#545454'],
  ];
  // const colorCircles = colors.map((color, index) => (
  //   <S.ColorCircle
  //     key={color}
  //     initial={{ scale: 0 }}
  //     animate={{ scale: 1 }}
  //     exit={{ scale: 0 }}
  //     transition={{ delay: index * 0.1 }}
  //     color={color}
  //     onClick={() => handleColorClick(color)}
  //   />
  // ));

  // 임시 myObjectList
  const [myObjectList, setMyObjectList] = useState<UserObject[]>([
    {
      name: 'bed1',
      userObjectId: 1,
      objectModelPath: bed_1,
      isWall: false,
      position: [-2, 0, 2],
      rotation: [0, ROTATE * 2, 0],
    },
    {
      name: 'cabinet1',
      userObjectId: 2,
      isWall: false,
      position: [2, 0, 4],
      rotation: [0, ROTATE * 2, 0],
      objectModelPath: cabinet_1,
    },
    {
      name: 'chair1',
      userObjectId: 3,
      isWall: false,
      position: [2, 0, 0],
      rotation: [0, 0, 0],
      objectModelPath: chair_1,
    },
    {
      name: 'table1',
      userObjectId: 4,
      position: [-3, 0, -2],
      rotation: [0, ROTATE, 0],
      objectModelPath: table_1,
      isWall: false,
    },
    {
      name: 'couch1',
      userObjectId: 5,
      isWall: false,
      position: [1, 0, -2],
      rotation: [0, 0, 0],
      objectModelPath: couch_1,
    },
    {
      name: 'clock2',
      userObjectId: 6,
      isWall: true,
      position: [0, 0, 0],
      rotation: [0, ROTATE, 0],
      objectModelPath: clock_2,
    },
    {
      name: 'painting2',
      userObjectId: 7,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      objectModelPath: painting_2,
      isWall: true,
    },
  ]);

  const [myThingsList, setMyThingsList] = useState<ThingsObject[]>([
    {
      name: 'lamp1',
      deviceId: 0,
      userObjectId: 8,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      objectModelPath: lamp_1,
      isWall: false,
    },
  ]);

  // 임시 RoomState
  const [roomState, setRoomState] = useState<RoomState>({
    userObjectList: myObjectList,
    roomColor: 'pink',
    roomId: 1,
    userId: localStorage.getItem('userId') || '',
  });

  // 임시 RoomState 업데이트
  useEffect(() => {
    setRoomState(prevState => ({
      ...prevState,
      userObjectList: myObjectList,
    }));
  }, [myObjectList]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsColorPickerOpen(false);
  };

  // TODO: useState로 상태 저장
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
          if (!obj.isWall) {
            switch (direction) {
              case 'right':
                x += MOVE;
                break;
              case 'left':
                x -= MOVE;
                break;
              case 'up':
                z -= MOVE;
                break;
              case 'down':
                z += MOVE;
                break;
              default:
                break;
            }
          } else if (obj.isWall && obj.rotation[1] === 0) {
            switch (direction) {
              case 'right':
                x += MOVE;
                break;
              case 'left':
                x -= MOVE;
                break;
              case 'up':
                y += MOVE;
                break;
              case 'down':
                y -= MOVE;
                break;
              default:
                break;
            }
          } else if (obj.isWall && obj.rotation[1] !== 0) {
            switch (direction) {
              case 'right':
                z -= MOVE;
                break;
              case 'left':
                z += MOVE;
                break;
              case 'up':
                y += MOVE;
                break;
              case 'down':
                y -= MOVE;
                break;
              default:
                break;
            }
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
          if (obj.isWall === false) {
            y += ROTATE;
            return {
              ...obj,
              rotation: [x, y, z],
            };
          } else if (obj.isWall && obj.rotation[1] === 0) {
            y += ROTATE;
            return {
              ...obj,
              rotation: [x, y, z],
              position: [-obj.position[2], obj.position[1], -obj.position[0]],
            };
          } else if (obj.isWall && obj.rotation[1] !== 0) {
            y = 0;
            return {
              ...obj,
              rotation: [x, y, z],
              position: [-obj.position[2], obj.position[1], -obj.position[0]],
            };
          }
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

  const updateRoomPositionMutation = useUpdateRoomPosition();
  const updateRoomPosition = (roomPosition: RoomPosition) => {
    updateRoomPositionMutation.mutate(roomPosition);
    //TODO: 메인으로 navigate 시켜주기
  };

  // 방 상태 업데이트
  const handleUpdateRoomClick = () => {
    const objectPositionList = roomState.userObjectList.map(obj => ({
      userObjectId: obj.userObjectId,
      position: obj.position,
      rotation: obj.rotation,
    }));

    const roomPosition = {
      roomId: roomState.roomId,
      objectPositionList: objectPositionList,
    };

    console.log('here', roomPosition);
    setIsEditing(!isEditing);
    // TODO: 데이터 바인딩 후 navigating 해주기 OR isEditing 반대로
    // updateRoomPosition(roomPosition);
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
      <GuestbookModal
        isOpen={modalOpen}
        onClose={() => changeModalOpen(modalOpen, setModalOpen)}
        guestbooks={guestbooks}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleDeleteGuestbook={handleDeleteGuestbook}
      />

      {isEditing ? (
        <>
          <S.BackButtonWrapper>
            <Image
              src={IMAGES.ROOM.BACK_ICON}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleEdit}
            />
          </S.BackButtonWrapper>
          <S.ChangeRoomWrapper>
            <Image
              src={IMAGES.ROOM.EDIT_BACKGROUND_ICON}
              $unit={'px'}
              width={40}
              height={40}
              onClick={toggleColorPicker}
            />
            <AnimatePresence>
              {isColorPickerOpen && (
                <S.ColorCircleWrapper>
                  {colors.map(([colorName, colorValue], index) => (
                    <S.ColorCircle
                      key={colorName}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ delay: index * 0.1 }}
                      color={colorValue}
                      onClick={() => handleColorClick(colorName, colorValue)}
                    />
                  ))}
                </S.ColorCircleWrapper>
              )}
            </AnimatePresence>
          </S.ChangeRoomWrapper>
        </>
      ) : (
        <HeaderButtons
          isEditing={isEditing}
          handleEdit={handleEdit}
          setModalOpen={setModalOpen}
          nickName={nickName}
        />
      )}
      {isEditing && (
        <>
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
              src={require('@/assets/images/room/rotation-button.png').default}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleRotationClick}
            />
            <Image
              src={require('@/assets/images/room/save-button.png').default}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleRemoveClick}
            />
            <Image
              src={require('@/assets/images/room/save-room-button.png').default}
              $unit={'px'}
              width={40}
              height={40}
              onClick={handleUpdateRoomClick}
            />
          </S.ButtonWrapper>
        </>
      )}

      <MyRoom
        isEditing={isEditing}
        position={position}
        rotation={rotation}
        userObject={myObjectList}
        thingsObject={myThingsList}
        onObjectClick={handleObjectClick}
        selectedRoomColor={selectedRoomColor}
      />
      {isEditing && (
        <S.ItemToast
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
        </S.ItemToast>
      )}
    </>
  );
};

export default HomePage;
