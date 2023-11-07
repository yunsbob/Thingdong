import { getRoomInventory } from '@/apis/Room/roomAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetRoomInventory = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['roomInventory'],
    queryFn: () => getRoomInventory(),
  });
  return data;
};

export { useGetRoomInventory };
