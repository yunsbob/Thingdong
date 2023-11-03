import { useMutation, useQueryClient } from '@tanstack/react-query';
import { buyObject } from '../InventoryAPI';

const useBuyObject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userObjectId: number) => buyObject(userObjectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
    },
  });
};

export { useBuyObject };
