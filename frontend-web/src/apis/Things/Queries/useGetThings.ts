import { getThings } from '@/apis/Things/thingsAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetThings = () => {
  return useSuspenseQuery({
    queryKey: ['things'],
    queryFn: () => getThings(),
  });
};

export { useGetThings };
