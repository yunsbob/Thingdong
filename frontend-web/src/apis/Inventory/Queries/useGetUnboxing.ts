import { getUnBoxing } from '@/apis/Inventory/inventoryAPI';
import { modalContentAtom } from '@/states/unboxingModalStates';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

const useGetUnboxing = (setence: string) => {
  const modalContent = useAtomValue(modalContentAtom);

  return useQuery({
    queryKey: ['unboxing'],
    queryFn: () => getUnBoxing(setence),
    enabled: modalContent === 'opening',
    retry: false,
  });
};

export { useGetUnboxing };
