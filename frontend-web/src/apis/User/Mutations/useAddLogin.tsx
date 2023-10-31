import { useMutation } from '@tanstack/react-query';
import { addLogin } from '../userAPI';
import { UserLoginInfo, CurrentUser } from '@/types/user';
import { useAtom } from 'jotai';
import { userState } from '@/states/userStates';

const useAddLogin = () => {
  const [user, setUser] = useAtom(userState);

  return useMutation<CurrentUser, unknown, UserLoginInfo>({
    mutationFn: (user: UserLoginInfo) => addLogin(user),
    onSuccess: (data) => {
      console.log('로그인 완료');
      localStorage.setItem('accessToken', data.accessToken);
      setUser(data);
    },
  });
};

export { useAddLogin };
