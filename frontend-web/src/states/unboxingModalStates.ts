import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';
import { atom } from 'jotai';

export type Unboxing = {
  glbPath: string;
  pngPath: string;
};

export const modalOpenAtom = atom(false);

export const modalContentAtom = atom<string>(UNBOXING_MODAL_NAME.TEXT_TYPING);

export const typingContentAtom = atom('');

export const unboxingObjectAtom = atom<Unboxing>({ glbPath: '', pngPath: '' });

export const sendingFriendAtom = atom('');
