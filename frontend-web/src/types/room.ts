import * as S from '@/pages/Things/PAT/Modal/NewThingsModal/NewThingsModal.styles';
export type Position = [
  x: number,
  y: number,
  z: number,
]

export type Rotation = [
  x: number,
  y: number,
  z: number,
]

export interface Size {
  width: number;
  height: number;
}

export interface UserObject {
  name: string;
  userObjectId: number;
  objectId: number;
  objectModelPath: string;
  isWall?: boolean;
  position: Position;
  rotation: Rotation;
  size?: Size;
}

// 스마트용따로
// export interface UserObjectList {
//   name: string;
//   userObjectId: number;
//   objectId: number;
//   category: string;
//   x: number;
//   y: number;
//   z: number;
//   source: string;
//   isRightWall?: boolean;
//   rotationY?: number;
//   size?: ObjectSize; // 나중엔 필수값으로
// }

export interface MyRoom {
  userObjectList: UserObject;
  userId: string;
  roomColor: string;
  roomModelPath: string;
  roomId?: number;
  nextRoom?: number;
  prevRoom?: number;
}
