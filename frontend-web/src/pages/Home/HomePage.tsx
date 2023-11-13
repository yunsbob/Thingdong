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

import { useUpdateRoomPosition } from '@/apis/Room/Mutations/useUpdateRoomPosition';
import { ObjectPosition, RoomPosition, RoomState } from '@/interfaces/room';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import HeaderButtons from '@/components/molecules/HeaderButtons/HeaderButtons';
import { AnimatePresence, motion } from 'framer-motion';
import { IMAGES } from '@/constants/images';
import { MOVE, ROTATE } from '@/constants/transformations';

import { useGetRoom } from '@/apis/Room/Queries/useGetRoom';
import { roomInventoryAtom } from '@/states/roomInventoryStates';
import { useAtom } from 'jotai';
import { useUpdateRoomColor } from '@/apis/Room/Mutations/useUpdateRoomColor';

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
  const userId = localStorage.getItem('userId') || '';
  const nickName = localStorage.getItem('nickName') || '';
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>('가구');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [roomInventory, setRoomInventory] = useAtom(roomInventoryAtom);
  const roomState = useGetRoom(userId); // Fetching real data using the custom hook
  const [selectedRoomColor, setSelectedRoomColor] = useState(roomState.roomColor);
  // const [selectedRoomColor, setSelectedRoomColor] = useState('white');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const toggleColorPicker = () => {
    setIsColorPickerOpen(!isColorPickerOpen);
  };
  const updateRoomColorMutation = useUpdateRoomColor();
  const handleColorClick = (colorName: string, colorValue: string, colorPath: string) => {
    setSelectedRoomColor(colorPath);
    const roomColorData = {
      roomId: roomState.roomId,
      roomColor: colorName
    }
    updateRoomColorMutation.mutate(roomColorData)
  };

  const colors = [
    ['white', '#FFFFFF', "https://thingdong.com/resources/glb/room/room-white.glb"],
    ['yellow', '#FFDCB6', "https://thingdong.com/resources/glb/room/room_yellow.glb"],
    ['green', '#C2E1B9', "https://thingdong.com/resources/glb/room/room_green.glb"],
    ['pink', '#E698A8', "https://thingdong.com/resources/glb/room/room-pink.glb"],
    ['purple', '#9F98E0', "https://thingdong.com/resources/glb/room/room-puple.glb"],
    ['black', '#545454', "https://thingdong.com/resources/glb/room/room_black.glb"],
  ];

  // 이동 & 회전 단위
  const MOVE = 0.75;
  const ROTATE = Math.PI * 0.5;

  // 찐 userObjectList

  // const [myObjectList, setMyObjectList] = useState<UserObject[]>(roomState.myObjectList)
  const [myObjectList, setMyObjectList] = useState<UserObject[]>(
    roomState && roomState.myObjectList ? roomState.myObjectList : []
  );
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

  useEffect(() => {
    setRoomInventory({
      furnitureList: furnitureList || [],
      homeApplianceList: homeApplianceList || [],
      propList: propList || [],
      floorList: floorList || [],
      smartThingsList: smartThingsList || [],
      unBoxThingList: unBoxThingList || [],
    })
  }, [furnitureList, homeApplianceList, propList, floorList, smartThingsList, unBoxThingList]);
console.log(roomInventory, 'roominventory');

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };
  const handleItemClick = (selectedItemId: number) => {
    let updatedInventory = {...roomInventory};
    setSelectedItemId(selectedItemId);
  
    const updateObjectStatus = (list: RoomInventoryItemProps[]): RoomInventoryItemProps[] => list.map(item => {
      if (item.userObjectId === selectedItemId) {
        return {...item, objectStatus: 'Y'};
      }
      return item;
    });

    updatedInventory.furnitureList = updateObjectStatus(updatedInventory.furnitureList);
    updatedInventory.homeApplianceList = updateObjectStatus(updatedInventory.homeApplianceList);
    updatedInventory.propList = updateObjectStatus(updatedInventory.propList);
    updatedInventory.floorList = updateObjectStatus(updatedInventory.floorList);
    updatedInventory.smartThingsList = updateObjectStatus(updatedInventory.smartThingsList);
    updatedInventory.unBoxThingList = updateObjectStatus(updatedInventory.unBoxThingList);
  
    setRoomInventory(updatedInventory);
  
    const allUpdatedObjects = [
      ...updatedInventory.furnitureList,
      ...updatedInventory.homeApplianceList,
      ...updatedInventory.propList,
      ...updatedInventory.floorList,
      ...updatedInventory.smartThingsList,
      ...updatedInventory.unBoxThingList,
    ];
    const clickedItem = allUpdatedObjects.find(item => item.userObjectId === selectedItemId);

  if (clickedItem) {
    // 아이템이 이미 myObjectList에 있는지 확인
    const isItemAlreadyInList = myObjectList.some(item => item.userObjectId === selectedItemId);

    if (!isItemAlreadyInList) {
      const newUserObject: UserObject = {
        name: clickedItem.name,
        userObjectId: clickedItem.userObjectId,
        objectModelPath: clickedItem.objectModelPath,
        isWall: clickedItem.isWall,
        position: [0, 0, 0],
        rotation: [0, 0, 0],
      };

      setMyObjectList(prevList => [...prevList, newUserObject]);
    }
  }
};
  const renderItems = () => {
    const categoryDataMap: Record<Category, RoomInventoryItemProps[]> = {
      가구: roomInventory.furnitureList || [],
      가전: roomInventory.homeApplianceList || [],
      소품: roomInventory.propList || [],
      바닥: roomInventory.floorList || [],
      띵즈: roomInventory.smartThingsList || [],
      언박띵: roomInventory.unBoxThingList || [],
    };

    return categoryDataMap[activeCategory!]?.map(item => (
      <RoomInventoryItem
        key={item.userObjectId}
        isOwned={item.objectStatus === 'N'}
        imagePath={item.objectImagePath}
        $isRoom={'Y'}
        onClick={() => handleItemClick(item.userObjectId)}
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
      if (currentObjects.length === 0) {
        return currentObjects;
      }
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
      if (currentObjects.length === 0) {
        return currentObjects;
      }
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
    if (selectedItemId == null) return;

    setMyObjectList(currentObjects => {
      return currentObjects.filter(obj => obj.name !== selectedObjectName);
    });
    let updatedInventory = {...roomInventory};

  // 각 인벤토리 리스트에서 해당 아이템의 상태를 'N'으로 변경
  const updateObjectStatus = (list: RoomInventoryItemProps[]): RoomInventoryItemProps[] => 
    list.map(item => item.name === selectedObjectName ? {...item, objectStatus: 'N'} : item);

  updatedInventory.furnitureList = updateObjectStatus(updatedInventory.furnitureList);
  updatedInventory.homeApplianceList = updateObjectStatus(updatedInventory.homeApplianceList);
  updatedInventory.propList = updateObjectStatus(updatedInventory.propList);
  updatedInventory.floorList = updateObjectStatus(updatedInventory.floorList);
  updatedInventory.smartThingsList = updateObjectStatus(updatedInventory.smartThingsList);
  updatedInventory.unBoxThingList = updateObjectStatus(updatedInventory.unBoxThingList);

  setRoomInventory(updatedInventory);
  };

  const updateRoomPositionMutation = useUpdateRoomPosition();
  const updateRoomPosition = (roomPosition: RoomPosition) => {
    updateRoomPositionMutation.mutate(roomPosition);
    //TODO: 메인으로 navigate 시켜주기
  };

  // 방 상태 업데이트
  const handleUpdateRoomClick = () => {
    const objectPositionList = roomState.userObjectList.map((obj: ObjectPosition) => ({
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
    updateRoomPosition(roomPosition);
  };

  // 방명록 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const userId = localStorage.getItem('userId');
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
                  {colors.map(([colorName, colorValue, colorPath], index) => (
                    <S.ColorCircle
                      key={colorName}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ delay: index * 0.1 }}
                      color={colorValue}
                      onClick={() => handleColorClick(colorName, colorValue, colorPath)}
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
            <SS.RoomInventoryItemWrapper>
              {activeCategory && renderItems()}
            </SS.RoomInventoryItemWrapper>
          </SS.InventoryContainer>
        </S.ItemToast>
      )}
    </>
  );
};

export default HomePage;
