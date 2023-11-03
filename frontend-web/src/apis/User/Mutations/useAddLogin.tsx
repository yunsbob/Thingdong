import { useMutation } from '@tanstack/react-query';
import { addLogin } from '../userAPI';
import { UserLoginInfo, CurrentUser } from '@/types/user';
import { useAtom } from 'jotai';
import { userState } from '@/states/userStates';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const useAddLogin = (redirectPath = PATH.ROOT) => {
  const [user, setUser] = useAtom(userState);
  const navigate = useNavigate()
  // const navigatePage = (path: string) => {
  //   navigate(path);
  // }

  return useMutation<CurrentUser, unknown, UserLoginInfo>({
    mutationFn: (user: UserLoginInfo) => addLogin(user),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('nickName',data.nickName);
      setUser(data);
      navigate(redirectPath);
      console.log('-로그인 완료- jotai Atom에 저장되는 user정보: ', data);
    },
  });
};

export { useAddLogin };
