import { acceptFriend } from '@/apis/Friend/friendAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useAcceptFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => acceptFriend(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friends'] });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export { useAcceptFriend };
