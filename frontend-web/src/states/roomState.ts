import { atom } from 'jotai';
import { UserObject } from '@/types/room';

export const editModeAtom = atom(false);
export const userObjectsAtom = atom<UserObject[]>([]);
export const roomColorAtom = atom('white');