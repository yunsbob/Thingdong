import { atom } from 'jotai';

interface InventoryItemProps {
  userObjectId?: number;
  objectImagePath: string;
  objectThing: number;
  objectStatus: 'Y' | 'N';
  objectName?: string;
  purchaseDay?: string;
}

export const modalOpenAtom = atom(false);

export const selectedItemAtom = atom<InventoryItemProps | null>(null);

export const typingContentAtom = atom('');
