import { atom } from 'jotai';

export const userState = atom({
  accessToken: '',
  userId: '',
  nickName: '',
  thingAmount: 0,
  patoken: ''
});