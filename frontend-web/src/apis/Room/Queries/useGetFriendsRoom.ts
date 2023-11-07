import { getFriendsRoom } from '@/apis/Room/roomAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

/**
 *
 * @param inputValue 방문할 띵구의 userId
 * @returns 방문할 띵구의 roomId
 */

const useGetFriendsRoom = (inputValue: string) => {
  return useSuspenseQuery({
    queryKey: ['friendsRoom', inputValue],
    queryFn: () => getFriendsRoom(inputValue),
  });
};

export { useGetFriendsRoom };
