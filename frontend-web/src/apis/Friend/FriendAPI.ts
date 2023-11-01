import { instance } from '@/apis/instance';

const getFriends = async () => {
  try {
    const response = await instance.get('/thinggus');
    return response.data;
  } catch {
    throw new Error('get friends error');
  }
};

const deleteFriend = async (userId: string) => {
  try {
    await instance.delete(`/thinggus/${userId}`);
  } catch {
    throw new Error('delete friends error');
  }
};

export { getFriends, deleteFriend };
