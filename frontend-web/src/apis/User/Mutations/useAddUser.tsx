import { useMutation } from '@tanstack/react-query';
import { addUser } from '../userAPI';
import { UserInfo } from '@/types/user';
import { useAddLogin } from '@/apis/User/Mutations/useAddLogin';
import { PATH } from '@/constants/path';

const useAddUser = () => {
  const addLoginMutation = useAddLogin(PATH.SPLASH);
  return useMutation({
    mutationFn: (user: UserInfo) => addUser(user),
    onSuccess: (_, variables: UserInfo) => {
      console.log('회원 등록');
      addLoginMutation.mutate({
        userId: variables.userId,
        password: variables.password,
      });
    },
    // onError: (err: Error) => {
    //   console.log(err);
    // },
  });
};

export { useAddUser };
