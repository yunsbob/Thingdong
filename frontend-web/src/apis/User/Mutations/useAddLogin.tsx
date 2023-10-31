import { useMutation } from '@tanstack/react-query';
import { addLogin } from '../userAPI';
import { UserLoginInfo } from '@/types/user';
// import { useUpdateAtom } from 'jotai/utils';
import { userState } from '@/states/userStates';

// const setUser = useUpdateAtom(userState);

const useAddLogin = () => {
  return useMutation({
    mutationFn: (user: UserLoginInfo) => addLogin(user),
    onSuccess: () => {
      console.log('로그인 완료');
    //   setUser(user);
    },
  });
};

export { useAddLogin };
