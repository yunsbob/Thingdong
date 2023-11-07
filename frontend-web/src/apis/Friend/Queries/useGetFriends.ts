import { getFriends } from '@/apis/Friend/friendAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetFriends = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['friends'],
    queryFn: () => getFriends(),
  });
  return data;
};

export { useGetFriends };
