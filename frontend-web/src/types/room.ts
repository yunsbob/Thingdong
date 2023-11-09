export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Rotation {
  xRotation: number;
}

export interface MyObject {
  name: string;
  modelId: number;
  category: string;
  position: Position;
  rotation?: Rotation;
  isRightWall?: boolean;
  isClicked?: boolean;
  isThings?: boolean;
  isActivated?: boolean;
}

export interface MyRoom {
  // roomId
  // roomColor
}


