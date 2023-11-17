export type UserInfo = {
  userId: string;
  password: string;
  nickname: string;
};

export type UserLoginInfo = {
  userId: string;
  password: string;
};

export type CurrentUser = {
  accessToken: string;
  userId: string;
  nickName: string;
  thingAmount: number;
  patoken: string;
};
