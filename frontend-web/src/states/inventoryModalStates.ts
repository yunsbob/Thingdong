import { InventoryItemProps } from '@/types/inventory';
import { atom } from 'jotai';

export const modalOpenAtom = atom(false);

export const selectedItemAtom = atom<InventoryItemProps | null>(null);

export const deleteModalOpenAtom = atom(false);

export const deleteItemAtom = atom<InventoryItemProps | null>(null);
