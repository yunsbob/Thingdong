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

export interface MyRoomProps {
  isEditing: boolean;
  position: Position;
  rotation: Rotation;
  userObject: UserObject[];
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

  // TODO: get으로 user objectLists 불러오기
  // TODO: useMemo사용하기
  // TODO: online sims만든사람 예외처리 방법 참고하기
  // TODO: onClick 함수 따로 재사용할 핸들러로 빼기 OR useRef로 클릭 인식
  // TODO: Canvas 속성 연장하기
  // TODO: OrthographicCamera -> PerspectiveCamera로 옮기기
  // TODO: dispose={null}부분 지워도 괜찮은지
  // TODO: directionalLight 모듈로 빼기
  // <meshStandardMaterial attach="material" color="red" /> 이걸로 바꿔보기
  // TODO: any대신 다른 타입으로 지정해보기
  // TODO: 표준 프로퍼티가 아니라는데... rotationY 다시 한 번 확인해보기