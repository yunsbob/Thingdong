import { getUsers } from '@/apis/User/userAPI';
import { useQuery } from '@tanstack/react-query';

/**
 * 검색 결과 유저 정보 GET
 * @returns
 */
/**
 * 띵구 검색 페이지의 사람
 * 띵구 요청 모달의 띵구
 * @param inputValue 검색 값
 * @returns
 */

const useGetUsers = (inputValue: string) => {
  return useQuery({
    queryKey: ['users', inputValue],
    queryFn: () => getUsers(inputValue),
  });
};

export { useGetUsers };
