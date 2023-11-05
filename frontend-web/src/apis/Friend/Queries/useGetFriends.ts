import { getFriends } from '@/apis/Friend/friendAPI';
import { useQuery } from '@tanstack/react-query';

const useGetFriends = () => {
  const { data } = useQuery({
    queryKey: ['friends'],
    queryFn: () => getFriends(),
  });
  return data;
};

export { useGetFriends };
