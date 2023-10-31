import { useMutation } from '@tanstack/react-query';
import { addLogin } from '../userAPI';
import { UserLoginInfo, CurrentUser } from '@/types/user';
import { useAtom } from 'jotai';
import { userState } from '@/states/userStates';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const useAddLogin = () => {
  const [user, setUser] = useAtom(userState);
  const navigate = useNavigate()
  const navigatePage = (path: string) => {
    navigate(path);
  }

  return useMutation<CurrentUser, unknown, UserLoginInfo>({
    mutationFn: (user: UserLoginInfo) => addLogin(user),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      setUser(data);
      navigatePage(PATH.ROOT);
      console.log('-로그인 완료- jotai Atom에 저장되는 user정보: ', data);
    },
  });
};

export { useAddLogin };
