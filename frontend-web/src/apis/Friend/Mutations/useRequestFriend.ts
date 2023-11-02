import { requestFriend } from '@/apis/Friend/FriendAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRequestFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => requestFriend(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

export { useRequestFriend };
