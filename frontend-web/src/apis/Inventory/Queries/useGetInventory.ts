import { getInventory } from '@/apis/Inventory/inventoryAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetInventory = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['inventory'],
    queryFn: () => getInventory(),
  });
  console.log('hehe', data)
  return data;
};

export { useGetInventory };
