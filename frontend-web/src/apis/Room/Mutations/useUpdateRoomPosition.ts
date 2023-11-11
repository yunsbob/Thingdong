import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRoomPosition } from '@/apis/Room/roomAPI';
import { RoomPosition } from '@/interfaces/room';

const useUpdateRoomPosition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (roomPosition: RoomPosition) =>
      updateRoomPosition(roomPosition),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['room'] });
      //TODO: Room get 해오는 커스텀훅 작성시 쿼리키 'room'
    },
  });
};

export { useUpdateRoomPosition };
