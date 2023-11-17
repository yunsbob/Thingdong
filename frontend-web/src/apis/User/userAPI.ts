import { instance } from '@/apis/instance';
import { UserInfo, UserLoginInfo } from '@/types/user';

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

const addLogin = async (data: UserLoginInfo) => {
  try {
    const response = await instance.post('/users/login', data);
    return response.data;
  } catch {
    new Error('login error');
  }
};

const getUserInfo = async () => {
  try {
    const { data } = await instance.get('/users/info');
    return data;
  } catch {
    new Error('get userinfo error');
  }
};
export { addUser, getUsers, addLogin, getUserInfo };
