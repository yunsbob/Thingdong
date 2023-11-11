import { instance } from '@/apis/instance';
import { RoomPosition } from '@/interfaces/room';

const getFriendsRoom = async (userId: string) => {
  try {
    const { data } = await instance.get(`/rooms?userId=${userId}`);
    return data;
  } catch {
    new Error('get user error');
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

const updateRoomPosition = async (roomPosition: RoomPosition) => {
  try {
    await instance.post('/objects/position', { roomPosition });
  } catch {
    throw new Error('update room position error');
  }
}

export { getFriendsRoom, getRoomInventory, updateRoomPosition };