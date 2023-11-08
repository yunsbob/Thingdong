import { atom } from 'jotai';
import { MyObject } from '@/types/room';

export const editModeAtom = atom(false);
export const myObjectsAtom = atom<MyObject[]>([]);
