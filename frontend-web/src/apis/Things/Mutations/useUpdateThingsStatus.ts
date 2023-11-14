import { useMutation } from '@tanstack/react-query';
import { updateThingsStatus } from '@/apis/Things/thingsAPI';
import { ThingsStatus } from '@/types/things';

const useUpdateThingsStatus = () => {
  return useMutation({
    mutationFn: (thingsStatus: ThingsStatus) =>
      updateThingsStatus(thingsStatus),
  });
};

export { useUpdateThingsStatus };
