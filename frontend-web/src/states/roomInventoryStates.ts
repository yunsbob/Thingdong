import { atom } from 'jotai';
import { RoomInventoryItemProps } from '@/types/inventory';

export interface RoomInventoryState {
  furnitureList: RoomInventoryItemProps[];
  homeApplianceList: RoomInventoryItemProps[];
  propList: RoomInventoryItemProps[];
  floorList: RoomInventoryItemProps[];
  smartThingsList: RoomInventoryItemProps[];
  unBoxThingList: RoomInventoryItemProps[];
  // 다른 필요한 프로퍼티들...
}

export const roomInventoryAtom = atom<RoomInventoryState>({
  furnitureList: [],
  homeApplianceList: [],
  propList: [],
  floorList: [],
  smartThingsList: [],
  unBoxThingList: [],
});