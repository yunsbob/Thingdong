import { atom } from 'jotai';

export type Unboxing = {
  glbPath: string;
  pngPath: string;
};

export const modalOpenAtom = atom(false);

export const modalContentAtom = atom('textTyping');

export const typingContentAtom = atom('');

export const unboxingObjectAtom = atom<Unboxing>({ glbPath: '', pngPath: '' });

export const sendingFriendAtom = atom('');
