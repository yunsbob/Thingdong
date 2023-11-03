import { getUserInfo } from '@/apis/User/userAPI';
import { useQuery } from '@tanstack/react-query';

const useGetUserInfo = () => {
  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => getUserInfo(),
  });
  return data
};

export { useGetUserInfo };
