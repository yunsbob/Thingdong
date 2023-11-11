import { getThingStory } from '@/apis/Inventory/inventoryAPI';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetThingStory = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['thingStory'],
    queryFn: () => getThingStory(),
  });
  return data;
};

export { useGetThingStory };
