import { getRoom } from '@/apis/Room/roomAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

/**
 *
 * @param inputValue Room 주인의 userId
 * @returns Room 주인의 roomId
 */

const useGetRoom = (inputValue: string) => {
  return useSuspenseQuery({
    queryKey: ['room', inputValue],
    queryFn: () => getRoom(inputValue),
  });
};

export { useGetRoom };
