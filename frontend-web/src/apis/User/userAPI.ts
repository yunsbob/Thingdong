import { instance } from '@/apis/instance';
import { UserInfo } from 'types/user';

const addUser = async (data: UserInfo) => {
  await instance.post('/users/signUp', data);
};

export { addUser };
