import { deleteFriend } from '@/apis/Friend/friendAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => deleteFriend(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friends'] });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export { useDeleteFriend };
