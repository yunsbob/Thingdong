import { instance } from '@/apis/instance';
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
export { getFriendsRoom, getRoomInventory };