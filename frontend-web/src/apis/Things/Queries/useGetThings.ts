import { getThings } from '@/apis/Things/thingsAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetThings = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['things'],
    queryFn: () => getThings(),
  });
  return data
};

export { useGetThings };
