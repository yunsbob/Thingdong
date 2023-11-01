import { getUsers } from '@/apis/User/userAPI';
import { useQuery } from '@tanstack/react-query';

/**
 * 검색 결과 유저 정보 GET
 * @returns
 */
const useGetUsers = (inputValue: string) => {
  return useQuery({
    queryKey: ['users', inputValue],
    queryFn: () => getUsers(inputValue),
  });
};

export { useGetUsers };
