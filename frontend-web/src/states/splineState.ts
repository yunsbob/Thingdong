import { atom } from 'jotai';

// 일단 보류 (Spline 받아오는 부분 인덱스랑 다른 컴포넌트로 쪼갤 때 쓸것임)
export const splineNodes = atom<Record<string, any> | null>(null);
export const splineMaterials = atom<Record<string, any> | null>(null);
export const splineLoadingAtom = atom(true);