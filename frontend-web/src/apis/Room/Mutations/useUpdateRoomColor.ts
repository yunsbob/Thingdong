import { useMutation } from '@tanstack/react-query';
import { updateRoomColor } from '@/apis/Room/roomAPI';
import { RoomColor } from '@/interfaces/room';

const useUpdateRoomColor = () => {
  return useMutation({
    mutationFn: (roomColor: RoomColor) =>
      updateRoomColor(roomColor),
  });
};

export { useUpdateRoomColor };
