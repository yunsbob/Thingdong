export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Rotation {
  rx: number;
  ry: number;
  rz: number;
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
  source: string;
}

export interface MyRoom {
  // roomId
  // roomColor
}


