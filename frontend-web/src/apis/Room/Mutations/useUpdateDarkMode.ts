import { useMutation } from '@tanstack/react-query';
import { updateDarkMode } from '@/apis/Room/roomAPI';
import { RoomDark } from '@/interfaces/room';

const useUpdateDarkMode = () => {
  return useMutation({
    mutationFn: (roomDark: RoomDark) =>
      updateDarkMode(roomDark),
  });
};

export { useUpdateDarkMode };
