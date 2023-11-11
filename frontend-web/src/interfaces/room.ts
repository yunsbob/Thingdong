import { Position, Rotation, UserObject } from '@/types/room';

export interface ObjectPosition {
  userObjectId: number;
  position: Position;
  rotation: Rotation;
}

export interface RoomPosition {
  roomId: number;
  objectPositionList: ObjectPosition[];
}

export interface RoomState {
    userObjectList: UserObject[];
    roomColor: string;
    roomId: number;
    userId: string;
}