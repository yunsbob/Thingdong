import { getInventory } from '../inventoryAPI';
import { useQuery } from '@tanstack/react-query';

const useGetInventory = () => {
  const { data } = useQuery({
    queryKey: ['inventory'],
    queryFn: () => getInventory(),
  });
  return data;
};

export { useGetInventory };
