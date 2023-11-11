import { Position, Rotation } from '@/types/room';

export interface ObjectPosition {
  userObjectId: number;
  position: Position;
  rotation: Rotation;
}

export interface RoomPosition {
  roomId: number;
  objectPositionList: ObjectPosition[];
}
