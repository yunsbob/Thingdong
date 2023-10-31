import { useMutation } from '@tanstack/react-query';
import { addUser } from '../userAPI';
import { UserInfo } from '@/types/user';

const useAddUser = () => {
  return useMutation({
    mutationFn: (user: UserInfo) => addUser(user),
    // onSuccess: () => {
    //   console.log('회원 등록!');
    // },
    // onError: (err: Error) => {
    //   console.log(err);
    // },
  });
};

export { useAddUser };
