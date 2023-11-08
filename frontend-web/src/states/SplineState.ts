import { atom } from 'jotai';

export const splineNodes = atom<Record<string, any> | null>(null);
export const splineMaterials = atom<Record<string, any> | null>(null);
export const splineLoadingAtom = atom(true);