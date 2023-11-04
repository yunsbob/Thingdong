import { instance } from '@/apis/instance';

const getFriendsRoom = async (userId: string) => {
  try {
    const { data } = await instance.get(`/rooms?userId=${userId}`);
    return data;
  } catch {
    new Error('get user error');
  }
};

export { getFriendsRoom };
