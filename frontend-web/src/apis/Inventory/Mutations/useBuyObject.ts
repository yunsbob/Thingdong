import { useMutation, useQueryClient } from '@tanstack/react-query';
import { buyObject } from '../inventoryAPI';

const useBuyObject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userObjectId: number) => buyObject(userObjectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
  });
};

export { useBuyObject };
