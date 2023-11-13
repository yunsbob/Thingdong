import { useMutation } from '@tanstack/react-query';
import { addLogin } from '../userAPI';
import { UserLoginInfo, CurrentUser } from '@/types/user';
import { useAtom } from 'jotai';
import { userState } from '@/states/userStates';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const useAddLogin = (redirectPath = PATH.ROOT) => {
  const [user, setUser] = useAtom(userState);
  const navigate = useNavigate();

  return useMutation<CurrentUser, unknown, UserLoginInfo>({
    mutationFn: (user: UserLoginInfo) => addLogin(user),
    onSuccess: data => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('nickName', data.nickName);
      localStorage.setItem('userId', data.userId);
      console.log('로그인 요청까지도 된건가?')
      setUser(data);
      navigate(redirectPath);
    },
  });
};

export { useAddLogin };
