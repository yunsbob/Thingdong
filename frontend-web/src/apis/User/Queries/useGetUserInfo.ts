import { getUserInfo } from '@/apis/User/userAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetUserInfo = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(),
  });
  return data;
};

export { useGetUserInfo };
