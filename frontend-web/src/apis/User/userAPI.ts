import { instance } from '@/apis/instance';
import { UserInfo } from '@/types/user';

const addUser = async (data: UserInfo) => {
  try {
    await instance.post('/users/signUp', data);
  } catch {
    new Error('user add error');
  }
};

const getUsers = async (userId: string) => {
  try {
    const { data } = await instance.get(`/users?userId=${userId}`);
    return data;
  } catch {
    new Error('get user error');
  }
};

export { addUser, getUsers };
