import { instance } from "@/apis/instance";
import { UserInfo } from "@/types/user";

const addUser = async (data: UserInfo) => {
    const response = await instance.post("/users/join", data);
    // console.log(response.data, "addUser안에서 localstorage에 userId 저장");
    localStorage.setItem("userId", response.data.userId);
    console.log("userId", response.data.userId, '추가');
  };