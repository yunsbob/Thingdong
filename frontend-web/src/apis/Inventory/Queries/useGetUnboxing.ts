import { getUnBoxing } from '@/apis/Inventory/inventoryAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetUnboxing = (setence: string) => {
  return useSuspenseQuery({
    queryKey: ['unboxing'],
    queryFn: () => getUnBoxing(setence),
  });
};

export { useGetUnboxing };
