import { getFriends } from '@/apis/Friend/FriendAPI';
import { useQuery } from '@tanstack/react-query';

const useGetFriends = () => {
  const { data } = useQuery({
    queryKey: ['friends'],
    queryFn: () => getFriends(),
  });
  return data;
};

export { useGetFriends };
