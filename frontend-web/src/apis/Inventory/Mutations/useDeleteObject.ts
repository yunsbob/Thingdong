import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteObject } from '@/apis/Inventory/inventoryAPI';

const useDeleteObject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userObjectId: number) => deleteObject(userObjectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
    },
  });
};

export { useDeleteObject };
