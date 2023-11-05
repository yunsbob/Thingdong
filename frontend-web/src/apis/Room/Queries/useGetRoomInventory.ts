import { getRoomInventory } from '@/apis/Room/roomAPI';
import { useQuery } from '@tanstack/react-query';

const useGetRoomInventory = () => {
  const { data } = useQuery({
    queryKey: ['roomInventory'],
    queryFn: () => getRoomInventory(),
  });
  return data;
};

export { useGetRoomInventory };
