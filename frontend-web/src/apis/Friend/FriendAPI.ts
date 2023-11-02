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
    throw new Error('delete friend error');
  }
};

const requestFriend = async (userId: string) => {
  try {
    await instance.post('/thinggus', { userId });
  } catch {
    throw new Error('request friend error');
  }
};

const acceptFriend = async (userId: string) => {
  try {
    await instance.put(`/thinggus?userId=${userId}`);
  } catch {
    throw new Error('accept friend error');
  }
};

export { getFriends, deleteFriend, requestFriend, acceptFriend };
