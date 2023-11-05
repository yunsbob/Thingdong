// import { getInventory } from '../inventoryAPI';
import { getInventory } from '@/apis/Inventory/inventoryAPI';
import { useQuery } from '@tanstack/react-query';

const useGetInventory = () => {
  const { data } = useQuery({
    queryKey: ['inventory'],
    queryFn: () => getInventory(),
  });
  return data;
};

export { useGetInventory };
