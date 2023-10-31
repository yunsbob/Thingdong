import { instance } from '@/apis/instance';
import { UserInfo } from '@/types/user';

const addUser = async (data: UserInfo) => {
  try {
    await instance.post('/users/signUp', data);
  } catch {
    new Error('user add error');
  }
};

export { addUser };
