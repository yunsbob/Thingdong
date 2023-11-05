import { getThingStory } from '../inventoryAPI';
import { useQuery } from '@tanstack/react-query';

const useGetThingStory = () => {
  const { data } = useQuery({
    queryKey: ['thingStory'],
    queryFn: () => getThingStory(),
  });
  return data;
};

export { useGetThingStory };
