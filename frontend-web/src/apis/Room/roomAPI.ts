import { instance } from '@/apis/instance';
import { RoomColor, RoomPosition, RoomDark } from '@/interfaces/room';

const getRoom = async (userId: string) => {
  try {
    const { data } = await instance.get(`/rooms?userId=${userId}`);
    return data;
  } catch {
    new Error('get room error');
  }
};

const getRoomInventory = async () => {
  try {
    const response = await instance.get('/objects/roomInventory');
    return response.data;
  } catch {
    throw new Error('get roomInventory error');
  }
};

const updateRoomPosition = async (data: RoomPosition) => {
  try {
    await instance.post('/objects/position', data);
    console.log('잘들어왔니?? roomAPI', data);
  } catch {
    throw new Error('update room position error');
  }
};

const updateRoomColor = async (data: RoomColor) => {
  try {
    await instance.put('/rooms/colors', data);
  } catch {
    new Error('room color update error');
  }
};

const updateDarkMode = async (data: RoomDark) => {
  try {
    await instance.put('rooms/dark-mode', data);
  } catch {
    new Error('room dark mode update error');
  }
};

export {
  getRoom,
  getRoomInventory,
  updateRoomPosition,
  updateRoomColor,
  updateDarkMode,
};
