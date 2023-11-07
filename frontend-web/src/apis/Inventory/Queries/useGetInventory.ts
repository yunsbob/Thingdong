import { getInventory } from '@/apis/Inventory/inventoryAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetInventory = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['inventory'],
    queryFn: () => getInventory(),
  });
  return data;
};

export { useGetInventory };
