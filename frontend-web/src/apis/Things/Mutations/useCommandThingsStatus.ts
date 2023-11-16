import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commandThingsStatus } from '@/apis/Things/thingsAPI';
import { ThingsStatusCommands } from '@/types/things';

const useCommandThingsStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      deviceId,
      data,
    }: {
      deviceId: string;
      data: ThingsStatusCommands;
    }) => commandThingsStatus(deviceId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['things'] });
    },
  });
};

export { useCommandThingsStatus };
