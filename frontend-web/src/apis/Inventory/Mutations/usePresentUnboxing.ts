import { useMutation, useQueryClient } from '@tanstack/react-query';
import { presentUnboxing } from '@/apis/Inventory/inventoryAPI';

export interface PresentFriend {
  userId: string;
  userObjectId: number;
}

const usePresentUnboxing = () => {
  return useMutation({
    mutationFn: (presentFriend: PresentFriend) =>
      presentUnboxing(presentFriend),
  });
};

export { usePresentUnboxing };
