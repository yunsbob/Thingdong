import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleThingsStatus } from '@/apis/Things/thingsAPI';
import { ToggleThingsStatus } from '@/types/things';

const useToggleThingsStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      deviceId,
      data,
    }: {
      deviceId: string;
      data: ToggleThingsStatus;
    }) => toggleThingsStatus(deviceId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['things'] });
    },
  });
};

export { useToggleThingsStatus };
