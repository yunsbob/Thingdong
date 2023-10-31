import { instance } from '@/apis/instance';

const getFriends = async () => {
  try {
    const response = await instance.get('/thinggus');
    return response.data;
  } catch {
    new Error('get friends error');
  }
};

export { getFriends };
