import { useMutation } from "@tanstack/react-query"; // 1. 리액트쿼리 기본 제공값 -> .mutate로 입력한 값 담는 곳 (?)
import { addUser } from "../userAPI";
import { UserInfo } from "@/types/user";

const useAddUser = () => {
  // const setUserId = useSetRecoilState(userIdState);
  // const queryCilent = useQueryClient();
  return useMutation((userInfo: UserInfo) => addUser(userInfo), {
    onSuccess: () => {
      console.log("회원 등록!");
    },
    onError: () => {
      console.log("회원 등록 실패...");
    },
  });
};

export { useAddUser };