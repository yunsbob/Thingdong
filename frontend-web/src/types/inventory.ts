export type Category = '가구' | '가전' | '소품' | '바닥' | '띵즈' | '언박띵';

export interface InventoryItemProps {
  userObjectId?: number;
  objectImagePath: string;
  objectThing: number;
  objectStatus: 'Y' | 'N';
  objectName?: string;
  purchaseDay?: string;
}

export interface InventoryData {
  furnitureList: InventoryItemProps[];
  homeApplianceList: InventoryItemProps[];
  propList: InventoryItemProps[];
  floorList: InventoryItemProps[];
  smartThingsList: InventoryItemProps[];
  unBoxThingList: InventoryItemProps[];
}

export interface UnboxingItemProps {
  objectImagePath: string;
  objectName: string;
  purchaseDay: string;
}

export interface UnboxingProps {
  unBoxThingList: InventoryItemProps[];
}

// roomInventory
export interface RoomInventoryItemProps {
  userObjectId: number;
  name: string;
  objectModelPath: string;
  objectImagePath: string;
  isWall: boolean;
  objectStatus: 'Y' | 'N';
  deviceId?: string;
  smartThingsStatus?: boolean;
}

export interface RoomInventoryData {
  furnitureList: RoomInventoryItemProps[];
  homeApplianceList: RoomInventoryItemProps[];
  propList: RoomInventoryItemProps[];
  floorList: RoomInventoryItemProps[];
  smartThingsList: RoomInventoryItemProps[];
  unBoxThingList: RoomInventoryItemProps[];
}
