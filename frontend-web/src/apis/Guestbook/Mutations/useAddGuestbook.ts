import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addGuestbook } from '@/apis/Guestbook/guestbookAPI';
import { Guestbook } from '@/types/guestbook';

const useAddGuestbook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Guestbook) => addGuestbook(data),
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['guestbooks'] });
    },
  });
};

export { useAddGuestbook };
