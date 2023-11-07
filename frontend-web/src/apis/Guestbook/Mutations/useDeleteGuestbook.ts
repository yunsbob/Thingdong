import { deleteGuestbook } from '@/apis/Guestbook/guestbookAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteGuestbook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (guestBookId: number) => deleteGuestbook(guestBookId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guestbooks'] });
    },
  });
};

export { useDeleteGuestbook };
